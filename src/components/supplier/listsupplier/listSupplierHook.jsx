import Axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  useSupplierRecordCount,
  usefillterSupplierRecordCount,
} from "../service/supplierService";

export const getFillterData = (mysearch) => {
  const [SupRecord] = useSupplierRecordCount();
  const pageCount = Math.ceil(SupRecord / 6);

  const getAllDatax = ({ pageParam = 1 }) => {
    return Axios.get("http://localhost:3000/supplier/showASupplierONsearch", {
      params: { page: pageParam, perPage: 6, searchValue: mysearch },
    });
  };

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
  } = useInfiniteQuery(["lisrsupplier"], getAllDatax, {
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < pageCount) return pages.length + 1;
    },
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};
