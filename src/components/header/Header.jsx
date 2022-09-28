import React, { useState } from "react";
import "./header.css";


import PersonIcon from "@mui/icons-material/Person";
import DrawerMui from "../dawer/DrawerMui";
import EntryDrawer from "../dawer/EntryDrawer";
import useToggle from "../../helper/toggleHooke";
import SupplierMenu from "./SupplierMenu";
import Person from "./Person";
import { Paper, useTheme } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Box } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AddSupplier from "../supplier/AddSupplier";
import ListSupplier from  "../supplier/ListSupplier";
import { Wifi2Bar } from "@mui/icons-material";
function Header() {
  const [open, toggle] = useToggle(false);
  const [open1, setOpen1] = useState(false);

  const [clickme, setClickme] = useState("");
  const [anchor, setAnchor] = useState("");
  const [title, setTitle] = useState("");
  const Theme = useTheme();

  return (
    <>
      <Paper
        elevation={24}
        sx={{ bgcolor: Theme.palette.success.main }}
        className="header_contaner"
      >
        <Box
          className="iconDiv"
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
          <ShoppingCartOutlinedIcon className="iconStyle" />
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

        <Box
          className="iconDiv"
          onClick={() => {
            setOpen1(true);
          }}
        >
          <QueryStatsIcon color="common" className="iconStyle" />
        </Box>
      </Paper>

      {open && (
        <DrawerMui open={open} toggle={toggle} anchor={anchor} title={title}>
          {clickme === "person" && <Person />}
          {clickme === "Supplier" && <SupplierMenu toggle={toggle} />}
        </DrawerMui>
      )}

      {open1 && (
        <EntryDrawer
          open={open1}
          toggle={setOpen1}
          anchor={"bottom"}
          title={"مورد جديد"}
        >
          <div className="showandAdd">
            <AddSupplier />
            {/* <ListSupplier /> */}
          </div>
        </EntryDrawer>
      )}
    </>
  );
}

 
export default Header;
