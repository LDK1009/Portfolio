import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import { motion, useInView } from "framer-motion";

const Page2 = () => {
  // ref를 사용하는 useInView 훅을 통해 요소가 화면에 있는지 감지
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // 한번만 트리거되도록 설정

  const textArr = [
    <>안녕하세요! 프론트엔드 개발자 이동규 입니다.</>,
    <>제 어릴 적 꿈은 발명가였습니다.</>,
    <>
      새로운 아이디어를 떠올리고, 그 아이디어를 실제로 구현하는 과정은
      <br />
      저에게 큰 즐거움으로 다가왔습니다.
    </>,
    <>그러한 창의적인 사고는 자연스럽게 저를 프론트엔드 개발의 세계로 이끌었습니다.</>,
    <>현재 저는 창의력과 문제 해결 능력을 바탕으로 다양한 서비스를 구축하며 성장 중입니다. </>,
    <>
      단순히 보기 좋은 웹사이트를 만드는 것이 아닌,
      <br /> 사용자들의 니즈에 맞춘 기능을 구현하는 것이 저의 개발 철학입니다.
    </>,
    <>
      앞으로도 웹 세상에서 아이디어를 실현하며,
      <br />
      사용자의 삶을 더 편리하고 즐겁게 만들어줄 웹 개발자로 성장하고 싶습니다.
    </>,
    <>감사합니다.</>,
  ];

  const animatedTexts = textArr.map((el, index) => {
    return (
      <AnimatedText
        initial={{ opacity: 0, y: 30 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 + index * 1.5 }}
      >
        {el}
      </AnimatedText>
    );
  });

  return (
    <>
      <Container ref={ref}>
        <SelfIntroduce>{animatedTexts}</SelfIntroduce>
      </Container>
    </>
  );
};

export default Page2;

const Container = styled.div`
  height: 100vh;
  background-color: ${theme.color.serveColor3};
  scroll-snap-align: center;
  padding: 40px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AnimatedText = styled(motion.div)`
  width: 900px;
  margin-bottom: 36px;
  font-size: ${theme.fontSize.title.sub};
  line-height: ${theme.lineHeight.title.sub};
  font-weight: 500;
`;

const SelfIntroduce = styled.div``;
