import React from "react";
import SupplierCard from "../components/supplier/SupplierCard";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./home.css";
import supplier from "../helper/data/suplier.json";
function Home() {
  return (
    <>
      <div className="homeContainer">
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "none", md: "wrap" },
          }}
          p={2}
          className="suplierContainer"
        >
          {supplier.map((supplier) => {
            return (
              <React.Fragment key={supplier.id}>
                <SupplierCard
                  supplier={supplier.supplierName}
                  inMony={supplier.openBalance}
                  outMony={5000}
                  salesphone={supplier.salePhone}
                  lastinvoice={"10/01/2022"}
                />
              </React.Fragment>
            );
          })}
        </Box>

        <div className="totalContainer">
          <Lamsum />
        </div>
      </div>
    </>
  );
}

export default Home;

const Lamsum = () => {
  return (
    <>
      <Paper sx={{ width: "100%", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
              fontSize="12px"
            >
              المطلوب{" "}
            </Typography>
            <Typography fontWeight={"bold"} variant={"Kufi"} fontSize="12px">
              505000
            </Typography>
          </Box>
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontSize="12px"
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
            >
              المسدد{" "}
            </Typography>
            <Typography fontWeight={"bold"} fontSize="12px" variant={"Kufi"}>
              100000
            </Typography>
          </Box>
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontSize="12px"
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
            >
              الرصيد{" "}
            </Typography>
            <Typography fontWeight={"bold"} fontSize="12px" variant={"Kufi"}>
              100000
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
