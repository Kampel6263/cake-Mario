import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
// import {  } from "yup";
import emailjs from "emailjs-com";
import classes from "./contact-us.module.scss";
import * as Yup from "yup";

type InitialValuesType = {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const form = useRef<any>();
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("Це поле є обовязковим"),
    message: Yup.string(),
    user_phone: Yup.string().required("Це поле є обовязковим"),
    user_email: Yup.string()
      .email("Invalid email")
      .required("Це поле є обовязковим"),
  });
  const initialValues: InitialValuesType | string = {
    user_name: "",
    user_email: "",
    message: "",
    user_phone: "",
  };

  const sendEmail = (e: any) => {
    setDisabledButton(true);
    emailjs
      .sendForm(
        "service_zly4wts",
        "template_sei5ewp",
        form.current,
        "kBXrY8jk7ejVTlUl3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setDisabledButton(false);
        }
      );
  };
  console.log();
  return (
    <div className={classes.contactUs}>
      <div className={classes.container}>
        <h2>Contact us</h2>

        {isSubmitted ? (
          <div>Thank you for your list!</div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ errors }) => (
              <Form ref={form}>
                <div>
                  <label htmlFor="user_name">Name*</label>
                  <Field name={"user_name"}></Field>
                  <div className={classes.errorMessage}>
                    <ErrorMessage name="user_name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="user_email">Email*</label>
                  <Field type="email" name={"user_email"}></Field>
                  <div className={classes.errorMessage}>
                    <ErrorMessage name="user_email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Phone*</label>
                  <Field name={"user_phone"}></Field>
                  <div className={classes.errorMessage}>
                    <ErrorMessage name="user_phone" />
                  </div>
                </div>
                <div className={classes.textarea}>
                  <label htmlFor="massage">Message</label>
                  <Field as={"textArea"} name={"message"}></Field>
                  <div className={classes.errorMessage}>
                    <ErrorMessage name="message" />
                  </div>
                </div>

                <button disabled={disabledButton} type="submit">
                  Sent
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
