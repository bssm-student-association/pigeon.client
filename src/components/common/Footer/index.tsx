import React from "react";

import styled from "styled-components";
import Info from "./Info";
import { flex, theme } from "../../../styles";

const Footer = () => {
  return (
    <Layout>
      <Container>
        <Info />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  ${flex.CENTER};
  width: 100%;
  height: 400px;
  color: ${theme.gray[200]};
  background-color: ${theme.gray[900]};
`;

const Container = styled.div`
  width: 76%;
  height: 60%;
`;

export default Footer;
