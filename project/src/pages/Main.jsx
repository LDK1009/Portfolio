import React from "react";
import Page1 from "../components/main/Page1";
import styled from "styled-components";

const Main = () => {
  return (
    <>
      <Container>
        <Page1 />
        <Page1 />
      </Container>
    </>
  );
};

export default Main;

const Container = styled.div`
height:100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
`;
