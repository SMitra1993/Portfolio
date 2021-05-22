import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import MainSection from "../Component/MainSection";
import InfoSection from "../Component/Section";
import { homeObjOne, homeObjTwo } from "../Component/Section/Data";
import Services from "../Component/Services";
import Footer from "../Component/Footer";
import Project from "../Component/Projects";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} onContact={true} />
      <Navbar isOpen={isOpen} toggle={toggle} onContact={true} />
      <MainSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Project />
      <Footer />
    </>
  );
};

export default Home;
