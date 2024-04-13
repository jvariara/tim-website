import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});

  const validateEmail = (email) => {
    // Regular expression for validating email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate inputs
    const nameInput = form.current.user_name.value.trim();
    const emailInput = form.current.user_email.value.trim();
    const messageInput = form.current.message.value.trim();
    const errors = {};

    if (!nameInput) {
      errors.name = "Name is required";
    }

    if (!emailInput) {
      errors.email = "Email is required";
    } else if (!validateEmail(emailInput)) {
      errors.email = "Invalid email address";
    }

    if (!messageInput) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Clear previous errors
    setFormErrors({});

    // Send email using emailjs
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
          form.current.reset()
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
            <input
              type="text"
              name="user_name"
              className="input"
              required
            />
            {formErrors.name && <span className="text-red-700 font-semibold">{formErrors.name}</span>}
          </div>
          <div className="form__item">
            <label className="form__item--label">Email</label>
            <input
              type="email"
              name="user_email"
              className="input"
              required
            />
            {formErrors.email && <span className="text-red-700 font-semibold">{formErrors.email}</span>}
          </div>
          <div className="form__item">
            <label className="form__item--label">Message</label>
            <textarea
              type="message"
              name="message"
              required
              className="input"
            />
            {formErrors.message && <span className="text-red-700 font-semibold">{formErrors.message}</span>}
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
