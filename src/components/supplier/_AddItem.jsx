import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import InputWithLabel from "../textfiled/InputWithLabel";
import DropDown from "../dropdown/DropDown";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppsIcon from "@mui/icons-material/Apps";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import supplier from "../../helper/data/suplier.json";
function AddItem() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
        boxShadow: 3,
        mt: 2,
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".3rem",
          alignItems: "center",
          justifyContent: "space-evenly",
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
            p: 1,
          }}
        >
          صنف جديد
        </Typography>
        <DropDown
          label={"اسم المورد"}
          fieldType="text"
          required={"true"}
          myData={supplier}
          iconX={
            <AddBusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
        />
        <InputWithLabel
          label={"اسم المورد"}
          fieldType="text"
          required={"true"}
          iconX={
            <AddBusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
        />
        <InputWithLabel
          label={"اسم الصنف"}
          fieldType="text"
          iconX={
            <InventoryIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
        />
        <InputWithLabel
          label={"سعر الصنف"}
          fieldType="number"
          iconX={
            <PriceChangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
        />
        <InputWithLabel
          label={"العبوه"}
          fieldType="number"
          iconX={<AppsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />}
        />
        <InputWithLabel
          label={"ملاحظات"}
          fieldType="text"
          iconX={
            <ContentPasteIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <Button
          color="success"
          variant="contained"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
        >
          حفظ
        </Button>
        <Button
          color="error"
          variant="contained"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
        >
          مسح
        </Button>
      </Box>
    </Box>
  );
}

export default AddItem;
