import React from "react";
import styled from "styled-components";
import theme from "../../../theme";

import { motion, useInView } from "framer-motion";

const SkillBox = ({ headLine, data }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // 한번만 트리거되도록 설정
  const imgSize = headLine === "Frontend" ? "100px" : "120px";
  return (
    <div>
      <HeadLine>{headLine}</HeadLine>
      <Container ref={ref} headLine={headLine}>
        {data.map((el, index) => {
          const animationTotalTime = 2.0;
          const animationDuration = (animationTotalTime / data.length).toFixed(2);
          const animationDelay = 0.5;
          const animationTerm = (animationDuration / 2).toFixed(2);

          return (
            <GridItem
              initial={{ opacity: 0, y: 30 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ duration: animationDuration, delay: animationDelay + animationTerm * index }}
            >
              {el.src && (
                <div>
                  <Img src={el.src} alt="img" size={imgSize} />
                  <Label width={imgSize}>{el.label}</Label>
                </div>
              )}
            </GridItem>
          );
        })}
      </Container>
    </div>
  );
};

export default SkillBox;

const HeadLine = styled.div`
  font-size: ${theme.fontSize.title.main};
  color: ${theme.color.mainColor};
  font-weight: bold;
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.headLine === "Frontend" ? "repeat(4, 1fr)" : "repeat(2, 1fr)")};
  grid-template-rows: ${(props) =>
    props.headLine === "Frontend" ? " repeat(3, auto)" : " repeat(2, auto)"}; /* 2행 생성 */
  gap: 10px; /* 요소 간 간격 설정 */
  width: 600px;
  height: 600px;
  padding: 20px;
  border-radius: 20px;
  border: 4px solid ${theme.color.serveColor3};
  /* background-color: rgb(209, 233, 246, 0.3); */
  margin-top: 20px;
`;

const GridItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: ${(props) => props.size || null};
  height: ${(props) => props.size || null};
`;

const Label = styled.div`
  font-size: ${theme.fontSize.text.main};
  font-weight: bold;
  width: ${(props) => props.width || null};
  text-align: center;
  margin-top: 10px;
`;
