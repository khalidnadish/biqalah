import React, { lazy, Suspense, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Loader from "../components/loader/Loader";
import Axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InView } from "react-intersection-observer";
import { useSupplierRecordCount } from "../services/supplierSerrvice";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BalanceIcon from "@mui/icons-material/Balance";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import "./home.css";
import ListSupplier from "../components/supplier/ListSupplier";

const SupplierCard = lazy(() => import("../components/supplier/SupplierCard"));

const getAllData = ({ pageParam = 1 }) => {
  return Axios.get("http://localhost:3000/supplier/showall", {
    params: { page: pageParam, perPage: 6 },
  });
};

function Home() {
  const [SupRecord] = useSupplierRecordCount();
  const pageCount = Math.ceil(SupRecord / 6);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["posts"], getAllData, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < pageCount) return pages.length + 1;
    },
  });

  if (isLoading) return <Loader Bcolor="error.dark" />;
  if (isError) return <p>Error:{error}</p>;

  const handleOnChangeOserve = (inView) => {
    if (inView) {
      fetchNextPage();
    }
  };
  return (
    <>
      <ListSupplier />
      <div className="homeContainer">
        {/* <Loader /> */}
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "none", md: "wrap" },
          }}
          p={2}
          className="suplierContainer"
        >
          <Suspense fallback={<Loader />}>
            {data.pages.map((pageno, index) => {
              return (
                <React.Fragment key={index}>
                  {pageno.data.map((supplier) => {
                    return (
                      <React.Fragment key={supplier.id}>
                        <SupplierCard
                          supplier={supplier.sup_name}
                          inMony={supplier.dbt}
                          outMony={supplier.crd}
                          salesphone={supplier.salse_mobile}
                          lastinvoice={"10/01/2022"}
                        />
                      </React.Fragment>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </Suspense>

          <InView
            as="div"
            onChange={(inView, entry) => handleOnChangeOserve(inView)}
          >
            {isFetchingNextPage ? (
              <div className="loading">
                <Loader />
              </div>
            ) : null}
          </InView>
        </Box>
        <div className="totalContainer">
          <Lamsum SupRecord={SupRecord} />
          <div>{isFetching && !isFetchingNextPage ? <Loader /> : null}</div>
          {isFetching && <Loader />}
        </div>
      </div>
    </>
  );
}

export default Home;

const Lamsum = ({ SupRecord }) => {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const boxStyle = {
    lineHeight: "14px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  };
  const typoStyle = {
    fontWeight: "bold",
    color: "primary.dark",
    fontSize: "12px",
    mx: 1,
  };

  const handleFilter = (filter) => {
    alert(filter);
  };

  return (
    <>
      <Paper sx={{ width: "100%", p: 1 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={boxStyle} onClick={() => handleFilter("filtter by cridet")}>
            <Typography sx={typoStyle} variant={"Kufi"}>
              {!isBigScreen ? (
                <CurrencyExchangeIcon fontSize={"small"} />
              ) : (
                "المطلوب"
              )}
            </Typography>
            <Typography sx={typoStyle} variant={"Kufi"}>
              505000
            </Typography>
          </Box>
          <Box sx={boxStyle} onClick={() => handleFilter("filtter by debit")}>
            <Typography sx={typoStyle} variant={"Kufi"}>
              {!isBigScreen ? <PointOfSaleIcon fontSize={"small"} /> : "المسدد"}
            </Typography>
            <Typography sx={typoStyle} variant={"Kufi"}>
              100000
            </Typography>
          </Box>

          <Box sx={boxStyle} onClick={() => handleFilter("filtter by Balance")}>
            <Typography sx={typoStyle} variant={"Kufi"}>
              {!isBigScreen ? <BalanceIcon fontSize={"small"} /> : "الرصيد"}
            </Typography>
            <Typography sx={typoStyle} variant={"Kufi"}>
              100000
            </Typography>
          </Box>
          <Box
            sx={boxStyle}
            onClick={() => handleFilter("filtter by Supplier")}
          >
            <Typography sx={typoStyle} variant={"Kufi"}>
              {!isBigScreen ? (
                <StorefrontIcon fontSize={"small"} />
              ) : (
                "عدد الموردين"
              )}
            </Typography>
            <Typography sx={typoStyle} variant={"Kufi"}>
              {SupRecord}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
