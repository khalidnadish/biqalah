import React, { useState, lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PublishIcon from "@mui/icons-material/Publish";
import PaidIcon from "@mui/icons-material/Paid";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import supplierData from "../../helper/data/suppliedrData.json";
import DiloagShow from "../dawer/DiloagShow";
import useToggle from "../../helper/toggleHooke";
// import DispOneSupplier from "./DispOneSupplier";
// import DisplayInvoice from "./DisplayInvoice";
import Loader from "../loader/Loader";

const DispOneSupplier = lazy(() =>
  import("../supplier/displayOneSupplier/DispOneSupplier")
);
const DisplayInvoice = lazy(() => import("./DisplayInvoice"));

function SupplierCard({
  supplier = "khalid nadish",
  inMony = 0,
  outMony = 0,
  lastinvoice = "01/01/2022",
  salesphone = "###-######",
}) {
  const resultData = sumX(inMony, outMony);

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          minWidth: { xs: "280px", md: "Auto" },
          width: { xs: "100%", md: "Auto" },
          // bgcolor: "primary.light",
          borderRadius: 4,
          p: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <SupplierData
            supplier={supplier}
            lastinvoice={lastinvoice}
            salesphone={salesphone}
          />
          <ShowResult
            inMony={inMony}
            outMony={outMony}
            resultData={resultData}
          />
          <CardActionX supplierName={supplier} />
        </Box>
      </Paper>
    </>
  );
}

export default SupplierCard;

function SupplierData({ supplier, lastinvoice, salesphone }) {
  return (
    <>
      <Box
        sx={{
          fontFamily: "Noto Kufi Arabic, sans-serif",
          fontWeight: "600",
          width: "100%",
          // mx: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Noto Kufi Arabic, sans-serif",
            fontWeight: "600",
            width: "100%",
            mx: 1,
          }}
        >
          {supplier}
        </Typography>
        <Box
          sx={{
            width: "100%",
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <CalendarMonthIcon fontSize="small" color="primary" />
            <Typography
              variant="caption"
              mx={1}
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "400",
              }}
            >
              {lastinvoice}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LocalPhoneIcon fontSize="small" color="primary" />
            <Typography
              variant="caption"
              mx={1}
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "400",
                // fontSize: "10px",
              }}
            >
              {salesphone}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const ShowResult = ({ inMony, outMony, resultData }) => (
  <>
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          px={1}
        >
          <FileDownloadIcon
            sx={{
              color: "success.dark",
              fontSize: "1em",
              p: 0.4,
            }}
          />
          <Typography
            sx={{ color: "success.dark", fontSize: { xs: ".7em", md: "1em" } }}
            variant="body2"
          >
            {inMony}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          px={1}
        >
          <PublishIcon sx={{ color: "error", fontSize: "1em", p: 0.4 }} />
          <Typography
            sx={{ color: "error.dark", fontSize: { xs: ".7em", md: "1em" } }}
            variant="body2"
          >
            {outMony}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          px={1}
        >
          <PaidIcon color={resultData.iconcolor} fontSize="1em" />

          <Typography
            variant="body2"
            sx={{
              color: resultData.textcolor,
              fontSize: { xs: ".7em", md: "1em" },
              fontWeight: "bold",
              px: 0.4,
            }}
          >
            {resultData.result}
          </Typography>
        </Box>
      </Box>
    </Paper>
  </>
);

const sumX = (x1, x2) => {
  let resultSum = { result: 0, iconcolor: "", textcolor: "" };
  let result = x1 - x2;
  resultSum.result = result.toFixed(2);

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

  resultSum;

  return resultSum;
};

const CardActionX = ({ supplierName }) => {
  const [open, toggle] = useToggle(false);
  const [openInvoice, setToggleInvoice] = useToggle(false);
  // console.log(openInvoice);
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        width={"100%"}
        gap="1rem"
      >
        <Button
          variant="contained"
          sx={{ minWidth: 0, width: "fit-content" }}
          color="warning"
          onClick={() => toggle(true)}
        >
          <RecentActorsIcon color="background.paper" />
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ minWidth: 0, width: "fit-content" }}
          onClick={() => {
            setToggleInvoice(true);
            // console.log("openInvoice", openInvoice);
          }}
        >
          <ReceiptLongIcon color="background.paper" variant="contained" />
        </Button>
      </Box>
      <Suspense fallback={<Loader />}>
        {open && (
          <DiloagShow open={open} toggle={toggle} title={supplierName}>
            <DispOneSupplier supData={supplierData[0]} />
          </DiloagShow>
        )}
      </Suspense>
      <Suspense fallback={<Loader />}>
        {openInvoice && (
          <DiloagShow
            open={openInvoice}
            toggle={setToggleInvoice}
            title={"ملخص الفواتير"}
          >
            <DisplayInvoice />
          </DiloagShow>
        )}
      </Suspense>
    </>
  );
};
