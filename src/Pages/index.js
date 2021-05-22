import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import MainSection from "../Component/MainSection";
import InfoSection from "../Component/Section";
import { homeObjOne, homeObjTwo } from "../Component/Section/Data";
import Services from "../Component/Services";
import Footer from "../Component/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <MainSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
