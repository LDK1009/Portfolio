import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import IntroText from "./IntroText";
import profileSrc from "../../../assets/랫서팬더.png";
import githubSvg from "../../../assets/깃허브.svg";
import blogSvg from "../../../assets/블로그.svg";
import CardButton from "./CardButton";
import ResumeButton from "./ResumeButton";
import Background from "../Background";

const Page1 = () => {
  return (
    <>
      <Container>
        <Background />
        <ProfileWrap>
          {/* 소개글 */}
          <IntroText />
          {/* 프로필 이미지 */}
          <Pofile src={profileSrc} alt="프로필" />
        </ProfileWrap>
        <ButtonWrap>
          {/* 깃허브 버튼 */}
          <CardButton src={githubSvg} text={"Github"} url={"https://github.com/LDK1009"} />
          {/* 이력서 다운로드 버튼 */}
          <ResumeButton />
          {/* 블로그 버튼 다운로드 버튼 */}
          <CardButton src={blogSvg} text={"Blog"} url={"https://sooncoding.tistory.com/"} />
        </ButtonWrap>
      </Container>
    </>
  );
};

export default Page1;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.color.backgroundColor};
  scroll-snap-align: center;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 120px;
  width: 1200px;
`;

const ButtonWrap = styled(ProfileWrap)`
  margin-bottom: 0px;
  width: 1200px;
  justify-content: space-between;
`;

const Pofile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: ${theme.color.contentColor};
  margin-left: 200px;
`;
