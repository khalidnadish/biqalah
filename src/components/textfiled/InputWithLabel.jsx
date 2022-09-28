import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function InputWithLabel({ label, fieldType, iconX, widthx }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box mx={1}>{iconX}</Box>
        <TextField
          type={fieldType}
          fullWidth
          size="small"
          placeholder={label}
          inputProps={{
            style: {
              fontSize: "1rem",
              fontFamily: "Noto Kufi Arabic, sans-serif",
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
