import React from "react";
import InputWithLabel from "../../textfiled/InputWithLabel";
import { AddBusinessIcon } from "./icons";

export function Sup_name({ actionForm, value, setValue, initialValue }) {
  let statues = true;
  if (actionForm === "A") {
    statues = false;
  }
  if (actionForm === "U") {
    statues = true;
  }
  if (actionForm === "D") {
    statues = true;
  }

  return (
    <InputWithLabel
      label={"اسم المورد"}
      fieldType="text"
      widthx={"100%"}
      value={value}
      setValue={setValue}
      initialValue={initialValue}
      iconX={
        <AddBusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      }
      disableToggle={statues}
    />
  );
}
