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
      </Suspense>
      <Suspense fallback={<Loader />}>
        {reqlink === "AddItem" && <AddItem />}
      </Suspense>
      <Suspense fallback={<Loader />}>
        {reqlink === "PaySupplier" && <PayInvoice />}
      </Suspense>
      <Suspense fallback={<Loader />}>
        {reqlink === "StatmentSupplier" && <StatmentSupplier />}
      </Suspense>
      <Suspense fallback={<Loader />}>
        {reqlink === "AllStatmentSupplier" && <AllSupplerBalance />}
      </Suspense>
      <Suspense fallback={<Loader />}>
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
