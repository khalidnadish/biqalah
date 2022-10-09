import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { titleTypoStyles, dataTypoStyles } from "./style";

const OtherInformatin = ({ supData }) => {
  return (
    <>
      <Paper elevation={5} sx={{ py: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            bgcolor: "error.dark",

            px: 1,
            borderRadius: "4px",
            boxShadow: 3,
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "400",
            color: "background.paper",
          }}
        >
          اخرى
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>الاكثر سحب</Typography>
            <Typography sx={dataTypoStyles}>{supData.best_item}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>قيمة المرتجع</Typography>
            <Typography sx={dataTypoStyles}>{supData.damage_total}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>عدد الاصناف</Typography>
            <Typography sx={dataTypoStyles}>{supData.item_counters}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default OtherInformatin;
