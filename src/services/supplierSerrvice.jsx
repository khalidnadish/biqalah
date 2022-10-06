import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useSupplierRecordCount = () => {
  let getRecordCount = async () => {
    const res = await Axios.get("http://localhost:3000/supplier/suppliercount");
    // const result = res.data[0].count;
    return res;
  };

  const { data } = useQuery(["supplierRecordCount"], getRecordCount);
  const recodCount = data?.data[0].count;
  console.log("useSupplier", recodCount);

  return [recodCount];
};
