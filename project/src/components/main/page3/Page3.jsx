import React from "react";
import theme from "../../../theme";
import styled from "styled-components";
import { delay, motion, useInView } from "framer-motion";
import LeftHistory from "./LeftHistory";
import RightHistory from "./RightHistory";

const Page3 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // 한번만 트리거되도록 설정

  const HistoryArr = [
    { main: "용인 성지고등학교 졸업", sub: "2019.02" },
    { main: "순천향대학교 입학", sub: "2019.03" },
    { main: "성적우수상(최우수) 수여", sub: "2020.01" },
    { main: "대한민국 육군 입대", sub: "2020.04" },
    { main: "대한민국 육군 병장 만기전역", sub: "2021.10" },
    { main: "화학과 전과", sub: "2022.02" },
    { main: "컴퓨터소프트웨어공학과 전과", sub: "2022.07" },
    { main: "순천향대학교 졸업", sub: "2025.02" },
  ];

  const RenderHistory = HistoryArr.map((item, index) => {
    // 애니메이션 변수 정의
    const animateVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: isInView && {
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: index * 1 + 0.5 }, // 변수로 애니메이션 지속 시간 설정
      },
    };

    return (
      <>
        {index % 2 === 0 ? (
          <LeftHistory animateVariants={animateVariants} info={item} direction={"left"}></LeftHistory>
        ) : (
          <LeftHistory animateVariants={animateVariants} info={item} direction={"right"}></LeftHistory>
        )}
      </>
    );
  });

  return (
    <>
      <Container ref={ref}>
        <Line />
        <HistoryWrap>{RenderHistory}</HistoryWrap>
      </Container>
    </>
  );
};

export default Page3;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: ${theme.color.serveColor3};
  scroll-snap-align: center;
  padding: 0px 40px;
  display: flex;
  align-items: center;
`;

const HistoryWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.hr`
  position: absolute;
  top: 50%;
  left: 50%; /* left도 50%로 설정 */
  transform: translate(-50%, -50%) rotate(90deg); /* 중앙으로 이동 후 회전 */
  width: 100vh;
  height: 5px; /* 선의 두께 설정 */
  background-color: ${theme.color.mainColor}; /* 선의 색상 */
  border: none; /* 기본 테두리 제거 */
`;
