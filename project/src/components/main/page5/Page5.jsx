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

const Page5 = () => {
  const imgSrcArr = [
    htmlSrc,
    cssSrc,
    jsSrc,
    tsSrc,
    reactSrc,
    nextSrc,
    styledSrc,
    muiSrc,
    framerSrc,
    nodeSrc,
    expressSrc,
    firebaseSrc,
    supabaseSrc,
    notionSrc,
    figmaSrc,
    discordSrc,
  ];

  return (
    <>
      <Container>
        {imgSrcArr.map((el) => {
          return <img src={el} width="50px" height="50px"/>;
        })}
      </Container>
    </>
  );
};

export default Page5;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  padding: 0px 40px;
`;
