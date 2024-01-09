import { Provider as JotaiProvider } from "jotai";
import React from "react";
import RouterProvider from "./RouterProvider";
import { GlobalStyle } from "../styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: false,
      enabled: true,
      retry: 0,
    },
  },
});

const MainProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <GlobalStyle />
        <RouterProvider />
      </JotaiProvider>
    </QueryClientProvider>
  );
};

export default MainProvider;
