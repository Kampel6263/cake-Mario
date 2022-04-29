import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
// import {  } from "yup";
import emailjs from "emailjs-com";
import classes from "./contact-us.module.scss";
import * as Yup from "yup";
import Spiner from "../../assets/animation2/Ripple-1s-220px.svg";
import classNames from "classnames";
import Button from "../../components/button/button.component";
import Loader from "../../components/loader/loader.component";

type InitialValuesType = {
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
};

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

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
    setSubmitting(true);
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
          setSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };
  return (
    <div className={classes.contactUs}>
      <div className={classes.container}>
        <h2>Contact us</h2>
        <div className={classes.content}>
          <div
            className={classNames(
              classes.contactForm,
              submitting && classes.loading
            )}
          >
            {submitting && (
              <div className={classes.preloader}>
                <Loader />
              </div>
            )}
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
                      <Field name={"user_name"} placeholder="Your name"></Field>
                      <div className={classes.errorMessage}>
                        <ErrorMessage name="user_name" />
                      </div>
                    </div>
                    <div>
                      <Field
                        type="email"
                        name={"user_email"}
                        placeholder="Your email"
                      ></Field>
                      <div className={classes.errorMessage}>
                        <ErrorMessage name="user_email" />
                      </div>
                    </div>
                    <div>
                      <Field
                        name={"user_phone"}
                        type="phone"
                        placeholder="Phone number"
                      ></Field>
                      <div className={classes.errorMessage}>
                        <ErrorMessage name="user_phone" />
                      </div>
                    </div>
                    <div className={classes.textarea}>
                      <Field
                        as={"textarea"}
                        name={"message"}
                        placeholder="Message"
                      ></Field>
                      <div className={classes.errorMessage}>
                        <ErrorMessage name="message" />
                      </div>
                    </div>

                    <Button name="Sent" type="primary" />
                  </Form>
                )}
              </Formik>
            )}
          </div>
          <div>img</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
