import React from "react";
import { Button } from "../Button/ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ImgWrapHead,
  ImgHead,
  HeadingImg,
} from "./sectionElements";

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightTxt,
  headline,
  darkText,
  describtion,
  buttonLabel,
  img,
  id,
  alt,
  dark2,
  dark,
  primary,
  imageHeading,
  describtion2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine}</TopLine>
                {imageHeading ? (
                  <>
                    <ImgWrapHead>
                      <ImgHead src={imageHeading} alt={alt} />
                      <HeadingImg lightTxt={lightTxt}> {headline}</HeadingImg>
                    </ImgWrapHead>
                    <Subtitle darkText={darkText}>{describtion}</Subtitle>
                    <Subtitle darkText={darkText}>{describtion2}</Subtitle>
                  </>
                ) : (
                  <>
                    <Heading lightTxt={lightTxt}> {headline}</Heading>
                    <Subtitle darkText={darkText}>{describtion}</Subtitle>
                  </>
                )}

                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
