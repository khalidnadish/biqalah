import axios from "axios";

const getsup = (id) => {
  try {
    const resposn = axios.get("http://localhost:3000/supplier/getoneSupplier", {
      params: { supplierid: id },
    });

    if (resposn) {
      return resposn;
    }
  } catch (error) {
    console.log("supplier  Error :", error);
  }
};

export function useGetsupplier(id) {
  const res = getsup(id)
    .then((res1) => {
      return res1;
    })
    .then((res2) => {
      console.log(res2);
    });

  //   return [res.data.data];
}
