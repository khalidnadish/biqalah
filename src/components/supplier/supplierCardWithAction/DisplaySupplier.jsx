import { lazy, Suspense, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { VisibilityIcon, DeleteIcon, EditIcon } from "./icons";
import Loader from "../../loader/Loader";
import useToggle from "../../../helper/toggleHooke";
import DiloagShow from "../../dawer/DiloagShow";
import supplierData from "../../../helper/data/suppliedrData.json";
import axios from "axios";
import "../sup.css";
import { responsiveFontSizes } from "@mui/material";

const DispOneSupplier = lazy(() =>
  import("../displayOneSupplier/DispOneSupplier")
);
const AddSupplier = lazy(() => import("../addSupplier/AddSupplier"));

function DisplaySupplier({ supplier, balance, setSupplierid, supplierId }) {
  let bcolor = "";

  if (balance > 0) {
    bcolor = "primary";
  }

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
        <Suspense fallback={<Loader />}>
          <SupData supplier={supplier} balance={balance} />
          <ActionSup setSupplierid={setSupplierid} supplierId={supplierId} />
        </Suspense>
      </Box>
    </Paper>
  );
}
export default DisplaySupplier;

const SupData = ({ supplier, balance }) => (
  <>
    <Grid container alignItems={"center"}>
      <Grid item xs={6} align="right">
        <Typography
          sx={{
            fontSize: { xs: ".7em", md: ".9em" },
          }}
        >
          {supplier}
        </Typography>
      </Grid>
      <Grid item xs={6} align="center">
        <Typography
          sx={{
            width: "100%",
            fontWeight: "bold",
            fontSize: { xs: ".7em", md: ".9em" },
            px: 1,
            borderRadius: 2,
            bgcolor: parseInt(balance) >= 0 ? "success.light" : "error.main",
            color: parseInt(balance) >= 0 ? "common.black" : "common.white",
            textAlign: "center",
          }}
        >
          {balance}
        </Typography>
      </Grid>
      <Grid item xs={1} align="left"></Grid>
    </Grid>
  </>
);

const ActionSup = ({ setSupplierid, supplierId }) => {
  const [show, setShow] = useToggle(false);
  const [update, setUpdate] = useToggle(false);
  const [delSupp, setDelSupp] = useToggle(false);
  const [updateSupplierData, setUpdateSupplierData] = useState("");
  const handleUpdate = () => {
    setUpdate(true);
    console.log("setSupplierid", supplierId);
    axios.defaults.baseURL = "http://localhost:3000/";
    // axios.interceptors.response.use((undefind, error) => {
    //   console.log(error.response);
    // });

    const response = axios
      .get("supplier/getoneSupplier", { params: { supplierid: supplierId } })
      .then((response) => {
        setUpdateSupplierData((pre) => response.data[0]);
        console.log(response.data[0]);
      });
  };

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
          onClick={() => handleUpdate()}
        >
          <EditIcon />
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
          <AddSupplier actionForm={"U"} u_SupplierData={updateSupplierData} />
        </DiloagShow>
      )}
      {delSupp && (
        <DiloagShow
          open={delSupp}
          toggle={setDelSupp}
          title={"حذف مورد"}
          titleColor="error.dark"
        >
          <AddSupplier actionForm={"D"} supplierId={supplierId} />
        </DiloagShow>
      )}
    </>
  );
};
