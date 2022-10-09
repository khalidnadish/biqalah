import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MyBox from "../../Box/MyBox";
import { titleTypoStyles, dataTypoStyles } from "./style";
const BalanceInformatin = ({ supData }) => {
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
          الحركة
        </Box>
        <MyBox
          dirctionType="column"
          justfiyType="center"
          alignType="flex-start"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
            <MyBox
              dirctionType={"row"}
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>الرصيد الافتتاحي</Typography>
              <Typography sx={dataTypoStyles}>{supData.openBalance}</Typography>
            </MyBox>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>الرصيد الحالي</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.currentBalance}
              </Typography>
            </MyBox>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>اجمالي المشتريات</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.total_invoices}
              </Typography>
            </MyBox>
            <MyBox dirctionType={"row"} justfiyType={"center"}>
              <Typography sx={titleTypoStyles}>اجمالي المدفوعات</Typography>
              <Typography sx={dataTypoStyles}>{supData.total_payed}</Typography>
            </MyBox>
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};

export default BalanceInformatin;
