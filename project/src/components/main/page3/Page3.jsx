import React from "react";
import theme from "../../../theme";
import styled from "styled-components";
import { useInView } from "framer-motion";
import HistoryItem from "./HistoryItem";

const Page3 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref); // 한번만 트리거되도록 설정

  const HistoryArr = [
    { main: "순천향대학교 입학", sub: "2019.03" },
    { main: "성적 최우수상 수상", sub: "2020.01" },
    { main: "대한민국 육군 병장 만기전역", sub: "2021.10" },
    { main: "멋쟁이사자처럼 11기 중앙해커톤 참가", sub: "2023.08" },
    { main: "SW 융합클러스터 2.0 해커톤 인재상 수상", sub: "2023.09" },
    { main: "멋쟁이사자처럼 11기 수료", sub: "2023.11" },
    { main: "[탑퀵] 촬영소품 운송업체 홈페이지 외주 개발", sub: "2024.02" },
    { main: "[포동] 반려견 동반 전세기 상품 홍보 페이지 외주 개발", sub: "2024.03" },
    { main: "정보처리기사 자격증 취득", sub: "2024.06" },
    { main: "순천향대학교 졸업", sub: "2025.02" },
  ];

  const RenderHistory = HistoryArr.map((item, index) => {
    // 애니메이션 변수 정의
    const animateVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: isInView && {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: index * 0.8 + 0.5 }, // 변수로 애니메이션 지속 시간 설정
      },
    };

    return (
      <>
        {index % 2 === 0 ? (
          <HistoryItem animateVariants={animateVariants} info={item} direction={"left"}></HistoryItem>
        ) : (
          <HistoryItem animateVariants={animateVariants} info={item} direction={"right"}></HistoryItem>
        )}
      </>
    );
  });

  return (
    <>
      <Container >
      <Line ref={ref} />
        {isInView && <HistoryWrap>{RenderHistory}</HistoryWrap>}
      </Container>
    </>
  );
};

export default Page3;

const Container = styled.div`
  position: relative;
  height: 100vh;
  /* background-color: ${theme.color.serveColor3}; */
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
  width: 95vh;
  height: 5px; /* 선의 두께 설정 */
  background-color: ${theme.color.mainColor}; /* 선의 색상 */
  border: none; /* 기본 테두리 제거 */
`;
