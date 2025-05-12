import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

import contactImg from "../assets/img/email.png";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "dec1a109-0aa6-45c8-8b98-c095963800a3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setButtonText("Sent!");
      event.target.reset(); // optional: resets the form
    } else {
      setButtonText("Try Again");
    }

    setTimeout(() => setButtonText("Submit"), 3000); // resets button after 3s
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get in touch</h2>
                  <form onSubmit={onSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone No."
                        />
                      </Col>
                      <Col>
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message"
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
