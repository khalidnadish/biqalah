import { useState, useEffect, useContext, useLayoutEffect } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { MainContext } from "./helper/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./helper/context";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  // const { isOn } = useIserverON();
  const [server, setServer] = useState(true);

  const { modex, setModex } = useContext(MainContext);

  const darkTheme = createTheme({
    palette: {
      mode: modex,
    },
    typography: {
      allVariants: {
        fontFamily: "Noto Kufi Arabic, sans-serif",
        textTransform: "none",
        fontSize: 16,
      },
    },
    // typography: {
    //   Kufi: {
    //     fontFamily: "Noto Kufi Arabic, sans-serif",
    //   },
    //   Naskh: {
    //     fontFamily: "Noto Naskh Arabic', serif",
    //   },
    // },
  });

  let xx = "";
  useLayoutEffect(() => {
    xx = useIserverON();
    console.log(xx);
    // {
    //   xx ? setServer((pre) => true) : setServer((pre) => false);
    // }
  }, []);
  useEffect(() => {
    console.log("xx", xx);
    // {
    //   xx ? setServer((pre) => true) : setServer((pre) => false);
    // }
  }, []);

  return (
    <>
      {true === true ? (
        <MainApp
          darkTheme={darkTheme}
          modex={modex}
          setModex={modex}
          queryClient={queryClient}
        />
      ) : (
        <h1>Server Not Runing</h1>
      )}
    </>
  );
}

export default App;

const MainApp = ({ darkTheme, modex, setModex, queryClient }) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <QueryClientProvider client={queryClient}>
            <Header />
            <Body />
            <Footer />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </div>
      </ThemeProvider>
    </>
  );
};

const useIserverON = async () => {
  let stuts = "";
  try {
    const resposn = await Axios.get(
      "http://localhost:3000/supplier/suppliercount"
    );
    if (resposn) {
      stuts = true;
    }
  } catch (error) {
    stuts = false;
  }
  const checkMe = stuts;
  console.log(checkMe);

  return [stuts];
};
