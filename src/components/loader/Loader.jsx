import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import "./loader.css";
function Loader({ Bcolor = "#ccc", title = "تحميل" }) {
  return (
    <>
      <div className="loader">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            border: "3px solid",
            p: 0.5,
            borderColor: Bcolor,
            bgcolor: "white",
          }}
        >
          <Typography
            variant="body1"
            m={1}
            sx={{
              color: "Black",
              fontFamily: "Noto Kufi Arabic, sans-serif",
            }}
          >
            {title}
          </Typography>
          <CircularProgress
            sx={{ color: "darkblue" }}
            size={30}
            thickness={5}
          />
        </Box>
      </div>
    </>
  );
}

export default Loader;
