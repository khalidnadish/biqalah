import React from "react";
import Box from "@mui/material/Box";

function MyBox({ dirctionType, children, justfiyType, alignType = "center" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: dirctionType,
        alignItems: alignType,
        justifyContent: justfiyType,
        gap: "3px",
      }}
      pt={0.5}
    >
      {children}
    </Box>
  );
}

export default MyBox;
