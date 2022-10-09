import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import InputWithLabel from "../../textfiled/InputWithLabel";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

import Inventory2Icon from "@mui/icons-material/Inventory2";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SaveIcon from "@mui/icons-material/Save";
import useToggle from "../../../helper/toggleHooke";
import DiloagShow from "../../dawer/DiloagShow";
import ListSupplier from "../ListSupplier";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from "@mui/icons-material/Edit";
import SelectDropDown from "../../dropdown/SelectDropDown";

import supplier from "../../../helper/data/suplier.json";
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

function AddItem({ actionForm = "A" }) {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const [sup_name, setSup_name] = useState("");
  const [openbalance, setOpenbalance] = useState("");
  const [packageType, setpackageType] = useState("");
  const [itemName, setitemName] = useState("");

  const SupplerData = {
    supplier: sup_name,
    packageType: packageType,
    itemName: itemName,
    openingBalance: openbalance,
  };

  return (
    <>
      <div className="addSup">
        <Paper elevation={6} sx={paperContainer}>
          <Box sx={boxContainer}>
            <FormType actionForm={actionForm} />
            <InputText
              itemName={itemName}
              setitemName={setitemName}
              sup_name={sup_name}
              setSup_name={setSup_name}
              actionForm={actionForm}
              openbalance={openbalance}
              setOpenbalance={setOpenbalance}
              packageType={packageType}
              setpackageType={setpackageType}
            />
            <BtnArea
              actionForm={actionForm}
              setSup_name={setSup_name}
              setOpenbalance={setOpenbalance}
              setpackageType={setpackageType}
              setitemName={setitemName}
              isBigScreen={isBigScreen}
              SupplerData={SupplerData}
            />
          </Box>
        </Paper>
      </div>
    </>
  );
}
export default AddItem;

const InputText = (props) => {
  return (
    <>
      <SelectDropDown
        placeholder1={"اسم المورد"}
        noOptionsMessage1={"لايوجد مورد بنفس الاسم"}
        value={props.sup_name}
        setValue={props.setSup_name}
        myData={supplier}
        iconX={
          <AddBusinessIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        }
      />
      <ItemName
        actionForm={props.actionForm}
        value={props.itemName}
        setValue={props.setitemName}
      />

      <PackageType
        actionForm={props.actionForm}
        value={props.packageType}
        setValue={props.setpackageType}
      />
      <OpeningBalance
        actionForm={props.actionForm}
        value={props.openbalance}
        setValue={props.setOpenbalance}
      />
    </>
  );
};

const BtnArea = ({
  actionForm,
  setSup_name,
  setOpenbalance,
  setpackageType,
  setitemName,
  setSaleEmail,
  isBigScreen,
  SupplerData,
}) => {
  const [open, toggle] = useToggle(false);
  const handleClear = () => {
    setSup_name("");
    setOpenbalance("");
    setpackageType("");
    setitemName("");
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
  let formLabel;
  let labelcolor;
  switch (actionForm) {
    case "A":
      formLabel = "صنف جديد";
      labelcolor = "primary.dark";
      break;
    case "U":
      formLabel = "تعديل صنف";
      labelcolor = "warning.dark";
      break;
    case "D":
      formLabel = "حذف صنف";
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

function ItemName({ actionForm, value, setValue }) {
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
      label={"اسم الصنف"}
      fieldType="text"
      widthx={"100%"}
      value={value}
      setValue={setValue}
      iconX={<ViewInArIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />}
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

function PackageType({ actionForm, value, setValue }) {
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
      label={"التعبية"}
      fieldType="text"
      disableToggle={statues}
      value={value}
      setValue={setValue}
      iconX={
        <Inventory2Icon
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
