import React from "react";
import "./confromation.css";
import img from "../../Assests/Images/thankyou.svg";
import { Link } from "react-router-dom";

const Conformation = () => {
  return (
    <div className="background">
      <div className="container">
        <img className="img-fluid" src={img} alt="thankyou"></img>
        <div className="message"> Message received. Thanks!</div>
        <div className="message text-muted messge-small">
          I'll be in touch with you shortly.
        </div>
        <div class="align-button">
          <Link className="back-button" to="/">
            {" "}
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Conformation;
