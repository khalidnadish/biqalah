import React from 'react'
import DisplaySupplier from "../supplier/DisplaySupplier";
import supplier from "../../helper/data/suplier.json";

function ListSupplier() {
  return (
    <>
    <div className="showContiner">
     {supplier.map((supplier) => {
       return (
         <React.Fragment key={supplier.id}>
           <DisplaySupplier supplier={supplier.supplierName} balance={supplier.openBalance} />
         </React.Fragment>
       );
     })}
     </div>
   </>
  )
}

export default ListSupplier

 