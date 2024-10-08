import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

const HistoryItem = ({ info, direction, animateVariants }) => {
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

export default HistoryItem;

const Container = styled(motion.div)`
  display: flex;
  justify-content: ${(props) => (props.direct === "left" ? "end" : "start")};
  align-items: center;
  margin-right: ${(props) => (props.direct === "left" ? "600px" : "0px")};
  margin-left: ${(props) => (props.direct === "left" ? "0px" : "600px")};
  width: 600px;
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
  /* background-color: ${theme.color.serveColor3}; */
  background-color: white;
  transform: ${(props) => (props.direct === "left" ? "translateX(50%)" : "translateX(-50%)")};
`;
