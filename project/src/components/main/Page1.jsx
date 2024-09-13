import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import IntroText from "./IntroText";
import profileSrc from "../../assets/랫서팬더.png";
import githubSvg from "../../assets/깃허브.svg";
import blogSvg from "../../assets/블로그.svg";
import CardButton from "./CardButton";

const Page1 = () => {
  return (
    <>
      <Container>
        <FlexBox>
          <IntroText />
          <Pofile src={profileSrc} alt="프로필" />
        </FlexBox>
        <FlexBox style={{ marginTop: "100px" }}>
          <CardButton src={githubSvg} text={"Github"} style={{ marginRight: "200px" }} />
          <CardButton src={blogSvg} text={"Blog"} />
        </FlexBox>
      </Container>
    </>
  );
};

export default Page1;

const Container = styled.div`
  height: 100vh;
  background-color: ${theme.color.mainColor};
  scroll-snap-align: center;
  padding: 40px;
  padding-top: 100px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Pofile = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 100%;
  background-color: white;
  margin-left: 200px;
`;
