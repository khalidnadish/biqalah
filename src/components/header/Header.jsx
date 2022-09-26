import React, { useState } from "react";
import "./header.css";

import PersonIcon from "@mui/icons-material/Person";
import DrawerMui from "../dawer/DrawerMui";
import useToggle from "../../helper/toggleHooke";
import SupplierMenu from "./SupplierMenu";
import Person from "./Person";
import { Paper, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box } from "@mui/material";
import {  styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  bgcolor: theme.palette.warning.light,
  height: 40,
  lineHeight: '60px',
}));

function Header() {
  const [open, toggle] = useToggle(false);
  const [clickme, setClickme] = useState("");
  const [anchor, setAnchor] = useState("");
  const [title, setTitle] = useState("");
  const Theme=useTheme()

  return (
    <>
      {/* <Box bgcolor='secondary.light' className="header_contaner"> */}
        <Paper  elevation={24} sx={{bgcolor:Theme.palette.success.main}} className="header_contaner">
        <Box
          className="iconDiv"
          // bgcolor='primary.main'
          color={Theme.palette.primary.main}
          bgcolor={Theme.palette.common.white}
          
          onClick={() => {
            toggle();
            setClickme("Supplier");
            console.log(clickme);
            setAnchor("right");
            setTitle("الموردين");
            
          }}
        >
          <ShoppingCartOutlinedIcon   className="iconStyle" />
        </Box>

        <Box
          className="iconDiv"
          color={Theme.palette.primary.main}
          bgcolor={Theme.palette.common.white}
          onClick={() => {
            toggle();
            setClickme("person");
            console.log(clickme);
            setAnchor("left");
            setTitle("الملف الشخصي");
          }}
        >
          <PersonIcon color="common" className="iconStyle" />
        </Box>
        </Paper>
      {/* </Box> */}

      {open && (
        <DrawerMui open={open} toggle={toggle} anchor={anchor} title={title}>
          {clickme === "person" && <Person />}
          {clickme === "Supplier" && <SupplierMenu toggle={toggle}/>}
        </DrawerMui>
      )}
    </>
  );
}

export default Header;
