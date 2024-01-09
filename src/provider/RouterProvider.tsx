import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import BsmLogin from "../pages/BsmLogin";
import GoogleLogin from "../pages/GoogleLogin";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import Modal from "../@modal/layouts";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/oauth/bsm" element={<BsmLogin />} />
          <Route path="/oauth/google" element={<GoogleLogin />} />
        </Routes>
      </PageContainer>
      <Footer />
    </BrowserRouter>
  );
};

const PageContainer = styled.div`
  padding: 5vw;
`;

export default RouterProvider;
