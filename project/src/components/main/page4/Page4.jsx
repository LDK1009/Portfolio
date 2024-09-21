import React from "react";
import styled from "styled-components";
import Experience from "./Experience";
import ProfileBox from "./ProfileBox";

const Page4 = () => {
  const ExperienceData = [
    {
      label: "건솔루션",
      date: "2024.06 - 2024.08",
      item: [
        "AI 로봇 헬스 모니터링 시스템 UI/UX 디자인",
        "AI 로봇 헬스 모니터링 시스템 프론트엔드 개발",
        "AI 로봇 헬스 모니터링 시스템 AI 초기 모델 테스트 개발",
      ],
    },
  ];
  const EducationData = [
    {
      date: "2019.03 - 2022.02",
      item: "순천향대학교 디스플레이 신소재공학과",
    },
    {
      date: "2022.02 - 2022.06",
      item: "순천향대학교 화학과",
    },
    {
      date: "2022.06 - 2025.02",
      item: "순천향대학교 컴퓨터소프트웨어공학과",
    },
  ];
  const CertificateData = [
    {
      date: "2024.06",
      item: "정보처리기사",
    },
  ];
  const EtcData = [
    {
      date: "2020.01",
      item: "성적 최우수상 수상",
    },
    {
      date: "2023.09",
      item: "SW 융합클러스터 2.0 해커톤 인재상 수상",
    },
    {
      date: "2023.11",
      item: "멋쟁이사자처럼 11기 수료",
    },
  ];

  return (
    <>
      <Container>
        <ProfileContainer>
          <Experience data={ExperienceData} />
          <ProfileBoxWrap>
            <ProfileBox data={EducationData} headline={"Education"} />
            <ProfileBox data={CertificateData} headline={"Certificate"} />
            <ProfileBox data={EtcData} headline={"Etc"} />
          </ProfileBoxWrap>
        </ProfileContainer>
      </Container>
    </>
  );
};

export default Page4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 800px;
`;

const ProfileBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
