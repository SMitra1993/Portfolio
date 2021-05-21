import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  Videobg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainSectionElements";
import Video from "../../Assests/Videos/video.mp4";
import { Button } from "../Button/ButtonElement";

const MainSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <Videobg autoPlay loop muted src={Video} type="video/mp4"></Videobg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Heading</HeroH1>
        <HeroP>
          Hit the tab button and the lorem ipsum text gets automatically
          generated.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default MainSection;
