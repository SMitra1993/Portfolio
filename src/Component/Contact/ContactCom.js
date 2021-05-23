import React from "react";
import "./ContactCom.css";
import { Link } from "react-router-dom";
const ContactCom = () => {
  return (
    <div>
      <section id="contact">
        <div className="container display-container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h3 className="section-heading ">Hello Stranger</h3>
              <h1 className="section-subheading text-muted">
                Thanks for taking the time to reach out. How can I help you
                today?
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Your Name *"
                        required="required"
                        data-validation-required-message="Please enter your name."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Your Email *"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Your Phone *"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control message-block"
                        id="message"
                        placeholder="Your Feedback is important"
                        required="required"
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <Link
                      to="/thankyou"
                      id="sendMessageButton"
                      className="btn text-uppercase contact-button"
                      type="submit"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCom;
