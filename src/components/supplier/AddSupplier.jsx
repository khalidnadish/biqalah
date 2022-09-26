import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import InputWithLabel from "../textfiled/InputWithLabel";

function AddSupplier() {
  return (
    <Box
      sx={{
        
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        width: "95%",

        borderRadius: 2,
        boxShadow: 1,
        mt: 2,
        p: 2,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Noto Kufi Arabic, sans-serif",
          fontWeight: "800",
          boxShadow: 3,
          bgcolor: "primary.main",
          color: "background.paper",
          width: "100%",
          borderRadius: 1,
        }}
      >
        مورد جديد
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".3rem",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <InputWithLabel label={"اسم الشركة"} />
        <InputWithLabel label={"اسم المندوب"} />
        <InputWithLabel label={"رقم الجوال"} />
        <InputWithLabel label={"الايميل"} />
        <InputWithLabel label={"ملاحظات"} />
      </Box>
      <Box  sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}>
        <Button color="success" variant="contained">حفظ</Button>
        <Button color="error" variant="contained">مسح</Button>
      </Box>
    </Box>
  );
}

export default AddSupplier;
