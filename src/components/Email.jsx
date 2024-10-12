import React from "react";
import emailjs from "@emailjs/browser";
import "./email.scss";
import { useRef } from "react";
import { useState } from "react";

const Email = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [errors, setErrors] = useState({});
  const form = useRef(null);

  const validations = (data) => {
    let isValid = true;

    const errors = {
      name: null,
      email: null,
      message: null,
    };
    const name = data.from_name.value;
    const email = data.from_email.value;
    const message = data.message.value;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }
    if (name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    // empty fields
    if (!name) {
      errors.name = "this field can not be empty";
    }
    if (!email) {
      errors.email = "this field can not be empty";
    }
    if (!message) {
      errors.message = "this field can not be empty";
    }

    // errors has any non-null property? isValid =false.
    Object.keys(errors).forEach((key) => errors[key] && (isValid = false));

    return { isValid, errors };
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { isValid, errors } = validations(form.current.elements);
    if (!isValid) return setErrors(errors);
    setErrors({});

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <form className="email-form" ref={form} onSubmit={sendEmail}>
      <div className="top-form">
        <div className="name">
          <label>Name: </label>
          <input type="text" name="from_name" />
          <span>{errors.name}</span>
        </div>
        <div className="email">
          <label>Email: </label>
          <input type="email" name="from_email" />
          <span>{errors.email}</span>
        </div>
      </div>
      <div className="bottom-form">
        <label>Message: </label>
        <textarea name="message" spellCheck="false" />
        <span>{errors.message}</span>
      </div>
      <input type="submit" value="submit" />
    </form>
  );
};

export default Email;
