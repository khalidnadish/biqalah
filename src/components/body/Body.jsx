import React, { useContext, lazy, Suspense } from "react";

import "./bodyx.css";
import { MainContext } from "../../helper/context";
import Loader from "../loader/Loader";

const Home = lazy(() => import("../../pages/Home"));
const AddItem = lazy(() => import("../supplier/AddItem"));
const AddSupplier = lazy(() => import("../supplier/AddSupplier"));
const AllSupplerBalance = lazy(() => import("../supplier/AllSupplerBalance"));
const PayInvoice = lazy(() => import("../supplier/PayInvoice"));
const StatmentSupplier = lazy(() => import("../supplier/StatmentSupplier"));
const ListSupplier = lazy(() => import("../supplier/ListSupplier"));

function Body() {
  const { reqlink } = useContext(MainContext);

  return (
    <div className="body_contaner">
      <Suspense fallback={<Loader />}>
        {reqlink === "AddSupplier" && <Newsupplier />}
        {reqlink === "AddItem" && <AddItem />}
        {reqlink === "PaySupplier" && <PayInvoice />}
        {reqlink === "StatmentSupplier" && <StatmentSupplier />}
        {reqlink === "AllStatmentSupplier" && <AllSupplerBalance />}
        {reqlink === "Home" && <Home />}
      </Suspense>
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
