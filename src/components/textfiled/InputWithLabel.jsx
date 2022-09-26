import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function InputWithLabel({ label }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={4} align="right">
            <Typography
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "400",
                alignItems: "right",
                fontSize: "14px",
              }}
            >
              {label}
            </Typography>
          </Grid>
          <Grid item xs={8} align="left">
            <TextField
              fullWidth
              size="small"
              inputProps={{
                style: {
                  fontSize: ".8rem",
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                },
              }} 
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "800",
                
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default InputWithLabel;
