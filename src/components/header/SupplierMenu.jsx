import React, { lazy, Suspense, useContext, useState } from "react";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { MainContext } from "../../helper/context";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SpatialAudioOffIcon from "@mui/icons-material/SpatialAudioOff";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Loader from "../../components/loader/Loader";
import { Button } from "@mui/material";

const AddSupplier = lazy(() => import("../supplier/AddSupplier"));

function SupplierMenu({ toggle }) {
  const { setReqlink } = useContext(MainContext);

  return (
    <>
      <div className="setting">
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AddSupplier");
          }}
          className="items"
        >
          <AddBusinessIcon color={"primary"} fontSize={"small"} />
          <p>اضافة مورد</p>
        </div>
        <Supsubmenu />
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AddSales");
          }}
          className="items"
        >
          <AccountBoxIcon color={"primary"} fontSize={"small"} />
          <p>اضافة مندوب</p>
        </div>

        <div
          onClick={() => {
            toggle(false);
            setReqlink("AddItem");
          }}
          className="items"
        >
          <ArchiveOutlinedIcon fontSize={"small"} />
          <p>اضافة صنف</p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("PaySupplier");
          }}
          className="items"
        >
          <BorderColorIcon fontSize={"small"} />
          <p>امر شراء </p>
        </div>

        <div
          onClick={() => {
            toggle(false);
            setReqlink("StatmentSupplier");
          }}
          className="items"
        >
          <ReceiptLongIcon fontSize={"small"} />
          <p>ملخص الفواتير </p>
        </div>

        <div
          onClick={() => {
            toggle(false);
            setReqlink("StatmentSupplier");
          }}
          className="items"
        >
          <SpatialAudioOffIcon fontSize={"small"} />
          <p>ارسال ملاحظة </p>
        </div>
        <div
          onClick={() => {
            toggle(false);
            setReqlink("AllStatmentSupplier");
          }}
          className="items"
        >
          <RemoveShoppingCartIcon fontSize={"small"} />
          <p>توالف</p>
        </div>
      </div>
    </>
  );
}

export default SupplierMenu;

const CallAddSupplier = ({ act }) => {
  return (
    <Suspense fallback={<Loader />}>
      <AddSupplier actionForm={act} />
    </Suspense>
  );
};

function Supsubmenu() {
  const [isShowupdate, setIsshowupdate] = useState(false);
  const { setReqlink } = useContext(MainContext);
  return (
    <>
      <div className="supplier_submenu">
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
          }}
        >
          <Button onClick={() => setReqlink("UpdSupplier")}>
            <EditIcon color={"warning"} fontSize={"small"} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button onClick={() => setReqlink("delSupplier")}>
            <DeleteIcon color={"error"} fontSize={"small"} />
          </Button>

          {/* <p>حذف</p> */}
        </Box>
      </div>
    </>
  );
}
