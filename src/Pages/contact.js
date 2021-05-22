import React, { useState } from "react";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import ContactCom from "../Component/Contact/ContactCom";
import { motion } from "framer-motion";

const Contact = () => {
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <ContactCom></ContactCom>
      <Footer />
    </motion.div>
  );
};

export default Contact;
