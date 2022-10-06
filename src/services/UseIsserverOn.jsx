import { useState } from "react";
import Axios from "axios";

const useIserverON = async () => {
  const [serverStuts, setServerStuts] = useState(false);
  try {
    const resposn = await Axios.get(
      "http://localhost:3000/supplier/suppliercount"
    );
    if (resposn) {
      setServerStuts(true);
    }
  } catch (error) {
    setServerStuts(false);
  }
  const checkMe = serverStuts;
  console.log("serverStuts", checkMe);

  return [checkMe];
};
export { useIserverON };
