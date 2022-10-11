import React from "react";
import Box from "@mui/material/Box";
import { Email } from "./Email";
import { Mobile } from "./Mobile";
import { SaleName } from "./SaleName";
import { LimitAlert } from "./LimitAlert";
import { AccountLimit } from "./AccountLimit";
import { OpeningBalance } from "./OpeningBalance";
import { Sup_name } from "./Sup_name";

const InputText = (props) => {
  return (
    <>
      <Sup_name
        actionForm={props.actionForm}
        value={props.sup_name}
        setValue={props.setSup_name}
        initialValue={props.initialValue_sup_name}
      />
      {/* initialValue_id */}

      {/* initialValue_dbt */}
      {/* initialValue_crd */}

      <OpeningBalance
        actionForm={props.actionForm}
        value={props.openbalance}
        setValue={props.setOpenbalance}
        initialValue={props.initialValue_open_balance}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AccountLimit
          actionForm={props.actionForm}
          value={props.accountLimit}
          setValue={props.setAccountLimit}
          initialValue={props.initialValue_limit_balance}
        />
        <LimitAlert
          actionForm={props.actionForm}
          value={props.alertCheck}
          setValue={props.setAlertCheck}
          initialValue={props.initialValue_alert_limit}
        />
      </Box>
      <SaleName
        actionForm={props.actionForm}
        value={props.saleName}
        setValue={props.setSaleName}
        initialValue={props.initialValue_sales_name}
      />
      <Mobile
        actionForm={props.actionForm}
        value={props.saleMobile}
        setValue={props.setSaleMobile}
        initialValue={props.initialValue_salse_mobile}
      />
      <Email
        actionForm={props.actionForm}
        value={props.saleEmail}
        setValue={props.setSaleEmail}
        initialValue={props.initialValue_sales_email}
      />
    </>
  );
};
export default InputText;
