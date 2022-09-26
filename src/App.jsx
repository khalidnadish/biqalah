import { useState, useEffect ,useContext} from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { MainContext } from "./helper/context";


import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const {modex, setModex} = useContext(MainContext);

  const darkTheme = createTheme({
    palette: {
      mode: modex,
    },
    typography: {
      Kufi: {
        fontFamily: "Noto Kufi Arabic, sans-serif",
      },
      Naskh: {
        fontFamily: "Noto Naskh Arabic', serif",
      },
     
    },






 

  });

  return (
   
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
    
  );
}

export default App;

