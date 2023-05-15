import React, { useRef, useState, useEffect } from "react";

import emailjs from "@emailjs/browser";

import "./ContactMe.css";

import { contactDetails } from "../../data/contacts";

const ContactMe = () => {
  const form = useRef();
  const [inputValues, setInputValues] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const isAnyValueEmpty = Object.values(inputValues).some(value => value === "");
    const sendButton = form.current.querySelector(".hire-btn");
    sendButton.disabled = isAnyValueEmpty;
  }, [inputValues]);

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          setInputValues({
            user_name: "",
            user_email: "",
            subject: "",
            message: ""
          });
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="reachme-container">
      <div className="reachme-title2">
        <h2>I Want To Hear From You</h2>
        <h3>Contact Me</h3>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="reachme-title">
            <div className="row">
              {contactDetails &&
                contactDetails.map((details) => (
                  <div className="contact-info" key={details.id}>
                    <div className="contact-details">
                      <i className={details.icon}></i>
                      <div className="contact-mi">
                        <h4 className="icon-name">{details.contact_name}:</h4>
                        <p className="d-name">{details.contact_info}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 email-me container">
          <form
            action=""
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="row">
              <div className="col-md-12 mb-3 hire-me-title"></div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Enter Your Name"
                  value={inputValues.user_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Enter Your Email"
                  value={inputValues.user_email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter Subject"
                  value={inputValues.subject}
                  onChange={  handleInputChange}
                  />
                   </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Your Message"
                  value={inputValues.message}
                  onChange={handleInputChange}
                ></textarea>
                <button className="hire-btn" type="submit" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
