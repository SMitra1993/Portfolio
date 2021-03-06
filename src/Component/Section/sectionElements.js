import styled from "styled-components";
import { motion } from "framer-motion";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    padding: ${({ lightbg }) =>
      lightbg ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #b25ce7;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 400;
  color: ${({ lightTxt }) => (lightTxt ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeadingImg = styled.h1`
  margin-bottom: 15px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 300;
  color: ${({ lightTxt }) => (lightTxt ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled(motion.img)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ImgWrapHead = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const ImgHead = styled(motion.img)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;
export const DownloadButton = styled.a`
  padding: 1rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: 2px solid #fff;
  margin-bottom: 1rem;
  background-color: ${({ darkText }) => (darkText ? "#b25ce7" : "#fff")};
  color: ${({ darkText }) => (darkText ? "#fff " : "#b25ce7 ")};

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.5rem;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ darkText }) =>
      darkText ? "#b25ce7 !important" : "#fff !important"};
    background: ${({ darkText }) => (darkText ? "#fff" : "#b25ce7")};
  }
`;
