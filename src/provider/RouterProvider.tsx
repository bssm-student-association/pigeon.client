import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import BsmLogin from "../pages/BsmLogin";
import GoogleLogin from "../pages/GoogleLogin";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oauth/bsm" element={<BsmLogin />} />
        <Route path="/oauth/google" element={<GoogleLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
