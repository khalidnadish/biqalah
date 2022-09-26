import React from "react";
import SupplierCard from "../components/supplier/SupplierCard";
import "./home.css"
function Home() {
  return (
    <>
      <div className="homeContainer">
        <SupplierCard supplier={"khalid nadish"} inMony={5656} outMony={5000}   lastinvoice={"10/01/2022"} />
        <SupplierCard supplier={"شركة المراعي"} inMony={8050} outMony={8050}  lastinvoice={"12/01/2022"}/>
        <SupplierCard supplier={"مصنع السنبلة"} inMony={5656} outMony={6000}  lastinvoice={"01/01/2022"}/>
        <SupplierCard supplier={"نادك"} inMony={343430} outMony={650}  lastinvoice={"15/01/2022"}/>
        <SupplierCard supplier={"ابو علي مندوب"} inMony={4330} outMony={450}  lastinvoice={"01/01/2022"}/>
        <SupplierCard supplier={"الصافي"} inMony={340} outMony={5440}  lastinvoice={"01/01/2022"}/>
      </div>
    </>
  );
}

export default Home;
