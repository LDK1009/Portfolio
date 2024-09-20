import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

const Be = () => {
  return (
    <div>
      <HeadLine>Backend</HeadLine>
      <Container></Container>
    </div>
  );
};

export default Be;

const HeadLine = styled.div`
  font-size: ${theme.fontSize.title.main};
  color: ${theme.color.mainColor};
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  /* background-color: rgb(209, 233, 246, 0.3); */
  border: 1px solid black;
  margin-top:20px;
`;
