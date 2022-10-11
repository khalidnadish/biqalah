import React, { lazy, useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import FormType from "./FormType";
import InputText from "./InputText";
import SupplierButton from "./SupplierButton";

const boxContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  alignItems: "center",
  justifyContent: "flex-start",
};

const paperContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: 2,
  px: 2,
  pt: 3,
  pb: 1,
  position: "relative",
  height: "100%",
};

function AddSupplier({ actionForm = "A", supplierId, u_SupplierData = "" }) {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));
  // console.log("add_SupplierData", u_SupplierData.data[0]);

  const [sup_name, setSup_name] = useState("");
  const [openbalance, setOpenbalance] = useState("");
  const [accountLimit, setAccountLimit] = useState("");
  const [saleName, setSaleName] = useState("");
  const [saleMobile, setSaleMobile] = useState("");
  const [saleEmail, setSaleEmail] = useState("");
  const [alertCheck, setAlertCheck] = useState(false);
  const SupplerData = {
    supplierName: sup_name,
    salesName: saleName,
    openingBalance: openbalance,
    accountLimit: accountLimit,
    alertCheck: alertCheck,
    saleMobile: saleMobile,
    salesEmail: saleEmail,
  };

  // useEffect(() => {
  //   supRef.current.value = u_SupplierData?.sup_name;
  // }, [actionForm]);

  return (
    <>
      <div className="addSup">
        <Paper elevation={6} sx={paperContainer}>
          <Box sx={boxContainer}>
            <FormType actionForm={actionForm} />
            <InputText
              sup_name={sup_name}
              setSup_name={setSup_name}
              actionForm={actionForm}
              openbalance={openbalance}
              setOpenbalance={setOpenbalance}
              saleName={saleName}
              setSaleName={setSaleName}
              saleMobile={saleMobile}
              setSaleMobile={setSaleMobile}
              saleEmail={saleEmail}
              setSaleEmail={setSaleEmail}
              accountLimit={accountLimit}
              setAccountLimit={setAccountLimit}
              alertCheck={alertCheck}
              setAlertCheck={setAlertCheck}
              initialValue_id={u_SupplierData?.id}
              initialValue_sup_name={u_SupplierData?.sup_name}
              initialValue_open_balance={u_SupplierData?.open_balance}
              initialValue_limit_balance={u_SupplierData?.limit_balance}
              initialValue_alert_limit={u_SupplierData?.alert_limit}
              initialValue_sales_name={u_SupplierData?.sales_name}
              // initialValue_dbt={u_SupplierData?.dbt}
              // initialValue_crd={u_SupplierData?.crd}
              initialValue_salse_mobile={u_SupplierData?.salse_mobile}
              initialValue_sales_email={u_SupplierData?.sales_email}
            />
            <SupplierButton
              actionForm={actionForm}
              setSup_name={setSup_name}
              setOpenbalance={setOpenbalance}
              setSaleName={setSaleName}
              setSaleMobile={setSaleMobile}
              setSaleEmail={setSaleEmail}
              setAccountLimit={setAccountLimit}
              setAlertCheck={setAlertCheck}
              isBigScreen={isBigScreen}
              SupplerData={SupplerData}
              sup_name={sup_name}
            />
          </Box>
        </Paper>
      </div>
    </>
  );
}
export default AddSupplier;
