import React, { useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { flex, font, theme } from "../styles";

import PageTitle from "../components/common/PageTitle";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Button from "../components/common/Button";

import Category from "../components/ui/Post/Category";
import categoryListData from "../data/post/categoryListData";


const Post = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [currentCategory, setCurrentCategory] = useState("");

    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
      setType(e.target.value);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentCategory(e.target.value);
    };


    return (
        <Layout>
            <ContentBox>
                <PageTitle imgSrc="WriteEmoji" title="글 작성하기" subTitle="원하는 글을 작성해 주세요." />

                <ContentInputBox>
                    <RowBox>
                        <LabelText>카테고리</LabelText>
                        <CategoryList>
                            {categoryListData.map((category) => {
                                return (
                                    <Category
                                        key={category}
                                        id={category}
                                        name="category"
                                        label={category}
                                        selected={currentCategory}
                                        onChange={handleCategoryChange}
                                    />
                                );
                            })}
                        </CategoryList>
                        {/* <LabelText>카테고리</LabelText>
                            <RadioBtn>
                                <input 
                                    type="radio" 
                                    id="suggestion" 
                                    name="type" 
                                    value="SUGGESTION"
                                    onChange={handleTypeChange}
                                />
                                <label htmlFor="suggestion">카테고리</label>
                            </RadioBtn>
                            <RadioBtn>
                                <input 
                                    type="radio" 
                                    id="project" 
                                    name="type"
                                    value="PROJECT"
                                    onChange={handleTypeChange}
                                />
                                <label htmlFor="project">교내 프로젝트 수요</label>
                            </RadioBtn>
                            <RadioBtn>
                                <input  
                                    type="radio" 
                                    id="mentoring" 
                                    name="type"
                                    value="MENTORING"
                                    onChange={handleTypeChange}
                                />
                                <label htmlFor="mentoring">코드리뷰/멘토링</label>
                            </RadioBtn> */}
                    </RowBox>

                    <RowBox>
                        <LabelText>제목</LabelText>
                        <Input 
                            name="title"
                            value={title}
                            width="73rem"
                            onChange={handleTitleChange}
                        />
                    </RowBox>
                    
                    <RowBox>
                        <LabelText>내용</LabelText>
                        <TextArea />
                    </RowBox>
                </ContentInputBox>

                <RowBox>
                    <Button onClick={() => {}}>취소</Button>
                    <Button onClick={() => {}}>저장</Button>
                </RowBox>
                
            </ContentBox>
        </Layout>
    );
};

export default Post;

const Layout = styled.div`
  ${flex.CENTER};
  padding: 7.813rem 0 11.813rem 0;
`;

const ContentBox = styled.div`
    ${flex.COLUMN_START};
    gap: 60px;
`;

const RowBox = styled.div`
    ${flex.HORIZONTAL};
    gap: 33px;
`;

const ContentInputBox = styled.div`
    ${flex.COLUMN_CENTER};
    gap: 54px;
`

const LabelText = styled.div`
    ${font.p1};
`;

const CategoryList = styled.div`
    ${flex.CENTER};
    gap: 9px;
`;

const RadioBtn = styled.div`
    input[type=radio] {
        display: none;
    }
    
    padding: 0.563rem 1.5rem;
    border-radius: 1.25rem;
    background-color: ${theme.gray50};
    border: 1px solid ${theme.gray200};
`;