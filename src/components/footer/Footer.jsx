import React,{useContext} from "react";
import "./footer.css";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { MainContext } from "../../helper/context";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PrintIcon from '@mui/icons-material/Print';
import PaymentsIcon from '@mui/icons-material/Payments';
import QueryStatsIcon from '@mui/icons-material/QueryStats';


function Footer() {
  const { setReqlink } = useContext(MainContext);
  return (
    <div className="footer_contaner">
      <AddShoppingCartIcon color="primary" className="iconStyle" />
      <PaymentsIcon color="primary" className="iconStyle" />
      <Button variant="outlined" onClick={()=>setReqlink("Home")}>
        <HomeIcon color="success" className="iconStyle" />
      </Button>
      <PrintIcon color="primary" className="iconStyle" />
      {/* <QueryStatsIcon color="primary" className="iconStyle" /> */}
      <PendingActionsIcon color="primary" className="iconStyle" />
    </div>
  );
}

export default Footer;
