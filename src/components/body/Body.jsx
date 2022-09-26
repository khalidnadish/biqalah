import React ,{useContext}from 'react'
import AddItem from "../supplier/AddItem"
import AddSupplier from "../supplier/AddSupplier"
import AllSupplerBalance from "../supplier/AllSupplerBalance"
import PayInvoice from "../supplier/PayInvoice"
import StatmentSupplier from "../supplier/StatmentSupplier"
import Home from '../../pages/Home'
import './bodyx.css'
import { MainContext } from "../../helper/context";
function Body() {
  const { reqlink } = useContext(MainContext);
  return (
    <div className="body_contaner">
      {reqlink==="AddSupplier" &&  <AddSupplier/>}
      {reqlink==="AddItem" &&  <AddItem/>}
      {reqlink==="PaySupplier" &&  <PayInvoice/>}
      {reqlink==="StatmentSupplier" &&  <StatmentSupplier/>}
      {reqlink==="AllStatmentSupplier" &&  <AllSupplerBalance/>}
      
      {reqlink==="Home" &&  <Home/>}
       
    </div>
  );
  }
export default Body