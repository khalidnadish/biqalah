import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PublishIcon from "@mui/icons-material/Publish";
import PaidIcon from "@mui/icons-material/Paid";

function SupplierCard({ supplier = "khalid nadish", inMony = 0, outMony = 0,lastinvoice="01/01/2022" }) {
  const resultData = sumX(inMony, outMony);

  return (
    <>
      <Paper
        elevation={3}
        sx={{ width: "95%", bgcolor: "primary", borderRadius: 4 }}
      >
        <Grid container alignItems={"center"} justifyContent="space-between">
          <Grid item xs={8} align="right">
            <Typography
              variant="h6"
              mx={1}
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "600",
                width: "100%",
              }}
            >
              {supplier}
            </Typography>
            <Typography
              variant="caption"
              mx={1}
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "400",
                width: "100%",
              }}
            >
              {lastinvoice}
            </Typography>
          </Grid>

          <Grid item xs={4} align="left">
            <ShowResult
              inMony={inMony}
              outMony={outMony}
              resultData={resultData}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default SupplierCard;

const ShowResult = ({ inMony, outMony, resultData }) => (
  <>
    <Paper elevation={13}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        mx={1}
      >
        <FileDownloadIcon color="success" fontSize="2rem" />
        <Typography color="success.dark" variant="body1">
          {inMony}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        mx={1}
      >
        <PublishIcon color="error" fontSize="2rem" />
        <Typography color="error.dark" variant="body1" 
        
        >
          {outMony}
        </Typography>
      </Box>
      <Divider />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        mx={1}
      >
        <PaidIcon color={resultData.iconcolor} fontSize="2rem" />

        <Typography
          fontWeight={"bold"}
          color={resultData.textcolor}
          variant="body1"
        >
          {resultData.result}
        </Typography>
      </Box>
    </Paper>
  </>
);

const sumX = (x1, x2) => {
  let resultSum = { result: 0, iconcolor: "", textcolor: "" };
  let result = x1 - x2;
  resultSum.result = result;

  if (result > 0) {
    resultSum.iconcolor = "success";
    resultSum.textcolor = "success.dark";
  }
  if (result < 0) {
    resultSum.iconcolor = "error";
    resultSum.textcolor = "error.dark";
  }

  if (result === 0) {
    resultSum.iconcolor = "primary";
    resultSum.textcolor = "primary.main";
  }

  console.log(resultSum);

  return resultSum;
};
