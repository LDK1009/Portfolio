import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

const LeftHistory = ({ info, direction, animateVariants }) => {
  return (
    <>
      <Container direct={direction} initial="hidden" animate="visible" variants={animateVariants}>
        {direction === "right" && <Circle direct={direction} />}
        <div>
          <SubText direct={direction}>{info.sub}</SubText>
          <Text direct={direction}>{info.main}</Text>
        </div>
        {direction === "left" && <Circle direct={direction} />}
      </Container>
    </>
  );
};

export default LeftHistory;

const Container = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.direct === "left" ? "end" : "start")};
  align-items: center;
  margin-right: ${(props) => (props.direct === "left" ? "500px" : "0px")};
  margin-left: ${(props) => (props.direct === "left" ? "0px" : "500px")};
  width: 500px;
  margin-bottom: 40px;
  /* background-color: gray; */
`;

const Text = styled.div`
  font-size: ${theme.fontSize.title.sub};
  font-weight: bold;
  text-align: ${(props) => (props.direct === "left" ? "end" : "start")};
  margin-right: 10px;
  flex-grow: 1; /* 남은 공간을 전부 차지 */
`;

const SubText = styled.div`
  font-size: ${theme.fontSize.text.main};
  text-align: ${(props) => (props.direct === "left" ? "end" : "start")};
  margin-right: 10px;
  color: #777777;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid ${theme.color.mainColor};
  border-radius: 100%;
  background-color: ${theme.color.serveColor3};
  transform: ${(props) => (props.direct === "left" ? "translateX(50%)" : "translateX(-50%)")};
`;
