import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  
  const form = useRef(); 
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_leda80s', 'template_et9ejg2', form.current, '4jDUKf6UuspYe7Rve')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!"); // Optional: Toast notification for success
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message failed to send."); // Optional: Toast notification for failure
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                        <BsGithub color="black" size={30} className="ms-2" />
                        <BsFacebook color="blue" size={30} className="ms-2" />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input
                        type="text"
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Email</label>
                      <input
                        type="email"
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Message</label>
                      <textarea
                        name="message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                      <input type="submit" value="Send" />
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
