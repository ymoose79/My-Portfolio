import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_ACybij4wHklMm2Nz0Vbnj";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        body: data.body,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("form sent successfully!");
      })
      .catch((err) => console.error(`something went wrong ${err}`));
  };

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please fill out form and I'll contact you as soon as possible</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* name input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register("name", { required: true })}
                />
                {/* <span className="error-message"> {errors.name && errors.name.message} </span> */}

                {errors.name && (
                  <span className="error-message">Name is required</span>
                )}

                <div className="line"></div>
              </div>
              {/* phone input*/}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="error-message">
                    A phone number is required
                  </span>
                )}

                <div className="line"></div>
              </div>
              {/* email input */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email Address"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="error-message">This is required</span>
                )}

                <div className="line"></div>
              </div>
              {/* subject input */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <span className="error-message">This is required</span>
                )}

                <div className="line"></div>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                {/* description */}
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Body"
                  name="body"
                  {...register("body", { required: true })}
                ></textarea>
                {errors.body && (
                  <span className="error-message">This is required</span>
                )}

                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
