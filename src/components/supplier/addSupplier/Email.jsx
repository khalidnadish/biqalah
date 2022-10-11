import React from "react";
import InputWithLabel from "../../textfiled/InputWithLabel";
import { EmailIcon } from "./icons";

export function Email({ actionForm, value, setValue, initialValue }) {
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
      label={"ايميل"}
      fieldType="email"
      value={value}
      setValue={setValue}
      disableToggle={statues}
      initialValue={initialValue}
      iconX={
        <EmailIcon
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
