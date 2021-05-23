import React, { useState, lazy, Suspense } from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import { homeObjOne, homeObjTwo } from "../Component/Section/Data";
import { motion } from "framer-motion";
import Loader from "./loader";

const MainSection = lazy(() => import("../Component/MainSection"));
const InfoSection = lazy(() => import("../Component/Section"));
const Services = lazy(() => import("../Component/Services"));
const Footer = lazy(() => import("../Component/Footer"));
const Project = lazy(() => import("../Component/Projects"));

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
    <Suspense fallback={<Loader />}>
      <motion.div
        key="2"
        initial="out"
        animate="in"
        exit="out"
        variants={aminationOne}
      >
        <Sidebar isOpen={isOpen} toggle={toggle} onContact={true} />
        <Navbar isOpen={isOpen} toggle={toggle} onContact={true} />
        <MainSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Services />
        <Project />
        <Footer />
      </motion.div>
    </Suspense>
  );
};

export default Home;
