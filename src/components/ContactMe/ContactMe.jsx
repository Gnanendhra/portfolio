import React, { useRef, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import "./ContactMe.css";

import { contactDetails } from "../../data/contacts";

const ContactMe = (e) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (name && isValidEmail(email) && subject && message) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [name, email, subject, message]);

  const resetData = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsFormSubmitting(false);
    setDisableSubmit(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          resetData();
          setIsFormSubmitting(false);
          toast.success("Email sent successfully!");
        },
        (error) => {
          toast.error("Error sending email, please try again later!");
          setIsFormSubmitting(false);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="reachme-container">
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
                  <div className="contact-info  " key={details.id}>
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
              <div className="col-md-6 ">
                <input
                  type="text"
                  name="user_name"
                  id=""
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                  className={`hire-btn ${disableSubmit && "disabled-btn"} ${
                    isFormSubmitting && "form-submit"
                  }`}
                  type="submit"
                  disabled={isFormSubmitting ||disableSubmit}
                >
                  {isFormSubmitting && (
                    <ColorRing
                      visible={true}
                      height="40"
                      width="40"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#17c0e9",
                        "#c96ddd",
                        "#f45162",
                        "#111e88",
                        "#2196f3",
                      ]}
                    />
                  )}
                  {!isFormSubmitting && "Send Message"}
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
