import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { motion, useInView } from "framer-motion";

const ProfileBox = ({ headline, data, viewState }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // 한번만 트리거되도록 설정

  const RenderData = data.map((el, index) => {
    const { date, item } = el;
    return (
      <ItemWrap 
      initial={{ opacity: 0, y: 30 }} // 시작 시 투명도 0
      animate={isInView && { opacity: 1, y: 0 }} // 이후 투명도 1로 애니메이션
      transition={{ duration: 0.3, delay: 0.3 + (0.2 * index) }} // 2초 동안
      >
        <Date>{date}</Date>
        <Item>{item}</Item>
      </ItemWrap>
    );
  });

  return (
    <>
      <Container>
        <HeadLine ref={ref}>{headline}</HeadLine>
        <ul>{RenderData}</ul>
      </Container>
    </>
  );
};

export default ProfileBox;

const Container = styled.div`
  width: 800px;
  border-radius: 20px;
  background-color: rgb(209, 233, 246, 0.3);
  padding: 20px;
`;

const HeadLine = styled.div`
  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
  color:${theme.color.mainColor};
`;

const Date = styled.div`
  font-size: ${theme.fontSize.text.sub};
  color: #777777;
`;

const Item = styled.li`
  font-size: ${theme.fontSize.text.main};
`;

const ItemWrap = styled(motion.div)`
  margin-bottom: 20px;
`;
