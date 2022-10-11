import React from "react";
import InputWithLabel from "../../textfiled/InputWithLabel";
import { PhoneEnabledIcon } from "./icons";

export function Mobile({ actionForm, value, setValue, initialValue }) {
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
      label={"الجوال"}
      fieldType="text"
      value={value}
      setValue={setValue}
      disableToggle={statues}
      initialValue={initialValue}
      iconX={
        <PhoneEnabledIcon
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
