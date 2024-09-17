import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const RightHistory = ({ info }) => {
  return (
    <>
      <Container>{info.main}</Container>
    </>
  );
};

export default RightHistory;

const Container = styled(motion.div)`
    margin-left:500px;
    text-align:left;
    background-color:red;
    width:500px;
`;
