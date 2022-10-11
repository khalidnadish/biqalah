import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  VisibilityIcon,
  CleaningServicesIcon,
  SaveIcon,
  EditIcon,
} from "./icons";
import useToggle from "../../../helper/toggleHooke";
import DiloagShow from "../../dawer/DiloagShow";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../loader/Loader";
import ListSupplier from "../listsupplier/ListSupplier";

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
  sup_name,
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
    console.log("sup_name :", sup_name);
    if (
      SupplerData.supplierName === undefined ||
      SupplerData.supplierName === null ||
      SupplerData.supplierName === ""
    ) {
      toast.error("لايوجد اسم  ", { theme: "colored" });
      return;
    } else {
      // alert("saved.supplierName", SupplerData.supplierName);
      Axios.post("http://localhost:3000/supplier/insert", {
        SupplerData,
      }).then(() => {
        toast.success("تم الحفظ   ", { theme: "colored" });
      });
    }
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
          color="primary"
          sx={{ fontFamily: "Noto Kufi Arabic, sans-serif", width: "70%" }}
          variant="contained"
          onClick={() => handleSave()}
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
        <Suspense fallback={<Loader />}>
          <DiloagShow open={open} toggle={toggle} title={"الموردين"}>
            <ListSupplier />
          </DiloagShow>
        </Suspense>
      )}
    </>
  );
};
export default SupplierButton;
