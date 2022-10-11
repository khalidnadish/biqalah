import React from "react";
import InputWithLabel from "../../textfiled/InputWithLabel";
import { AccountBalanceWalletIcon } from "./icons";

export function AccountLimit({ actionForm, value, setValue, initialValue }) {
  let statues = true;
  if (actionForm === "A") {
    statues = false;
  }
  if (actionForm === "U") {
    statues = false;
  }
  if (actionForm === "D") {
    statues = true;
  }
  return (
    <InputWithLabel
      label={"حد الامان"}
      fieldType="number"
      widthx={"95%"}
      value={value}
      setValue={setValue}
      disableToggle={statues}
      initialValue={initialValue}
      iconX={
        <AccountBalanceWalletIcon
          sx={{
            color: "action.active",
            mr: 1,
            my: 0.5,
          }}
        />
      }
    />
  );
}
