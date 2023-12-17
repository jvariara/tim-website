import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_USER
      )
      .then(
        (result) => {
          alert("Thank you for the email! I will get back to you soon.");
        },
        (error) => {
          alert(
            "It seems like there was an error. You can email me directly at mothmedina@gmail.com"
          );
        }
      );
  };

  return (
    <section id="contact">
      <div className="py-[80px] w-full max-w-[1250px] m-auto px-4 xs:px-6">
        <div className="flex flex-col justify-center items-center">
          <h6 className="text-[#241f1e] font-semibold text-4xl items-center">
            Contact Me
          </h6>
        </div>
        <form ref={form} id="contact__form" onSubmit={sendEmail}>
          <div className="form__item">
            <label className="form__item--label">Name</label>
            <input type="text" name="user_name" className="input"></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input type="email" name="user_email" className="input"></input>
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea
              type="message"
              name="message"
              className="input"
            ></textarea>
          </div>
          <button id="contact__submit" className="form__submit">
            Send it my way!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
