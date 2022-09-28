import { Box, Button, Paper } from "@mui/material";
import React from "react";
import InputWithLabel from "../textfiled/InputWithLabel";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SaveIcon from "@mui/icons-material/Save";
import useToggle from "../../helper/toggleHooke";
import DiloagShow from "../dawer/DiloagShow";
import ListSupplier from "./ListSupplier";

function AddSupplier() {
  return (
    <div className="addSup">
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: "1rem",

          // alignItems: "center",
          justifyContent: "space-between",
          // bgcolor: "primary.light",
          borderRadius: 2,
          px: 2,
          pt: 1,
          pb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // height: "100%",
            gap: "5px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            <InputWithLabel
              label={"اسم المورد"}
              fieldType="text"
              widthx={"100%"}
              iconX={
                <AddBusinessIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              }
            />
            <InputWithLabel
              label={"الرصيد"}
              fieldType="number"
              widthx={"100%"}
              iconX={
                <AccountBalanceWalletIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <InputWithLabel
              label={"اسم المندوب"}
              fieldType="text"
              iconX={
                <PersonIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
            />
            <InputWithLabel
              label={"الجوال"}
              fieldType="text"
              iconX={
                <PhoneEnabledIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              }
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <InputWithLabel
              label={"ايميل"}
              fieldType="email"
              iconX={
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
            />
            <SupplierButton />
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
export default AddSupplier;

const SupplierButton = () => {
  const [open, toggle] = useToggle(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          mt: 0.5,
          width: "100%",
        }}
      >
        <Button
          color="success"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif", width: "70%" }}
          variant="contained"
        >
          <SaveIcon fontSize="small" />
        </Button>
        <Button
          color="error"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
          variant="contained"
        >
          <CleaningServicesIcon fontSize="small" />
        </Button>
        <Button
          color="error"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
          variant="contained"
          onClick={toggle}
        >
          <VisibilityIcon fontSize="small" />
        </Button>
      </Box>
      {open && (
        <DiloagShow open={open} toggle={toggle} title={"الموردين"}>
          <ListSupplier />{" "}
        </DiloagShow>
      )}
    </>
  );
};
