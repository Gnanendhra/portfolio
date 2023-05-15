import React, { useRef } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import emailjs from "@emailjs/browser";

import "./ContactMe.css";

import { contactDetails } from "../../data/contacts";

const ContactMe = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Sent Successfully")
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to Send Message")
        }
      );
    e.target.reset();
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
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter Subject"
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Your Message"
                ></textarea>
                <button className="hire-btn" type="submit">
                  Send Message
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
