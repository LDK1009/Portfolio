import React from "react";
import styled from "styled-components";
import theme from "../../../theme";
import { motion } from "framer-motion";
import resumeSvg from "../../../assets/resume.svg";
import pdfFile from "../../../assets/이동규_이력서.pdf";

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a"); // 링크 태그 생성
    link.href = pdfFile; // 다운로드할 PDF 파일의 경로 (import된 파일)
    link.download = "이동규_이력서.pdf"; // 다운로드될 파일 이름
    document.body.appendChild(link); // 링크 태그를 문서에 추가
    link.click(); // 링크 클릭
    document.body.removeChild(link); // 다운로드 후 링크 태그 삭제
  };

  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleDownload}
      >
        <img src={resumeSvg} alt="img" />
        <Text>Resume</Text>
      </Container>
    </>
  );
};

export default ResumeButton;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  border: 8px solid ${theme.color.contentColor};
  border-radius: 20px;
  margin: 0px 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: ${theme.fontSize.title.mid};
  font-weight: bold;
  color: ${theme.color.contentColor};
  margin-top: 12px;
`;
