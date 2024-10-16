import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import notionSrc from "../../../assets/skill/notion.png";
import figmaSrc from "../../../assets/skill/figma.png";
import gitSrc from "../../../assets/skill/git.png";
import slackSrc from "../../../assets/skill/slack.png";
import jiraSrc from "../../../assets/skill/jira.png";
import { motion, useInView } from "framer-motion";

const Etc = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref); // 한번만 트리거되도록 설정

  const imgInfoArr = [
    { label: "Git", src: gitSrc },
    { label: "Notion", src: notionSrc },
    { label: "Jira", src: jiraSrc },
    { label: "Slack", src: slackSrc },
    { label: "Figma", src: figmaSrc },
  ];

  return (
    <Container ref={ref}>
      <HeadLine>etc</HeadLine>
      <ItemContainer>
        {imgInfoArr.map((el, index) => {
          const animationTotalTime = 2.0;
          const animationDuration = (animationTotalTime / imgInfoArr.length).toFixed(2);
          const animationDelay = 0.5;
          const animationTerm = (animationDuration / 2).toFixed(2);

          return (
            isInView && 
            <ItemWrap
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: animationDuration, delay: animationDelay + animationTerm * index }}
            >
              <Img src={el.src} alt="img" />
              <Label>{el.label}</Label>
            </ItemWrap>
          );
        })}
      </ItemContainer>
    </Container>
  );
};

export default Etc;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const HeadLine = styled.div`
  font-size: ${theme.fontSize.title.main};
  color: ${theme.color.mainColor};
  font-weight: bold;
  text-align: center;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  height: 150px;
  padding: 20px;
  border-radius: 20px;
  border: 4px solid ${theme.color.serveColor1};
  margin-top: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Label = styled.div`
  font-size: ${theme.fontSize.text.main};
  font-weight: bold;
  width: 100px;
  text-align: center;
  margin-top: 10px;
`;

const ItemWrap = styled(motion.div)``;
