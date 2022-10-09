import React, { lazy, Suspense, useState, useEffect } from "react";
// import DisplaySupplier from "../supplier/DisplaySupplier";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import { InView } from "react-intersection-observer";
import Loader from "../../loader/Loader";
import InputWithLabel from "../../textfiled/InputWithLabel";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { getFillterData } from "./listSupplierHook";
const DisplaySupplier = lazy(() => import("../DisplaySupplier"));

function ListSupplier() {
  const [mysearch, setMysearch] = useState("");
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = getFillterData(mysearch);

  if (isLoading) return <Loader Bcolor="error.dark" />;
  if (isError) return <p>Error:{error}</p>;

  const handleOnChangeOserve = (inView) => {
    if (inView) {
      fetchNextPage();
    }
  };

  return (
    <>
      <Paper
        elevation={13}
        sx={{
          display: "flex",
          gap: "15px",
          flexDirection: "column",
          alignIitems: "center",
          borderRadius: "5px",
          padding: "15px",
          overflowY: "auto",
          height: "90%",
          width: "100%",
          // bgcolor: "#ccc",
          m: 2,
        }}
      >
        <div className="showContiner">
          <div className="searchbox">
            <SearchSupplier
              mysearch={mysearch}
              setMysearch={setMysearch}
              reload={refetch}
            />
            <Button variant="contained" onClick={refetch}>
              <CheckIcon />
            </Button>
          </div>
          <Suspense fallback={<Loader />}>
            {data.pages.map((pageno, index) => {
              return (
                <React.Fragment key={index}>
                  {pageno.data.map((supplier) => {
                    return (
                      <React.Fragment key={supplier.id}>
                        <DisplaySupplier
                          supplier={supplier.sup_name}
                          balance={parseFloat(
                            supplier.dbt - supplier.crd
                          ).toFixed(2)}
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
        </div>
      </Paper>
    </>
  );
}
export default ListSupplier;

const SearchSupplier = ({ mysearch, setMysearch, reload }) => {
  return (
    <>
      <InputWithLabel
        label={"بحث"}
        fieldType="text"
        widthx={"100%"}
        value={mysearch}
        setValue={setMysearch}
        reload={reload}
        iconX={<SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />}
        // disableToggle={statues}
      />
    </>
  );
};
