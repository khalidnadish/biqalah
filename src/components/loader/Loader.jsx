import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "50%",
          // height: "50%",
          borderRadius: "5px",
          border: "3px solid gray",
          p: 2,
          borderColor: "warning.dark",
        }}
      >
        <Typography
          variant="body1"
          m={2}
          sx={{
            color: "warning.dark",
          }}
        >
          انتظر من فضلك ...
        </Typography>
        <CircularProgress color="inherit" size={20} />
      </Box>
    </>
  );
}

export default Loader;
