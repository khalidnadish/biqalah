import { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { VisibilityIcon, DeleteIcon, ModeEditOutlineIcon } from "./icons";
import Loader from "../../loader/Loader";
import useToggle from "../../../helper/toggleHooke";
import DiloagShow from "../../dawer/DiloagShow";
import supplierData from "../../../helper/data/suppliedrData.json";
import "../sup.css";

const DispOneSupplier = lazy(() =>
  import("../displayOneSupplier/DispOneSupplier")
);
const AddSupplier = lazy(() => import("../addSupplier/AddSupplier"));

function DisplaySupplier({ supplier, balance }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        alignItems: "center",
        border: "1px solid",
        borderColor: "#ccc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",
          height: "auto",
          overflow: "auto",
          p: 2,
        }}
      >
        <SupData supplier={supplier} balance={balance} />
        <Suspense fallback={<Loader />}>
          <ActionSup />
        </Suspense>
      </Box>
    </Paper>
  );
}
export default DisplaySupplier;

const SupData = ({ supplier, balance }) => (
  <>
    <Grid container alignItems={"center"}>
      <Grid item xs={8} align="right">
        <Typography
          sx={{
            fontSize: { xs: ".7em", md: ".9em" },
          }}
        >
          {supplier}
        </Typography>
      </Grid>
      <Grid item xs={4} align="center">
        <Box>
          <Typography
            sx={{
              borderBottom: "1px solid #ccc",
              width: "100%",
              fontWeight: "bold",
              fontSize: { xs: ".7em", md: ".9em" },
            }}
          >
            {balance}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} align="left"></Grid>
    </Grid>
  </>
);

const ActionSup = () => {
  const [show, setShow] = useToggle(false);
  const [update, setUpdate] = useToggle(false);
  const [delSupp, setDelSupp] = useToggle(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "flex-end" },
          gap: "10px",
          width: "100%",
          mt: 1,
        }}
      >
        <Button
          variant="contained"
          sx={{ minWidth: 0, p: 0.5, m: 0 }}
          onClick={() => setShow(true)}
        >
          <VisibilityIcon />
        </Button>
        <Button
          color="warning"
          variant="contained"
          sx={{ minWidth: 0, p: 0.5, m: 0 }}
          onClick={() => setUpdate(true)}
        >
          <ModeEditOutlineIcon />
        </Button>
        <Button
          color="error"
          variant="contained"
          sx={{ minWidth: 0, p: 0.5, m: 0 }}
          onClick={() => setDelSupp(true)}
        >
          <DeleteIcon />
        </Button>
      </Box>
      {show && (
        <DiloagShow
          open={show}
          toggle={setShow}
          title={supplierData[0].supplierName}
        >
          <DispOneSupplier supData={supplierData[0]} />
        </DiloagShow>
      )}

      {update && (
        <DiloagShow
          open={update}
          toggle={setUpdate}
          title={"تعديل مورد"}
          titleColor="warning.dark"
        >
          <AddSupplier actionForm={"U"} />
        </DiloagShow>
      )}
      {delSupp && (
        <DiloagShow
          open={delSupp}
          toggle={setDelSupp}
          title={"حذف مورد"}
          titleColor="error.dark"
        >
          <AddSupplier actionForm={"D"} />
        </DiloagShow>
      )}
    </>
  );
};
