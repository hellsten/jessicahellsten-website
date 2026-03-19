import { NavLink } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.scss";

import GitHub from "./../../assets/icons/github.svg?react";
import LinkedIn from "./../../assets/icons/linkedin.svg?react";
import Mail from "./../../assets/icons/mail.svg?react";

function Contact() {
  // from Formspree.io
  const [state, handleSubmit] = useForm("xvzwllpo");
  if (state.succeeded) {
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
          <form onSubmit={handleSubmit} className="contact__card-form">
            <div className="contact__card-sent">Message Sent</div>
          </form>
        </div>
      </div>
    </section>
    );
  }

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
                aria-label="contact me by email"
                to="mailto:jessicahellsten@gmail.com"
              >
                <Mail />
              </NavLink>
              <div className="contact__card-find-text">Email</div>
            </div>
            <div className="contact__card-find contact__card-find-linkedin">
              <NavLink
                className="contact__card-link"
                aria-label="visit my linkedin profile"
                to="https://www.linkedin.com/in/jessicahellsten/"
              >
                <LinkedIn />
              </NavLink>
              <div className="contact__card-find-text">LinkedIn</div>
            </div>
            <div className="contact__card-find contact__card-find-github">
              <NavLink
                className="contact__card-link"
                aria-label="visit my github profile"
                to="https://github.com/hellsten"
              >
                <GitHub />
              </NavLink>
              <div className="contact__card-find-text">GitHub</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact__card-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact__card-name"
              placeholder="Your Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact__card-email"
              placeholder="Your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact__card-subject"
              placeholder="Subject"
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="contact__card-message"
              placeholder="Your Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" className="contact__card-form-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
