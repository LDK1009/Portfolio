import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import theme from "../../../theme";
import { motion, useInView } from "framer-motion";
import { ReactComponent as HandSvg } from "../../../assets/hand.svg";
import { ReactComponent as FlaskSvg } from "../../../assets/flask.svg";
import { ReactComponent as IdeaSvg } from "../../../assets/idea.svg";
import { ReactComponent as CodeSvg } from "../../../assets/code.svg";
import { ReactComponent as GrassSvg } from "../../../assets/grass.svg";
import { ReactComponent as WantSvg } from "../../../assets/want.svg";
import { ReactComponent as StarSvg } from "../../../assets/star.svg";
import { ReactComponent as ClapSvg } from "../../../assets/clap.svg";

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
      저의 개발 철학은 단순히 보기 좋은 웹사이트를 만드는 것이 아닌,
      <br /> 사용자들의 니즈에 맞춘 기능을 구현하는 것입니다.
    </>,
    <>
      앞으로도 웹 세상에서 아이디어를 실현하며,
      <br />
      사용자의 삶을 더 편리하고 즐겁게 만들어줄 웹 개발자로 성장하고 싶습니다.
    </>,
    <div style={{ marginBottom: "0px" }}>감사합니다.</div>,
  ];

  const animatedTexts = textArr.map((el, index) => {
    return (
      <AnimatedText
        initial={{ opacity: 0, y: 30 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 1.85 }}
      >
        {el}
      </AnimatedText>
    );
  });

  const contentArr = [
    <HandIcon />,
    <FlaskIcon />,
    <IdeaIcon />,
    <CodeIcon />,
    <GrassIcon />,
    <WantIcon />,
    <StarIcon />,
    <ClapIcon />,
  ];

  const [contentIndex, setContentIndex] = useState(-1);

  function handleAnimationComplete() {
    if (contentIndex < contentArr.length - 1) {
      setTimeout(() => {
        setContentIndex((prev) => prev + 1);
      }, 1000);
    }
  }

  useEffect(() => {
    if (isInView) {
      setContentIndex(0); // inView일 때 contentIndex 초기화
    }
  }, [isInView]);

  const AnimatedIcon = ({ children }) => {
    return (
      <>
        <motion.div
          key={contentIndex} // key가 변경될 때마다 재생성됨
          initial={{ opacity: 0, y: 100 }}
          animate={contentIndex >= 0 && { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: contentIndex === 0 ? 0.5 : 0 }}
          onAnimationComplete={handleAnimationComplete}
        >
          {children}
        </motion.div>
      </>
    );
  };

  return (
    <>
      <Container ref={ref}>
        <SelfIntroduce>{animatedTexts}</SelfIntroduce>
        <IconWrap>
          <AnimatedIcon key={contentIndex}>{contentArr[contentIndex]}</AnimatedIcon>
        </IconWrap>
      </Container>
    </>
  );
};

export default Page2;

const Container = styled.div`
  height: 100vh;
  /* background-color: ${theme.color.serveColor3}; */
  scroll-snap-align: center;
  padding: 40px;
  display: flex;
  align-items: center;
`;

const AnimatedText = styled(motion.div)`
  margin-bottom: 36px;
  font-size: ${theme.fontSize.title.sub};
  line-height: ${theme.lineHeight.title.sub};
  font-weight: bold;
`;

const SelfIntroduce = styled.div`
  width: 900px;
  margin-left: 100px;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 640px;
  width: 800px;
`;

// 공통 스타일 정의
const iconStyle = css`
  width: 400px;
  height: 400px;
  fill: ${theme.color.serveColor1};
  stroke: ${theme.color.serveColor1};
`;

const HandIcon = styled(HandSvg)`
  ${iconStyle}
`;
const FlaskIcon = styled(FlaskSvg)`
  ${iconStyle}
`;
const IdeaIcon = styled(IdeaSvg)`
  ${iconStyle}
`;
const CodeIcon = styled(CodeSvg)`
  ${iconStyle}
`;
const GrassIcon = styled(GrassSvg)`
  ${iconStyle}
  fill:none;
`;
const WantIcon = styled(WantSvg)`
  ${iconStyle}
  stroke : white;
  fill: none;
`;
const StarIcon = styled(StarSvg)`
  ${iconStyle}
  stroke : white;
  fill: none;
`;
const ClapIcon = styled(ClapSvg)`
  ${iconStyle}
  stroke:none;
  fill: none;
`;
