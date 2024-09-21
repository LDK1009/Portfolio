import React from "react";
import { ReactTyped } from "react-typed";
import styled from "styled-components";
import theme from "../../../theme";

const IntroText = () => {
  return (
    <>
      <TypedText>
        <ReactTyped
          strings={["안녕하세요!<br/>일상을 개발하는<br/>프론트엔드 개발자<br/>이동규 입니다."]}
          typeSpeed={80} // 타이핑 속도
          backSpeed={30} // 백스페이스 속도
          startDelay={500} // 0.5초 대기 후 시작
          backDelay={1000} // 타이핑 후 1초 대기 후 삭제
          //   loop // 반복
          showCursor={true} // 커서 표시
          cursorChar="|" // 커서 모양
        />
      </TypedText>
    </>
  );
};

export default IntroText;

const TypedText = styled.div`
  font-size: ${theme.fontSize.title.large};
  font-weight: bold;
  color: ${theme.color.contentColor};
`;
