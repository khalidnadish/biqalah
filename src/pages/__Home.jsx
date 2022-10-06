import React, { lazy, Suspense, useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "./home.css";
// import supplier from "../helper/data/suplier.json";
import Loader from "../components/loader/Loader";
import Axios from "axios";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { useInView, InView } from "react-intersection-observer";
const SupplierCard = lazy(() => import("../components/supplier/SupplierCard"));

function Home() {
  const [page, setPage] = useState(1);
  const [supplierData, setsupplierData] = useState([]);

  // const {
  //   data,
  //   isSuccess,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   isLoading,
  // } = useInfiniteQuery(["repoData"], () =>
  //   Axios.get("http://localhost:3000/supplier/showall", {
  //     params: { page: `${page}`, perPage: 10 },
  //   }).then((res) => res.data)
  // );

  const { isLoading, isFetched, data, refetch } = useQuery(["repoData"], () =>
    Axios.get("http://localhost:3000/supplier/showall", {
      params: { page: `${page}`, perPage: 12 },
    }).then((res) => res.data)
  );

  console.log(isLoading);
  if (isLoading) return <Loader Bcolor="primary.dark" />;
  // if (isFetched) {
  //   setsupplierData(data);
  // }
  console.log(isLoading);

  const handleOnChangeOserve = (inView) => {
    if (inView) {
      setPage((prev) => prev + 1);

      // if (isFetched) {
      //   refetch();
      //   setsupplierData((prev) => {
      //     return [...prev, ...data?.data];
      //   });
      // }
    }
  };

  // useEffect(() => {
  //   // isLoading;
  //   // setsupplierData(data);
  //   console.log(supplierData, isLoading);
  // }, []);
  return (
    <>
      <div className="homeContainer">
        <Box
          sx={{
            flexDirection: { xs: "column", md: "row" },
            flexWrap: { xs: "none", md: "wrap" },
          }}
          p={2}
          className="suplierContainer"
        >
          <Suspense fallback={<Loader />}>
            {data.map((supplier) => {
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
          </Suspense>
          {/* <InView
            as="div"
            onChange={(inView, entry) => handleOnChangeOserve(inView)}
          >
            end of Div
          </InView> */}
        </Box>

        <div className="totalContainer">
          <Lamsum />
        </div>
      </div>
    </>
  );
}

export default Home;

const Lamsum = () => {
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
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
              fontSize="12px"
            >
              المطلوب
            </Typography>
            <Typography fontWeight={"bold"} variant={"Kufi"} fontSize="12px">
              505000
            </Typography>
          </Box>
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontSize="12px"
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
            >
              المسدد
            </Typography>
            <Typography fontWeight={"bold"} fontSize="12px" variant={"Kufi"}>
              100000
            </Typography>
          </Box>
          <Box sx={{ lineHeight: "14px" }}>
            <Typography
              fontSize="12px"
              fontWeight={"bold"}
              color={"primary.dark"}
              variant={"Kufi"}
            >
              الرصيد
            </Typography>
            <Typography fontWeight={"bold"} fontSize="12px" variant={"Kufi"}>
              100000
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
