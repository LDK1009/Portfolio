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
          <div>
            <IntroText />
            <ResumeButton />
          </div>
          <Pofile src={profileSrc} alt="프로필" />
        </ProfileWrap>
        <CardButtonWrap>
          <CardButton
            src={githubSvg}
            text={"Github"}
            style={{ marginRight: "200px" }}
            url={"https://github.com/LDK1009"}
          />
          <CardButton src={blogSvg} text={"Blog"} url={"https://sooncoding.tistory.com/"} />
        </CardButtonWrap>
      </Container>
    </>
  );
};

export default Page1;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: ${theme.color.backgroundColor};
  scroll-snap-align: center;
  padding: 40px;
  padding-top: 80px;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;

const CardButtonWrap = styled(ProfileWrap)`
  margin-bottom: 0px;
`;
const Pofile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background-color: ${theme.color.contentColor};
  margin-left: 200px;
`;
