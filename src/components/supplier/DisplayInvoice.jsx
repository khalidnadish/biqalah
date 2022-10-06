import { Box, Typography } from "@mui/material";
import React from "react";
import invoiceData from "../../helper/data/invoiceSample.json";

function DisplayInvoice() {
  const lmsum = parseFloat(sum(invoiceData)).toFixed(2);

  return (
    <div className="invoiceContainer">
      <div className="invTotal">
        <Typography
          variant="Kufi"
          sx={{
            fontSize: { xs: ".7em" },
          }}
        >
          اجمالي الفواتير :{lmsum}
        </Typography>
      </div>
      <Box sx={{ maxWidth: { xs: "330px", md: "600px" } }}>
        <table className="tablecontainer">
          <thead>
            <tr>
              <th>الرقم</th>
              <th>التاريخ</th>
              <th>المبلغ</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((invoicRow) => {
              return (
                <React.Fragment key={invoicRow.id}>
                  <TableRow inv={invoicRow} />
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

export default DisplayInvoice;
const TableRow = ({ inv }) => {
  return (
    <>
      <tr className="active-row">
        <td>{inv.inv_no}</td>
        <td>{inv.inv_date}</td>
        <td>{inv.inv_Amt}</td>
      </tr>
    </>
  );
};

function sum(obj) {
  var sum = 0;

  obj.map(({ inv_Amt }) => {
    sum += parseFloat(inv_Amt);
  });

  return sum;
}
