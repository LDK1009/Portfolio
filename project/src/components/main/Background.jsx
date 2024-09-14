import React from "react";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as HtmlSvg } from "../../assets/html.svg";
import { ReactComponent as CssSvg } from "../../assets/css.svg";
import { ReactComponent as JsSvg } from "../../assets/js.svg";
import { ReactComponent as TsSvg } from "../../assets/ts.svg";
import { ReactComponent as ReactSvg } from "../../assets/react.svg";
import { ReactComponent as NextSvg } from "../../assets/next.svg";
import { ReactComponent as StyledSvg } from "../../assets/styled-components.svg";
import { ReactComponent as MuiSvg } from "../../assets/mui.svg";
import { ReactComponent as FramerSvg } from "../../assets/framer.svg";
import { ReactComponent as FigmaSvg } from "../../assets/figma.svg";
import { ReactComponent as FirebaseSvg } from "../../assets/firebase.svg";
import { ReactComponent as VerceltSvg } from "../../assets/vercel.svg";

const Background = () => {
  const compObj = {
    html: HtmlIcon,
    css: CssIcon,
    js: JsIcon,
    ts: TsIcon,
    react: ReactIcon,
    next: NextIcon,
    styled: StyledIcon,
    mui: MuiIcon,
    framer: FramerIcon,
    figma: FigmaIcon,
    firebase: FirebaseIcon,
    vercel: VercelIcon,
  };

  const compArr = Object.keys(compObj);

  return (
    <>
      {compArr.map((el, index) => {
        const Component = compObj[el]; // 문자열을 컴포넌트로 매핑
        return (
          <Component
            key={index}
            top={`${(index % 3) * 430 + 50}px`}
            left={`${index * 160 + 100}px`}
            delay={`${index * 1}s`}
          />
        );
      })}
    </>
  );
};

export default Background;

const upDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  50%{

    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// 공통 스타일 정의
const iconStyle = css`
  position: absolute;
  top: ${(props) => props.top || "0px"};
  left: ${(props) => props.left || "200px"};
  width: 100px;
  height: 100px;
  fill: rgba(255, 255, 255, 0.3);
  animation: ${upDown} 1s ease-in-out ${(props) => props.delay || "0s"};
`;

const HtmlIcon = styled(HtmlSvg)`
  ${iconStyle}
`;
const CssIcon = styled(CssSvg)`
  ${iconStyle}
`;
const JsIcon = styled(JsSvg)`
  ${iconStyle}
`;
const TsIcon = styled(TsSvg)`
  ${iconStyle}
  width: 120px;
  height: 120px;
`;
const ReactIcon = styled(ReactSvg)`
  ${iconStyle}
`;
const NextIcon = styled(NextSvg)`
  ${iconStyle}
`;
const StyledIcon = styled(StyledSvg)`
  ${iconStyle}
  width: 120px;
  height: 120px;
`;
const MuiIcon = styled(MuiSvg)`
  ${iconStyle}
`;
const FramerIcon = styled(FramerSvg)`
  ${iconStyle}
`;
const FigmaIcon = styled(FigmaSvg)`
  ${iconStyle}
`;
const VercelIcon = styled(VerceltSvg)`
  ${iconStyle}
`;
const FirebaseIcon = styled(FirebaseSvg)`
  ${iconStyle}
`;
