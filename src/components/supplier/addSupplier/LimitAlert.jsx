import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Checkbox } from "./icons";
import FormControlLabel from "@mui/material/FormControlLabel";

export function LimitAlert({ actionForm, value, setValue, initialValue }) {
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
  const handleChange = () => {
    setValue((pre) => event.target.checked);
    console.log(value);
  };
  useEffect(() => {
    // alert(initialValue);
    if (initialValue === "0") {
      setValue(false);
    } else {
      setValue(true);
    }
  }, [initialValue]);
  return (
    <FormControlLabel
      value="end"
      control={
        <Checkbox
          checked={value}
          onChange={() => {
            setValue((pre) => !value);
          }}
          sx={{ m: 0, p: 0.5 }}
        />
      }
      label={
        <Typography
          variant="caption"
          sx={{
            fontSize: "1rem",
            fontFamily: "Noto Kufi Arabic, sans-serif",
          }}
        >
          تنبية
        </Typography>
      }
      labelPlacement="start"
      sx={{ m: 0, p: 0 }}
    />
    // <Checkbox {...label} defaultChecked />
  );
}
