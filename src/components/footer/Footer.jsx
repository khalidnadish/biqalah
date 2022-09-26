import React from "react";
import "./footer.css";
import PersonIcon from "@mui/icons-material/Person";
import SummarizeIcon from '@mui/icons-material/Summarize';
import ReceiptIcon from '@mui/icons-material/Receipt';
function Footer() {
  return (
    <div className="footer_contaner">
      <SummarizeIcon color="primary" className="iconStyle" />
      <PersonIcon color="primary" className="iconStyle" />
      <PersonIcon color="primary" className="iconStyle" />
      <ReceiptIcon color="primary" className="iconStyle" />
      <ReceiptIcon color="primary" className="iconStyle" />
    </div>
  );
}

export default Footer;
