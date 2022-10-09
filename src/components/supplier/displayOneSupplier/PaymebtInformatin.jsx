import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MyBox from "../../Box/MyBox";
import { titleTypoStyles, dataTypoStyles } from "./style";

const PaymebtInformatin = ({ supData }) => {
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
          المدفوعات
        </Box>
        <MyBox
          dirctionType="column"
          justfiyType="center"
          alignType="flex-start"
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>اول مدفوعات</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.first_pay_date}
              </Typography>
            </MyBox>

            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>قيمة اول المدفوعات</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.first_pay_amt}
              </Typography>
            </MyBox>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>تاريخ اخر المدفوعات</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.last_pay_date}
              </Typography>
            </MyBox>

            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <Typography sx={titleTypoStyles}>قيمة اخر المدفوعات</Typography>
              <Typography sx={dataTypoStyles}>
                {supData.last_pay_amt}
              </Typography>
            </MyBox>
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};
export default PaymebtInformatin;
