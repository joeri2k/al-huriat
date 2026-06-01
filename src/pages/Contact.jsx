import { React, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import TopImage from "../components/TopImage";

function Contact() {
  const [inputs, setInputs] = useState({ message: "" });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("contactUs");
    const name = document.getElementById("cName").value;
    const email = document.getElementById("cEmail").value;
    const number = document.getElementById("cNumber").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !number || message === "") {
      alert("Please fill out all required fields.");
      return; // Stop further execution
    } else {
      axios({
        method: "POST",
        url: "https://formbold.com/s/obqE8",
        data: inputs,
      })
        .then((r) => {
          alert("Thank you, your form was submitted.");
          setInputs(() => ({ message: "" }));
          form.reset();
        })
        .catch((r) => {
          console.log("error");
          alert("An error occurred while submitting the form.");
        });
    }
  };

  return (
    <main>
      <Helmet>
        <title>Contact Us — Al Huriat Printing Press, Beirut</title>
        <meta
          name="description"
          content="Get in touch with Al Huriat Printing Press in New Rawda, Beirut. Call +961 1 681 902 or +961 70 195 857, or use our contact form."
        />
      </Helmet>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Ready to get your next project started?"
        guide="Contact us"
        sub_phrase="From concept to finished product, your project is our priority."
      />
      <section className="locationSection" aria-labelledby="location-heading">
        <div className="locationBox">
          <div style={{ width: "100%" }}>
            <h2 id="location-heading">Our Location</h2>
            <p>
              However you'd like to work with us, we're ready. This site
              includes all the tools you need if you prefer to stay in your
              office or home, but if you'd rather visit us in person, we'd love
              to see you. Our address and contact information are located on
              every page of our site.
            </p>
            <p>
              Click{" "}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=33.877885,35.553651"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for directions
            </p>
          </div>
        </div>
      </section>
      <section className="contactFormSection" aria-labelledby="contact-heading">
        <div className="contactInner">
          <div className="contactIntro">
            <h2 id="contact-heading">Contact Us</h2>
            <p>
              Have a comment, a question, a concern or just want to share
              something interesting? We'd love to hear from you. Please submit
              any questions, suggestions or general feedback in the space below.
            </p>
          </div>
          <form onSubmit={handleSubmit} id="contactUs">
            <div className="contactContainer">
              <div className="formSection">
                <label className="required" htmlFor="cName">Name</label>
                <input
                  name="Name"
                  placeholder="Name"
                  className="textField"
                  onChange={handleOnChange}
                  id="cName"
                  type="text"
                />
                <label className="required" htmlFor="cEmail">Email</label>
                <input
                  onChange={handleOnChange}
                  id="cEmail"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="textField"
                />
                <label className="required" htmlFor="cNumber">Phone Number</label>
                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  id="cNumber"
                  className="textField"
                />
              </div>
              <div className="formSection">
                <label className="required" htmlFor="message">Message</label>
                <textarea
                  onChange={handleOnChange}
                  id="message"
                  name="Message"
                  value={inputs.message}
                  placeholder="Type your message"
                  rows={6}
                  className="textField"
                />
              </div>
            </div>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
