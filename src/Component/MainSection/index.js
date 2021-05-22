import React from "react";
import {
  Section,
  Container,
  Button,
  ColumnLeft,
  ColumnRight,
  Image1,
  Image2,
  Image3,
  Image4,
} from "./MainSectionElements";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import Code1 from "../../Assests/Images/Code-1.svg";
import Code2 from "../../Assests/Images/Code-2.svg";
import Code3 from "../../Assests/Images/Code-3.svg";
import Code4 from "../../Assests/Images/Code-4.svg";

const MainSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section id="home">
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello!!!
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            transition={{ duration: 1 }}
            animate="visible"
          >
            Welcome to my website
          </motion.p>
          <Link to="about">
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "#b25ce7",
                color: "#000",
                border: "none",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              Scroll Below
            </Button>
          </Link>
        </ColumnLeft>
        <ColumnRight>
          <Image1
            src={Code1}
            alt="code1"
            whileTap={{
              scale: 0.8,
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image2
            src={Code2}
            alt="code2"
            whileTap={{
              scale: 0.6,
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image3
            src={Code3}
            alt="code3"
            whileTap={{
              scale: 0.6,
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image4
            src={Code4}
            alt="code4"
            whileTap={{
              scale: 0.7,
            }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default MainSection;
