import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import "./sup.css";
function AddSupplier({ supplier, balance }) {
  return (
    <Paper elevation={6} sx={{ width: "100%", alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          width: "100%",

          overflow: "auto",
          p: 2,
        }}
      >
        <SupData supplier={supplier} balance={balance} />
        <ActionSup />
      </Box>
    </Paper>
  );
}
export default AddSupplier;

const SupData = ({ supplier, balance }) => (
  <>
    <Grid container alignItems={"center"}>
      <Grid item xs={8} align="right">
        <Typography>{supplier}</Typography>
      </Grid>
      <Grid item xs={4} align="center">
        <Box>
          <Typography sx={{ borderBottom: "1px solid #ccc", width: "100%" }}>
            {balance}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} align="left"></Grid>
    </Grid>
  </>
);

const ActionSup = () => (
  <>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-between", md: "flex-end" },
        gap: "10px",
        width: "100%",
        mt: 1,
      }}
    >
      <Button variant="contained" sx={{ minWidth: 0, p: 0.5, m: 0 }}>
        <VisibilityIcon />
      </Button>
      <Button
        color="warning"
        variant="contained"
        sx={{ minWidth: 0, p: 0.5, m: 0 }}
      >
        <ModeEditOutlineIcon />
      </Button>
      <Button
        color="error"
        variant="contained"
        sx={{ minWidth: 0, p: 0.5, m: 0 }}
      >
        <DeleteIcon />
      </Button>
    </Box>
  </>
);
