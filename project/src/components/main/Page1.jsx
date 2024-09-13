import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import IntroText from "./IntroText";
import profileSrc from "../../assets/랫서팬더.png";

const Page1 = () => {
  return (
    <>
      <Container>
        <FlexBox>
          <IntroText />
          <Pofile src={profileSrc} alt="프로필" />
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
  padding:40px;
  padding-top:100px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content:space-between;
`;

const Pofile = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 100%;
`;
