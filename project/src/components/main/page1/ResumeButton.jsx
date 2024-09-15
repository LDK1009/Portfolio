import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { color } from "framer-motion";

const ResumeButton = () => {
  return (
    <>
      <Button onClick={() => window.open("https://chatgpt.com/", "_blank")}>Resume</Button>
    </>
  );
};

export default ResumeButton;

const Button = styled.button`
  background-color: ${theme.color.serveColor3};
  color: ${theme.color.mainColor};
  font-size: ${theme.fontSize.title.sub};
  font-weight:bold;
  width: 300px;
  height: 50px;
  border: 0px;
  border-radius: 12px;
  &:hover{
    cursor:pointer;
    opacity:0.9;
  }
`;
