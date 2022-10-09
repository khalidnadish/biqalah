import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { titleTypoStyles, dataTypoStyles } from "./style";

const GenralInformation = ({ supData }) => {
  return (
    <>
      <Paper elevation={5} sx={{ p: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-10px",
            left: "10px",
            bgcolor: "error.dark",
            px: 1,
            borderRadius: "4px",
            boxShadow: 3,
            color: "background.paper",
          }}
        >
          عام
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            p: 1,
            fontSize: "1em",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>المندوب</Typography>
            <Typography sx={dataTypoStyles}>{supData.salesName}</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>ايميل</Typography>
            <Typography sx={dataTypoStyles}>{supData.saleEmail}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={titleTypoStyles}>الجوال</Typography>
            <Typography sx={dataTypoStyles}>{supData.salePhone}</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default GenralInformation;
