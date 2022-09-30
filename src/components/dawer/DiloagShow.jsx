import {
  DialogActions,
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function DiloagShow({
  open,
  toggle,
  children,
  title,
  titleColor = "primary.dark",
}) {
  return (
    <>
      <Dialog open={open} onClose={toggle}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 0,
            px: 2,
            bgcolor: titleColor,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Noto Kufi Arabic, sans-serif",
              fontWeight: "400",
              color: "background.paper",
            }}
            px={2}
          >
            {title}
          </Typography>

          <Button
            onClick={() => toggle(false)}
            sx={{
              minWidth: 0,
              py: 0.3,
              m: 0,
              width: "30px",
              height: "25px",
              borderRadius: "8px",
            }}
            variant="contained"
            color="error"
          >
            X
          </Button>
        </DialogTitle>

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", padding: "15px" }}
        >
          <Box sx={{ my: 2, height: "50%" }}>{children}</Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DiloagShow;
