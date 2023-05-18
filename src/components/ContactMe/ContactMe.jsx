import React, { useRef,useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import emailjs from "@emailjs/browser";

import "./ContactMe.css";

import { contactDetails } from "../../data/contacts";




const ContactMe = (e) => {

  const [isLoading,setIsLoading]=useState(false);
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  
  const sendEmail = (e) => {
    setIsLoading(true)
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
          setIsLoading(false)
          toast.success('Message Sent Successfully!',{
            className:'toast-title'
          });
          console.log(result.text);
        },
        (error) => {
          setIsLoading(false)
          console.log(error.text);
          toast.error('Failed to Send Message',{
            className:'toast-title'
          });
        }
      );
    e.target.reset();
  };

  const handleInputChange = () => {
    const inputs = form.current.querySelectorAll('input, textarea');
    let isAllFieldsValid = true;

    inputs.forEach((input) => {
      if (!input.value) {
        isAllFieldsValid = false;
        return;
      }
    });

    setIsFormValid(isAllFieldsValid);
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
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  name="user_email"
                  id=""
                  placeholder="Enter Your Email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter Subject"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  placeholder="Your Message"
                  onChange={handleInputChange}
                ></textarea>
                <button className="hire-btn" type="submit" disabled={!isFormValid}>
                  {isLoading ? "Sending..":"Send message"}
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
