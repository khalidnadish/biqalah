import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React from "react";

function DrawerMui({ open, toggle, anchor, children, title }) {
  return (
    <Drawer anchor={anchor} open={open} onClose={toggle}>
      <DrawerHEADER toggle={toggle} title={title} />
      {children}
    </Drawer>
  );
}

export default DrawerMui;

const DrawerHEADER = ({ toggle, title }) => (
  <>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width="250px"
      textAlign="center"
      role="presentation"
    >

      <Typography mb={1} variant="h6" sx={{fontFamily:"Noto Kufi Arabic, sans-serif",fontWeight:'800'}}>
        {title}
      </Typography>
      <Button onClick={toggle} sx={{ minWidth: 0 }} variant="outlined">
        X
      </Button>
    </Box>
    <Divider />
  </>
);
