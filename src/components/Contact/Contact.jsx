import { NavLink } from "react-router-dom";

import "./Contact.scss";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function Contact() {
  return (
    <section className="contact">
      <div className="contact__container" id="sectionContact">
        <div className="contact__header">
          <div className="contact__title">Contact</div>
        </div>
        <div className="contact__card">
          <div className="contact__card-other">
            <div className="contact__card-find contact__card-find-email">
              <NavLink
                className="contact__card-link"
                to="mailto:jessicahellsten@gmail.com"
              >
                <Mail />
              </NavLink>
                <div className="contact__card-find-text">Email</div>
            </div>
            <div className="contact__card-find contact__card-find-linkedin">
              <NavLink
                className="contact__card-link"
                to="https://www.linkedin.com/in/jessicahellsten/"
              >
                <LinkedIn />
              </NavLink>
                <div className="contact__card-find-text">LinkedIn</div>
            </div>
            <div className="contact__card-find contact__card-find-github">
              <NavLink
                className="contact__card-link"
                to="https://github.com/hellsten"
              >
                <GitHub />
              </NavLink>
                <div className="contact__card-find-text">GitHub</div>
            </div>
          </div>
          <div className="contact__card-form">
            <label>Name</label>
            <input
              type="text"
              id="name"
              className="contact__card-name"
              placeholder="Your Name"
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              className="contact__card-email"
              placeholder="Your@email.com"
            />
            <label>Subject</label>
            <input
              type="text"
              id="subject"
              className="contact__card-subject"
              placeholder="Subject"
            />
            <label>Message</label>
            <textarea
              id="message"
              className="contact__card-message"
              placeholder="Your Message"
            ></textarea>
            <div className="contact__card-form-submit">Submit</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
