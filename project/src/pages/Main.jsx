import React from "react";
import Page1 from "../components/main/Page1";
import styled from "styled-components";
import theme from "../theme";

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
  height: 100vh;
  overflow: auto;
  overflow-x: hidden; // x축 스크롤바를 숨깁니다
  scroll-snap-type: y mandatory;

  /* 전체 스크롤바 너비 설정 */
  &::-webkit-scrollbar {
    width: 4px;
  }

  /* 스크롤바 트랙(백그라운드) */
  &::-webkit-scrollbar-track {
    background-color: ${theme.color.mainColor}; /* 완전히 투명한 배경 */
  }

  /* 스크롤바 핸들(움직이는 부분) */
  &::-webkit-scrollbar-thumb {
    background: ${theme.color.serveColor2};
    border-radius: 8px;
  }

  /* 스크롤바 핸들에 마우스 오버 시 색상 변경 */
  &::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.serveColor1};
  }
`;
