import React from "react";
import styled from "styled-components";
import htmlSrc from "../../../assets/skill/html.png";
import cssSrc from "../../../assets/skill/css.png";
import jsSrc from "../../../assets/skill/js.png";
import tsSrc from "../../../assets/skill/ts.png";
import reactSrc from "../../../assets/skill/react.png";
import nextSrc from "../../../assets/skill/next.png";
import styledSrc from "../../../assets/skill/styled.png";
import muiSrc from "../../../assets/skill/mui.png";
import framerSrc from "../../../assets/skill/framer.png";
import nodeSrc from "../../../assets/skill/node.png";
import expressSrc from "../../../assets/skill/express.png";
import firebaseSrc from "../../../assets/skill/firebase.png";
import supabaseSrc from "../../../assets/skill/supabase.png";
import SkillBox from "./SkillBox";
import Etc from "./Etc";

const Page5 = () => {
  // const imgSrcArr = [
  //   htmlSrc,
  //   cssSrc,
  //   jsSrc,
  //   tsSrc,
  //   reactSrc,
  //   nextSrc,
  //   styledSrc,
  //   muiSrc,
  //   framerSrc,
  //   nodeSrc,
  //   expressSrc,
  //   firebaseSrc,
  //   supabaseSrc,
  //   notionSrc,
  //   figmaSrc,
  //   discordSrc,
  // ];

  const FeImgSrcArr = [
    { label: "HTML", src: htmlSrc },
    { label: "CSS", src: cssSrc },
    { label: "Javascript", src: jsSrc },
    { label: "Typescript", src: tsSrc },
    { label: "React", src: reactSrc },
    { label: "Next.js", src: nextSrc },
    { label: null, src: null },
    { label: null, src: null },
    { label: "styled-components", src: styledSrc },
    { label: "MUI", src: muiSrc },
    { label: "framer-motion", src: framerSrc },
  ];

  const BeImgSrcArr = [
    { label: "Node.js", src: nodeSrc },
    { label: "Express.js", src: expressSrc },
    { label: "Firebase", src: firebaseSrc },
    { label: "Supabase", src: supabaseSrc },
  ];

  return (
    <>
      <Container>
        <FeBeContainer>
          <SkillBox headLine={"Frontend"} data={FeImgSrcArr} />
          <SkillBox headLine={"Backend"} data={BeImgSrcArr} />
        </FeBeContainer>
        <Etc />
      </Container>
    </>
  );
};

export default Page5;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`;

const FeBeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
