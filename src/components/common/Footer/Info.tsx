import styled from "styled-components";
import { flex, font, theme } from "../../../styles";
import { Column, Row } from "../Flex";

const Info = () => {
  const { name, service, headline, serviceInfo, policy, inquiry, copyRight } = {
    name: "BSSM 작은 비둘기",
    service:
      "부산소프트웨어마이스터고의 소통의 창구! 비둘기를 통해 원하는 글을 전달해 봐요.",
    headline: "이용약관 | 개인정보처리방침",
    serviceInfo: `부산소프트웨어마이스터고등학교 학생회 | 부산광역시 강서구 가락대로 1393`,
    policy: "개발 및 기획 : 2023학년도 학생회 회장 박우빈, 부회장 원설아",
    inquiry: "비즈니스 문의 : insert@gmail.com",
    copyRight:
      "© 2023. busan software meister high school. All rights reserved.",
  };

  return (
    <Container>
      <HGroup>
        <Column>
          <Title>{name}</Title>
          <SubTitle>{service}</SubTitle>
          <PolicyText>{headline}</PolicyText>
        </Column>
      </HGroup>
      <Section>
        <Row>
          <Column gap="2px">
            <PolicyText>{service}</PolicyText>
            <PolicyText>{serviceInfo}</PolicyText>
            <PolicyText>{policy}</PolicyText>
            <PolicyText>{inquiry}</PolicyText>
            <Copyright>{copyRight}</Copyright>
          </Column>
        </Row>
      </Section>
    </Container>
  );
};

const Container = styled.footer`
  ${flex.COLUMN_FLEX};
`;

const Title = styled.span`
  ${font.H2};
`;

const HGroup = styled.hgroup`
  border-bottom: 1px solid ${theme.gray[400]};
  padding-bottom: 2%;
  margin-bottom: 2%;
`;

const Section = styled.section``;

const SubTitle = styled.span`
  ${font.H5};
  margin-bottom: 3%;
`;

const PolicyText = styled.span`
  ${font.p3};
  color: ${theme.gray[400]};
`;

const Copyright = styled.span`
  margin-top: 2%;
  ${font.p3};
  color: ${theme.gray[400]};
`;

export default Info;
