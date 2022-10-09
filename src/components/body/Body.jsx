import React, { useContext, lazy, Suspense } from "react";

import "./bodyx.css";
import { MainContext } from "../../helper/context";
import Loader from "../loader/Loader";

const Home = lazy(() => import("../../pages/Home"));
const AddItem = lazy(() => import("../supplier/additem/AddItem"));
const AddSupplier = lazy(() => import("../supplier/addsupplier/AddSupplier"));
const AllSupplerBalance = lazy(() => import("../supplier/AllSupplerBalance"));
const PayInvoice = lazy(() => import("../supplier/PayInvoice"));
const StatmentSupplier = lazy(() => import("../supplier/StatmentSupplier"));
const ListSupplier = lazy(() =>
  import("../supplier/listsupplier/ListSupplier")
);

function Body() {
  const { reqlink } = useContext(MainContext);

  return (
    <div className="body_contaner">
      {console.log(reqlink)}
      <Suspense fallback={<Loader />}>
        {reqlink === "AddSupplier" && <Newsupplier />}
        {reqlink === "UpdSupplier" && <Updsupplier />}
        {reqlink === "delSupplier" && <Delsupplier />}
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
const Updsupplier = () => (
  <>
    <div className="supplerSection">
      <div className="mobileview">
        <AddSupplier actionForm={"U"} />
      </div>
    </div>
  </>
);

const Delsupplier = () => (
  <>
    <div className="supplerSection">
      <div className="mobileview">
        <AddSupplier actionForm={"D"} />
      </div>
    </div>
  </>
);
