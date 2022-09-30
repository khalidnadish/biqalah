import React, { useContext } from "react";
import AddItem from "../supplier/AddItem";
import AddSupplier from "../supplier/AddSupplier";
import AllSupplerBalance from "../supplier/AllSupplerBalance";
import PayInvoice from "../supplier/PayInvoice";
import StatmentSupplier from "../supplier/StatmentSupplier";
import Home from "../../pages/Home";
import "./bodyx.css";
import { MainContext } from "../../helper/context";
import ListSupplier from "../supplier/ListSupplier";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
function Body() {
  const { reqlink } = useContext(MainContext);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className="body_contaner">
      {reqlink === "AddSupplier" && <Newsupplier />}
      {reqlink === "AddItem" && <AddItem />}
      {reqlink === "PaySupplier" && <PayInvoice />}
      {reqlink === "StatmentSupplier" && <StatmentSupplier />}
      {reqlink === "AllStatmentSupplier" && <AllSupplerBalance />}

      {reqlink === "Home" && <Home />}
    </div>
  );
}
export default Body;
const Newsupplier = () => (
  <>
    <div className="supplerSection">
      <div className="mobileview">
        <AddSupplier />
      </div>
      <ListSupplier />
    </div>
  </>
);
