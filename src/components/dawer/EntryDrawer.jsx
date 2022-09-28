import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React from "react";

function EntryDrawer({ open, toggle, anchor, children, title }) {
  return (
    <Drawer  anchor={anchor} open={open} onClose={() => toggle(false)}>
      <Box
      sx={{ 
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        p:.5,
        width:"100%",
        height:"95vh",
        textAlign:"center",
        role:"presentation",
        overflow:"hidden"
      }}
      >
        <DrawerHEADER toggle={toggle} title={title} />
        {children}
      </Box>
    </Drawer>
  );
}

export default EntryDrawer;

const DrawerHEADER = ({ toggle, title }) => (
  <>
    <Box
    sx={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      p:2,
      width:"80%",
      textAlign:"center",
      borderBottom:"2px solid ",
      borderColor:"error.main",
      height:"40px"
    }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "Noto Kufi Arabic, sans-serif", fontWeight: "800" }}
      >
        {title}
      </Typography>
      <Button
        onClick={() => toggle(false)}
        sx={{ minWidth: 0, py: 0.3, m: 0,borderRadius: "50px" }}
        variant="contained"
        color="error"
      >
        X
      </Button>
    </Box>
    
  </>
);
