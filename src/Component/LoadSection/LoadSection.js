import React from "react";
import "./LoadSection.css";
import img from "../../Assests/Images/profile.svg";
import { motion } from "framer-motion";

class LoadSection extends React.Component {
  constructor() {
    super();
    this.state = { dot: "." };
  }
  changeDot = () => {
    let dot = this.state.dot.split("").length === 3 ? "" : this.state.dot + ".";
    return this.setState({ dot: dot });
  };
  componentDidMount() {
    this.intervalDot = setInterval(() => this.changeDot(), 300);
  }
  componentWillUnmount() {
    clearInterval(this.intervalDot);
  }

  render() {
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.4,
        },
      },
    };
    return (
      <div className=" bg-back">
        <motion.div
          variants={container}
          initial="hidden"
          transition={{ duration: 1 }}
          animate="visible"
          className="container "
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            className="box-model"
          >
            <motion.img
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
              whileHover={{ rotate: -90 }}
              className="img-fluid img-height"
              src={img}
              alt="thankyou"
            ></motion.img>
            <motion.h3 className="loading-text" whileHover={{ rotate: -90 }}>
              Loading{"\u00A0"} {this.state.dot}
            </motion.h3>
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

export default LoadSection;
