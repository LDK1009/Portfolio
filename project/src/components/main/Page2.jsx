import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const Page2 = () => {
  return (
    <>
      <Container>
        <h1>Page2</h1>
      </Container>
    </>
  );
};

export default Page2;

const Container = styled.div`
  height: 100vh;
  background-color: ${theme.color.serveColor3};
  scroll-snap-align: center;
  padding: 40px;
  padding-top: 80px;
`;
