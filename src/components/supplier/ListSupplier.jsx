import React from "react";
import DisplaySupplier from "../supplier/DisplaySupplier";
import supplier from "../../helper/data/suplier.json";
import { Paper } from "@mui/material";

function ListSupplier() {
  return (
    <>
      <Paper
        elevation={13}
        sx={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          alignIitems: "center",
          borderRadius: "5px",
          padding: "15px",
          overflowY: "auto",
          height: "90%",
          // bgcolor: "#ccc",
          m: 2,
        }}
      >
        <div className="showContiner">
          {supplier.map((supplier) => {
            return (
              <React.Fragment key={supplier.id}>
                <DisplaySupplier
                  supplier={supplier.supplierName}
                  balance={supplier.openBalance}
                />
              </React.Fragment>
            );
          })}
        </div>
      </Paper>
    </>
  );
}

export default ListSupplier;
