import React, { useState, lazy, Suspense } from "react";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import useToggle from "../../helper/toggleHooke";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Loader from "../loader/Loader";
import "./header.css";
import { Button } from "@mui/material";
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
          // bgcolor={Theme.palette.common.white}
          sx={{ display: "flex", flexDirection: "row", gap: 1, width: "20%" }}
        >
          <Button
            variant="contained"
            sx={{ minWidth: 0, m: 0, p: 0 }}
            onClick={() => {
              toggle();
              setClickme("Supplier");

              setTitle("الموردين");
            }}
          >
            <MenuIcon className="iconStyle" />
          </Button>
          <Button
            sx={{ minWidth: 0, m: 0, p: 0 }}
            variant="contained"
            // onClick={() => {
            //   toggle();
            //   setClickme("Supplier");

            //   setTitle("الموردين");
            // }}
          >
            <NotificationsNoneIcon className="iconStyle" />
          </Button>
        </Box>

        <Box
          className="iconDiv"
          color={Theme.palette.primary.main}
          bgcolor={Theme.palette.common.white}
        >
          <Button
            variant="contained"
            sx={{ minWidth: 0, m: 0, p: 0 }}
            onClick={() => {
              toggle();
              setClickme("person");
              setTitle("الملف الشخصي");
            }}
          >
            <PersonIcon color="common" className="iconStyle" />
          </Button>
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
