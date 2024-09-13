import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const CardButton = ({ src, url, text, style }) => {
  return (
    <>
      <Container style={style}>
        <img src={src} alt="깃허브" />
        <Text>{text}</Text>
      </Container>
    </>
  );
};

export default CardButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  border-radius: 20px;
  width: 200px;
  height: 200px;
`;
const Logo = styled.img``;

const Text = styled.div`
  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
  color: white;
`;
