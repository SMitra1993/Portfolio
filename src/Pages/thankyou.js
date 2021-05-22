import React from "react";
import Conformation from "../Component/Conformation";
import Footer from "../Component/Footer";
import { motion } from "framer-motion";

const Thankyou = () => {
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
      <Conformation></Conformation>
      <Footer />
    </motion.div>
  );
};

export default Thankyou;
