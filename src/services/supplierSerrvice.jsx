import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useSupplierRecordCount = () => {
  let getRecordCount = async () => {
    const res = await Axios.get("http://localhost:3000/supplier/suppliercount");
    return res;
  };
  const { data } = useQuery(["supplierRecordCount"], getRecordCount);
  const recodCount = data?.data[0].count;
  return [recodCount];
};

export const usefillterSupplierRecordCount = (filter) => {
  let getRecordCount = async () => {
    const res = await Axios.get(
      "http://localhost:3000/supplier/suppliercount",
      { filter: filter }
    );
    return res;
  };

  const { data } = useQuery(["supplierRecordCount"], getRecordCount);
  const recodCount = data?.data[0].count;
  console.log(filter);
  return [recodCount];
};
