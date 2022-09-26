import React, { useState, createContext } from "react";
export const MainContext = createContext();
MainContext.displayName = "NewsContext>>>";

export const ContextProvider = (props) => {
  const [reqlink, setReqlink] = useState("Home");
  const [modex, setModex] = useState("light");
   

  return (
    <MainContext.Provider
      value={{
        reqlink: reqlink,
        setReqlink: setReqlink,
        modex: modex,
        setModex: setModex,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
