import { Box, Button, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import InputWithLabel from "../../textfiled/InputWithLabel";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SaveIcon from "@mui/icons-material/Save";
import useToggle from "../../../helper/toggleHooke";
import DiloagShow from "../../dawer/DiloagShow";
import ListSupplier from "../listsupplier/ListSupplier";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Axios from "axios";
import { toast } from "react-toastify";
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
  height: "100%",
};

function AddSupplier({ actionForm = "A" }) {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [sup_name, setSup_name] = useState("");
  const [openbalance, setOpenbalance] = useState("");
  const [accountLimit, setAccountLimit] = useState("");
  const [saleName, setSaleName] = useState("");
  const [saleMobile, setSaleMobile] = useState("");
  const [saleEmail, setSaleEmail] = useState("");
  const [alertCheck, setAlertCheck] = useState(false);
  const SupplerData = {
    supplierName: sup_name,
    salesName: saleName,
    openingBalance: openbalance,
    accountLimit: accountLimit,
    alertCheck: alertCheck,
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
              accountLimit={accountLimit}
              setAccountLimit={setAccountLimit}
              alertCheck={alertCheck}
              setAlertCheck={setAlertCheck}
            />
            <SupplierButton
              actionForm={actionForm}
              setSup_name={setSup_name}
              setOpenbalance={setOpenbalance}
              setSaleName={setSaleName}
              setSaleMobile={setSaleMobile}
              setSaleEmail={setSaleEmail}
              setAccountLimit={setAccountLimit}
              setAlertCheck={setAlertCheck}
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
  setAccountLimit,
  setAlertCheck,
}) => {
  const [open, toggle] = useToggle(false);
  const handleClear = () => {
    setSup_name("");
    setOpenbalance("");
    setSaleName("");
    setSaleMobile("");
    setSaleEmail("");
    setAccountLimit("");
    setAlertCheck(false);
  };
  const handleSave = () => {
    if (SupplerData.sup_name === undefined || SupplerData.sup_name === null) {
      toast.error("لايوجد اسم للمورد", { theme: "colored" });
      return;
    }
    Axios.post("http://localhost:3000/supplier/insert", {
      SupplerData,
    }).then(() => {
      // alert(JSON.stringify(SupplerData));
    });
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
            onClick={handleClear}
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
          <ListSupplier />
        </DiloagShow>
      )}
    </>
  );
};
const FormType = ({ actionForm }) => {
  // alert(actionForm);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AccountLimit
          actionForm={props.actionForm}
          value={props.accountLimit}
          setValue={props.setAccountLimit}
        />
        <LimitAlert
          actionForm={props.actionForm}
          value={props.alertCheck}
          setValue={props.setAlertCheck}
        />
      </Box>
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

function AccountLimit({ actionForm, value, setValue }) {
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
      label={"حد الامان"}
      fieldType="number"
      widthx={"95%"}
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
function LimitAlert({ actionForm, value, setValue }) {
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
