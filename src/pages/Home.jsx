import React from "react";
import SupplierCard from "../components/supplier/SupplierCard";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import "./home.css";
function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="suplierContainer">
          <SupplierCard
            supplier={"khalid nadish"}
            inMony={5656}
            outMony={5000}
            lastinvoice={"10/01/2022"}
          />
          <SupplierCard
            supplier={"شركة المراعي"}
            inMony={8050}
            outMony={8050}
            lastinvoice={"12/01/2022"}
          />
          <SupplierCard
            supplier={"مصنع السنبلة"}
            inMony={5656}
            outMony={6000}
            lastinvoice={"01/01/2022"}
          />
          <SupplierCard
            supplier={"نادك"}
            inMony={343430}
            outMony={650}
            lastinvoice={"15/01/2022"}
          />
          <SupplierCard
            supplier={"ابو علي مندوب"}
            inMony={4330}
            outMony={450}
            lastinvoice={"01/01/2022"}
          />
          <SupplierCard
            supplier={"الصافي"}
            inMony={340}
            outMony={5440}
            lastinvoice={"01/01/2022"}
          />
        </div>
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
      <Paper sx={{ width: "100%",p:1 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* <Typography variant="Naskh">اجمالي الموردين</Typography> */}

          <Box>
            <Typography fontWeight={"bold"} color={"primary.dark"} variant={"Kufi"}>المطلوب :</Typography>
            <Typography  variant={"Kufi"}>505000</Typography>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} color={"primary.dark"}  variant={"Kufi"}>المسدد :</Typography>
            <Typography variant={"Kufi"}>100000</Typography>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} color={"primary.dark"}  variant={"Kufi"}>الصافي :</Typography>
            <Typography variant={"Kufi"}>100000</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
