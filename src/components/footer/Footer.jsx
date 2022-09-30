import React, { useContext } from "react";
import "./footer.css";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MainContext } from "../../helper/context";
import PrintIcon from "@mui/icons-material/Print";
import PaymentsIcon from "@mui/icons-material/Payments";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

function Footer() {
  const { setReqlink } = useContext(MainContext);
  return (
    <div className="footer_contaner">
      <AddShoppingCartIcon color="primary" className="iconStyle" />
      <PaymentsIcon color="primary" className="iconStyle" />
      <Button variant="outlined" onClick={() => setReqlink("Home")}>
        <HomeIcon color="success" className="iconStyle" />
      </Button>
      <PrintIcon color="primary" className="iconStyle" />
      {/* <QueryStatsIcon color="primary" className="iconStyle" /> */}
      <FormatListNumberedIcon color="primary" className="iconStyle" />
    </div>
  );
}

export default Footer;
