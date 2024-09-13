import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import IntroText from "./IntroText";

const Page1 = () => {
  return (
    <>
      <Container>
        <IntroText />
      </Container>
    </>
  );
};

export default Page1;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.mainColor};
  scroll-snap-align: center;
`;
