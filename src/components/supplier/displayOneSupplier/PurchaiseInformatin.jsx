import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { titleTypoStyles, dataTypoStyles } from "./style";

import MyBox from "../../Box/MyBox";

const PurchaiseInformatin = ({ supData }) => {
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
          المشتريات
        </Box>
        <MyBox
          dirctionType="column"
          justfiyType="center"
          alignType="flex-start"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "space-between",
            }}
          >
            {/* ---------------------------------------------------------------- */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}
            >
              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>
                  عدد فواتير المشتريات
                </Typography>
                <Typography sx={dataTypoStyles}>{supData.inv_count}</Typography>
              </MyBox>

              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>
                  عدد فواتير المدفوعات
                </Typography>
                <Typography sx={dataTypoStyles}>{supData.pay_count}</Typography>
              </MyBox>
            </Box>
            {/* ---------------------------------------------------------------- */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}
            >
              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>تاريخ اول فاتورة</Typography>
                <Typography sx={dataTypoStyles}>
                  {supData.first_inv_date}
                </Typography>
              </MyBox>

              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>قيمة اول فاتورة</Typography>
                <Typography sx={dataTypoStyles}>
                  {supData.first_inv_amt}
                </Typography>
              </MyBox>
            </Box>
            {/* ---------------------------------------------------------------- */}
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}
            >
              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>تاريخ اخر فاتورة</Typography>
                <Typography sx={dataTypoStyles}>
                  {supData.last_inv_date}
                </Typography>
              </MyBox>
              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <Typography sx={titleTypoStyles}>قيمة اخر فاتورة</Typography>
                <Typography sx={dataTypoStyles}>
                  {supData.last_inv_amt}
                </Typography>
              </MyBox>
            </Box>
            {/* ---------------------------------------------------------------- */}
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};
export default PurchaiseInformatin;
