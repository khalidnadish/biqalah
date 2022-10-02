import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";

const boxContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  alignItems: "center",
  justifyContent: "flex-start",
};

const paperContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: 2,
  px: 2,
  pt: 3,
  pb: 1,
  position: "relative",
};

function AddSupplier({ actionForm = "A" }) {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [sup_name, setSup_name] = useState("");
  const [openbalance, setOpenbalance] = useState("");
  const [saleName, setSaleName] = useState("");
  const [saleMobile, setSaleMobile] = useState("");
  const [saleEmail, setSaleEmail] = useState("");
  const SupplerData = {
    sppliername: sup_name,
    salesName: saleName,
    openingBalance: openbalance,
    saleMobile: saleMobile,
    salesEmail: saleEmail,
  };

  return (
    <>
      <div className="addSup">
        <Paper elevation={6} sx={paperContainer}>
          {/* <p>{JSON.stringify(SupplerData)}</p> */}
          <Box sx={boxContainer}>
            <FormType actionForm={actionForm} />
            <InputText
              sup_name={sup_name}
              setSup_name={setSup_name}
              actionForm={actionForm}
              openbalance={openbalance}
              setOpenbalance={setOpenbalance}
              saleName={saleName}
              setSaleName={setSaleName}
              saleMobile={saleMobile}
              setSaleMobile={setSaleMobile}
              saleEmail={saleEmail}
              setSaleEmail={setSaleEmail}
            />
            <SupplierButton
              actionForm={actionForm}
              setSup_name={setSup_name}
              setOpenbalance={setOpenbalance}
              setSaleName={setSaleName}
              setSaleMobile={setSaleMobile}
              setSaleEmail={setSaleMobile}
              isBigScreen={isBigScreen}
              SupplerData={SupplerData}
            />
          </Box>
        </Paper>
      </div>
    </>
  );
}
export default AddSupplier;

const SupplierButton = ({
  actionForm,
  setSup_name,
  setOpenbalance,
  setSaleName,
  setSaleMobile,
  setSaleEmail,
  isBigScreen,
  SupplerData,
}) => {
  const [open, toggle] = useToggle(false);
  const handleClear = () => {
    setSup_name("");
    setOpenbalance("");
    setSaleName("");
    setSaleMobile("");
    setSaleEmail("");
  };
  const handleSave = () => {
    alert(JSON.stringify(SupplerData));
  };

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
          onClick={handleSave}
        >
          {actionForm === "A" && <SaveIcon fontSize="small" />}
          {actionForm === "U" && <EditIcon fontSize="small" />}
          {actionForm === "D" && <DeleteSweepIcon fontSize="small" />}
        </Button>
        {actionForm === "A" && (
          <Button
            color="error"
            sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
            variant="contained"
          >
            <CleaningServicesIcon fontSize="small" />
          </Button>
        )}

        {/* Show only if New */}

        {!isBigScreen && actionForm === "A" && (
          <Button
            color="error"
            sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}
            variant="contained"
            onClick={toggle}
          >
            <VisibilityIcon fontSize="small" />
          </Button>
        )}
      </Box>
      {open && (
        <DiloagShow open={open} toggle={toggle} title={"الموردين"}>
          <ListSupplier />{" "}
        </DiloagShow>
      )}
    </>
  );
};
const FormType = ({ actionForm }) => {
  let formLabel;
  let labelcolor;
  switch (actionForm) {
    case "A":
      formLabel = "مورد جديد";
      labelcolor = "primary.dark";
      break;
    case "U":
      formLabel = "تعديل مورد";
      labelcolor = "warning.dark";
      break;
    case "D":
      formLabel = "حذف مورد";
      labelcolor = "error.dark";
      break;

    default:
      break;
  }

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "-10px",
          right: "10px",
          bgcolor: labelcolor,
          color: "background.paper",
          px: 2,
          borderRadius: "5px",
        }}
      >
        <Typography sx={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
          {formLabel}
        </Typography>
      </Box>
    </>
  );
};

const InputText = (props) => {
  return (
    <>
      <Sup_name
        actionForm={props.actionForm}
        value={props.sup_name}
        setValue={props.setSup_name}
      />
      <OpeningBalance
        actionForm={props.actionForm}
        value={props.openbalance}
        setValue={props.setOpenbalance}
      />
      <SaleName
        actionForm={props.actionForm}
        value={props.saleName}
        setValue={props.setSaleName}
      />
      <Mobile
        actionForm={props.actionForm}
        value={props.saleMobile}
        setValue={props.setSaleMobile}
      />
      <Email
        actionForm={props.actionForm}
        value={props.saleEmail}
        setValue={props.setSaleEmail}
      />
    </>
  );
};

function Sup_name({ actionForm, value, setValue }) {
  let statues = true;
  if (actionForm === "A") {
    statues = false;
  }
  if (actionForm === "U") {
    statues = true;
  }
  if (actionForm === "D") {
    statues = true;
  }

  return (
    <InputWithLabel
      label={"اسم المورد"}
      fieldType="text"
      widthx={"100%"}
      value={value}
      setValue={setValue}
      iconX={
        <AddBusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      }
      disableToggle={statues}
    />
  );
}

function OpeningBalance({ actionForm, value, setValue }) {
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
      label={"الرصيد الافتتاحي"}
      fieldType="number"
      widthx={"100%"}
      value={value}
      setValue={setValue}
      disableToggle={statues}
      iconX={
        <AccountBalanceWalletIcon
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

function SaleName({ actionForm, value, setValue }) {
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

function Mobile({ actionForm, value, setValue }) {
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

function Email({ actionForm, value, setValue }) {
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
