import React, { useState, lazy, Suspense } from "react";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";

import useToggle from "../../helper/toggleHooke";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Loader from "../loader/Loader";
import "./header.css";
const DrawerMui = lazy(() => import("../dawer/DrawerMui"));
const SupplierMenu = lazy(() => import("./SupplierMenu"));
const Person = lazy(() => import("./Person"));

function Header() {
  const [open, toggle] = useToggle(false);

  const [clickme, setClickme] = useState("");

  const [title, setTitle] = useState("");
  const Theme = useTheme();
  let anchor = "";

  console.count("HeaderRender");

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
            setTitle("الملف الشخصي");
          }}
        >
          <PersonIcon color="common" className="iconStyle" />
        </Box>
      </Paper>
      <Suspense fallback={<Loader />}>
        {open && (
          <DrawerMui
            open={open}
            toggle={toggle}
            anchor={clickme === "Supplier" ? "right" : "left"}
            title={title}
          >
            {clickme === "person" && (
              <Suspense fallback={<Loader />}>
                <Person />
              </Suspense>
            )}
            {clickme === "Supplier" && (
              <Suspense fallback={<Loader />}>
                <SupplierMenu toggle={toggle} />
              </Suspense>
            )}
          </DrawerMui>
        )}
      </Suspense>
    </>
  );
}

export default Header;
