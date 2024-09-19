import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { motion, useInView } from "framer-motion";

const Experience = ({ data, viewState }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // 한번만 트리거되도록 설정

  const RenderData = data.map((el) => {
    const { label, date, item } = el;
    const labelDelay = 0.3;
    const labelDuration = 0.3;

    return (
      <>
        <LabelDateWrap
          ref={ref}
          initial={{ opacity: 0, y: 30 }} // 시작 시 투명도 0
          animate={isInView && { opacity: 1, y: 0 }} // 이후 투명도 1로 애니메이션
          transition={{ duration: labelDuration, delay: labelDelay }} // 2초 동안
        >
          <Label>{label}</Label>
          <Date>{date}</Date>
        </LabelDateWrap>
        <ul>
          {item.map((el, index) => (
            <Item
              initial={{ opacity: 0, y: 30 }}
              animate={isInView && { opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: labelDelay + 0.2 * index }}
            >
              {el}
            </Item>
          ))}
        </ul>
      </>
    );
  });

  return (
    <>
      <Container>
        <HeadLine>Experience</HeadLine>
        {RenderData}
      </Container>
    </>
  );
};

export default Experience;

const Container = styled.div`
  width: 800px;
  border-radius: 20px;
  background-color: rgb(209, 233, 246, 0.3);
  padding: 20px;
`;

const HeadLine = styled.div`
  color: ${theme.color.mainColor};

  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
`;

const LabelDateWrap = styled(motion.div)`
  display: flex;
  align-items: end;
  margin-top: 20px;
`;

const Label = styled.div`
  margin-right: 10px;
  font-size: ${theme.fontSize.text.main};
  font-weight: bold;
`;

const Date = styled.div`
  font-size: ${theme.fontSize.text.sub};
  color: #777777;
`;

const Item = styled(motion.li)`
  font-size: ${theme.fontSize.text.main};
`;
