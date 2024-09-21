import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { motion } from "framer-motion";
import resumeSvg from "../../../assets/resume.svg";

const ResumeButton = () => {
  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.open("https://chatgpt.com/", "_blank")}
      >
        <img src={resumeSvg} alt="img" />
        <Text>Resume</Text>
      </Container>
    </>
  );
};

export default ResumeButton;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  border: 8px solid ${theme.color.contentColor};
  border-radius: 20px;
  margin: 0px 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
  color: ${theme.color.contentColor};
  margin-top: 12px;
`;
