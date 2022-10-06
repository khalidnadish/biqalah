import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import MyBox from "../Box/MyBox";

function DispOneSupplier({ supData }) {
  // console.log("data", supData);s
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,

          // bgcolor: "primary.light",
          p: 1,
          borderRadius: "8px",
        }}
      >
        <GenralInformation supData={supData} />
        <BalanceInformatin supData={supData} />
        <PaymebtInformatin supData={supData} />
        <PurchaiseInformatin supData={supData} />
        <OtherInformatin supData={supData} />
      </Box>
    </>
  );
}

export default DispOneSupplier;

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
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "400",
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
          <Typography sx={{ fontSize: { xs: ".8em", md: "1em" } }}>
            <span className="supplier_card_tilte"> المندوب</span>
            {supData.salesName}
          </Typography>
          <Typography sx={{ fontSize: { xs: ".8em", md: "1em" } }}>
            <span className="supplier_card_tilte"> ايميل </span>
            {supData.saleEmail}
          </Typography>
          <Typography sx={{ fontSize: { xs: ".8em", md: "1em" } }}>
            <span className="supplier_card_tilte"> الجوال </span>
            {supData.salePhone}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

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
              <span className="supplier_card_tilte">الرصيد الافتتاحي</span>
              <Typography>{supData.openBalance}</Typography>
            </MyBox>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <span className="supplier_card_tilte">الرصيد الحالي</span>
              <Typography fontWeight={"bold"}>
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
              <span className="supplier_card_tilte">اجمالي المشتريات</span>
              <Typography>{supData.total_invoices}</Typography>
            </MyBox>
            <MyBox dirctionType={"row"} justfiyType={"center"}>
              <span className="supplier_card_tilte"> الجمالي المدفوعات </span>
              <Typography>{supData.total_payed}</Typography>
            </MyBox>
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};

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
              <span className="supplier_card_tilte">اول مدفوعات</span>
              <Typography>{supData.first_pay_date}</Typography>
            </MyBox>

            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <span className="supplier_card_tilte">قيمة اول المدفوعات</span>
              <Typography>{supData.first_pay_amt}</Typography>
            </MyBox>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1 }}>
            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <span className="supplier_card_tilte">تاريخ اخر المدفوعات</span>
              <Typography>{supData.last_pay_date}</Typography>
            </MyBox>

            <MyBox
              dirctionType="row"
              justfiyType="flex-start"
              alignType="flex-start"
            >
              <span className="supplier_card_tilte">قيمة اخر المدفوعات</span>
              <Typography>{supData.last_pay_amt}</Typography>
            </MyBox>
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};

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
                <span className="supplier_card_tilte">
                  عدد فواتير المشتريات
                </span>
                <Typography>{supData.inv_count}</Typography>
              </MyBox>

              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <span className="supplier_card_tilte">
                  عدد فواتير المدفوعات
                </span>
                <Typography>{supData.pay_count}</Typography>
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
                <span className="supplier_card_tilte">تاريخ اول فاتورة</span>
                <Typography>{supData.first_inv_date}</Typography>
              </MyBox>

              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <span className="supplier_card_tilte">قيمة اول فاتورة</span>
                <Typography>{supData.first_inv_amt}</Typography>
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
                <span className="supplier_card_tilte">تاريخ اخر فاتورة</span>
                <Typography>{supData.last_inv_date}</Typography>
              </MyBox>
              <MyBox
                dirctionType="row"
                justfiyType="flex-start"
                alignType="flex-start"
              >
                <span className="supplier_card_tilte">قيمة اخر فاتورة</span>
                <Typography>{supData.last_inv_amt}</Typography>
              </MyBox>
            </Box>
            {/* ---------------------------------------------------------------- */}
          </Box>
        </MyBox>
      </Paper>
    </>
  );
};

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
          <Typography>
            <span className="supplier_card_tilte">الاكثر سحب</span>
            {supData.best_item}
          </Typography>
          <Typography>
            <span className="supplier_card_tilte">قيمة المرتجع</span>
            {supData.damage_total}
          </Typography>
          <Typography>
            <span className="supplier_card_tilte">عدد الاصناف</span>
            {supData.item_counters}
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
