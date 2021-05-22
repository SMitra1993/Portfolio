import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import MainSection from "../Component/MainSection";
import InfoSection from "../Component/Section";
import { homeObjOne, homeObjTwo } from "../Component/Section/Data";
import Services from "../Component/Services";
import Footer from "../Component/Footer";
import Project from "../Component/Projects";
import { motion } from "framer-motion";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const aminationOne = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="out" animate="in" exit="out" variants={aminationOne}>
      <Sidebar isOpen={isOpen} toggle={toggle} onContact={true} />
      <Navbar isOpen={isOpen} toggle={toggle} onContact={true} />
      <MainSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Project />
      <Footer />
    </motion.div>
  );
};

export default Home;
