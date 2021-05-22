import React, { useState } from "react";
import Footer from "../Component/Footer";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import ContactCom from "../Component/Contact/ContactCom";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <ContactCom></ContactCom>
      <Footer />
    </>
  );
};

export default Contact;
