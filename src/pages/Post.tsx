import React, { useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { flex, font, theme } from "../styles";
import PageTitle from "../components/common/PageTitle";
import Input from "../components/common/Input";
import TextArea from "../components/common/TextArea";
import Category from "../components/ui/Post/Category";

const Post = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
      setType(e.target.value);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    return (
        <Layout>
            <PageTitle imgSrc="WriteEmoji" title="글 작성하기" subTitle="원하는 글을 작성해 주세요." />

            <RadioBox>
            <TagText>카테고리</TagText>
            <CategoryList>
                {categoryListData.map((category) => {
                if (category === CATEGORY.NOTICE && !isAdmin) return;
                return (
                    <Category
                    key={category}
                    id={category}
                    name="category"
                    onChange={handleChangeCategory}
                    selected={category === currentCategory}
                    />
                );
                })}
            </CategoryList>
                {/* <TagText>카테고리</TagText>
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
                </RadioBox>

            <InputBox>
                <TagText>제목</TagText>
                <Input 
                    name="title"
                    value={title}
                    width="73rem"
                    onChange={handleTitleChange}
                />
            </InputBox>
            
            <TextAreaBox>
                <TagText>내용</TagText>
                <TextArea />
            </TextAreaBox>
        </Layout>
    );
};

export default Post;

const Layout = styled.div`
  ${flex.CENTER};
  padding: 7.813rem 0 11.813rem 0;
`;

const TagText = styled.div`
    ${font.p1};
`;

const RadioBox = styled.div`
`;


const RadioBtn = styled.div`
    input[type=radio] {
        display: none;
    }
    
    padding: 9px 24px;
    border-radius: 20px;
    background-color: ${theme.gray50};
    border: 1px solid ${theme.gray200};
`;

const InputBox = styled.div`
    
`;

const TextAreaBox = styled.div`
    
`;