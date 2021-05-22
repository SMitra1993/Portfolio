import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw-1300px) / 2);

  // @media screen and (max-width: 768px) {
  //   grid-template-columns: 1fr;
  // }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1rem;
  padding-right: 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 1rem 0;
    font-size: 4rem;
    line-height: 1.1;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const Button = styled(motion.button)`
  padding: 1rem 1rem;
  font-size: 1rem;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;
export const Image1 = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 250px;
  top: 1px;
  left: 60%;

  @media screen and (max-width: 768px) {
    left: 23%;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 80%;
    max-height: 250px;
    left: 10px;
  }
`;
export const Image2 = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 250px;
  top: 225px;
  left: 60%;

  @media screen and (max-width: 968px) {
    left: 55%;
  }
  @media screen and (max-width: 768px) {
    left: 23%;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 80%;
    max-height: 250px;
    left: 10px;
  }
`;
export const Image3 = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 250px;
  top: 420px;
  left: 60%;

  @media screen and (max-width: 768px) {
    left: 23%;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 80%;
    max-height: 250px;
    left: 10px;
  }
`;
export const Image4 = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-height: 300px;
  max-width: 250px;
  top: 600px;
  left: 60%;

  @media screen and (max-width: 768px) {
    left: 23%;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 80%;
    max-height: 250px;
    left: 10px;
  }
`;
