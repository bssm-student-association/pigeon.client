import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Post from "../pages/Post";
import BsmLogin from "../pages/BsmLogin";
import GoogleLogin from "../pages/GoogleLogin";
import Header from "../components/common/Header";
import Modal from "../@modal/layouts";
import Suggestion from "../pages/Suggestion";
import Connection from "../pages/Connection";
import Write from "../pages/Write";
import Footer from "../components/common/Footer";
import styled from "styled-components";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Header />
      <Modal />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post/suggestion" element={<Suggestion />} />
          <Route path="/post/connection" element={<Connection />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/write" element={<Write />} />
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
