import { Provider as JotaiProvider } from "jotai";
import React from "react";
import RouterProvider from "./RouterProvider";
import { GlobalStyle } from "../styles";

const MainProvider = () => {
  return (
    <JotaiProvider>
      <GlobalStyle />
      <RouterProvider />
    </JotaiProvider>
  );
};

export default MainProvider;
