import React from "react";
import styled from "styled-components";
import { flex, font } from "../../../styles";
import WriteEmoji from "../../../assets/WriteEmoji";

interface titleType {
    imgSrc: string,
    title: string,
    subTitle: string
}

const PageTitle = ({imgSrc, title, subTitle}: titleType) => {
  const EmojiImg = require(`../../../assets/${imgSrc}`).default;

  return (
    <PageTitleBox>
      <TitleBox>
        <EmojiImg />
        {title}
      </TitleBox>
      {subTitle}
    </PageTitleBox>
  );
};

export default PageTitle;

const PageTitleBox = styled.div`
  ${flex.COLUMN_START};
  ${font.p2};
  gap: 13px;
`;

const TitleBox = styled.div`
  ${flex.VERTICAL};
  gap: 6px;
  ${font.H2};
`;