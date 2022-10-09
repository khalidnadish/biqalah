import { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Loader from "../../loader/Loader";
const BalanceInformatin = lazy(() => import("./BalanceInformatin"));
const GenralInformation = lazy(() => import("./GenralInformation"));
const OtherInformatin = lazy(() => import("./OtherInformatin"));
const PaymebtInformatin = lazy(() => import("./PaymebtInformatin"));
const PurchaiseInformatin = lazy(() => import("./PurchaiseInformatin"));

function DispOneSupplier({ supData }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 1,
          borderRadius: "8px",
        }}
      >
        <Suspense fallback={<Loader />}>
          <GenralInformation supData={supData} />
          <BalanceInformatin supData={supData} />
          <PaymebtInformatin supData={supData} />
          <PurchaiseInformatin supData={supData} />
          <OtherInformatin supData={supData} />
        </Suspense>
      </Box>
    </>
  );
}
export default DispOneSupplier;
