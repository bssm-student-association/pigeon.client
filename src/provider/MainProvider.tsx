import { Provider as JotaiProvider } from "jotai";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RouterProvider from "./RouterProvider";
import { GlobalStyle } from "../styles";

const MainProvider = () => {
  return (
    <JotaiProvider>
      <GlobalStyle />
      <Header />
      <RouterProvider />
      <Footer />
    </JotaiProvider>
  );
};

export default MainProvider;
