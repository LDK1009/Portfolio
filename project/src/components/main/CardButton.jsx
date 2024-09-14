import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { motion } from "framer-motion";

const CardButton = ({ src, url, text, style }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
      >
        <Container style={style} onClick={() => window.open(`${url}`, "_blank")}>
          <img src={src} alt={text} />
          <Text>{text}</Text>
        </Container>
      </motion.div>
    </>
  );
};

export default CardButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-width:8px;
  border-style:solid;
  border-color:${theme.color.contentColor};
  border-radius: 20px;
  width: 250px;
  height: 250px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
  color: ${theme.color.contentColor};
`;
