import {
  Box,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

function InputWithLabel({
  label,
  fieldType,
  iconX,
  widthx = "100%",
  disableToggle = false,
  value,
  setValue,
}) {
  const handleChange = (event) => {
    // console.log("event.target.value", event.target.value);
    setValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* <Box mx={1}>{iconX}</Box> */}
        <TextField
          type={fieldType}
          value={value}
          onChange={handleChange}
          size="small"
          disabled={disableToggle}
          placeholder={label}
          InputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
              width: widthx,
            },
            startAdornment: (
              <InputAdornment position="start">{iconX}</InputAdornment>
            ),
            // endAdornment: (
            //   <InputAdornment position="end">
            //     <ExpandMore />
            //   </InputAdornment>
            // ),
          }}
          inputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
              width: widthx,
            },
          }}
          sx={{
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "800",
            width: widthx,
          }}
        />
      </Box>
    </>
  );
}

export default InputWithLabel;
