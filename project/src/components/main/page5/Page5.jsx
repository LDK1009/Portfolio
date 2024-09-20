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
import notionSrc from "../../../assets/skill/notion.png";
import figmaSrc from "../../../assets/skill/figma.png";
import discordSrc from "../../../assets/skill/discord.png";
import SkillBox from "./SkillBox";
import Be from "./Be";

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

  const FeImgSrcArr = [htmlSrc, cssSrc, jsSrc, tsSrc, reactSrc, nextSrc, null, null, styledSrc, muiSrc, framerSrc];
  const BeImgSrcArr = [nodeSrc, expressSrc, firebaseSrc, supabaseSrc ];

  return (
    <>
      <Container>
        {/* {imgSrcArr.map((el) => {
          return <img src={el} width="50px" height="50px"/>;
        })} */}
        <FeBeContainer>
          <SkillBox headLine={"Frontend"} data={FeImgSrcArr} />
          <SkillBox headLine={"Backend"} data={BeImgSrcArr} />
        </FeBeContainer>
      </Container>
    </>
  );
};

export default Page5;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
`;

const FeBeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
