import React from "react";
import InputWithLabel from "../../textfiled/InputWithLabel";
import { PersonIcon } from "./icons";

export function SaleName({ actionForm, value, setValue, initialValue }) {
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
      label={"اسم المندوب"}
      fieldType="text"
      disableToggle={statues}
      value={value}
      setValue={setValue}
      initialValue={initialValue}
      iconX={
        <PersonIcon
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
