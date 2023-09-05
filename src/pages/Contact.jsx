import { useMemo, React, useState } from "react";
import axios from "axios";
import TopImage from "../components/TopImage";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

function Contact() {
  const center = useMemo(() => ({ lat: 33.889404, lng: 35.525032 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  });
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
    <div>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Ready to get your next project started?"
        guide="Contact us"
        sub_phrase="From concept to finished product, your project is our priority."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
        }}
      >
        <div className="locationBox">
          <div style={{ width: "50%" }}>
            <h1 style={{ fontWeight: "600" }}>Our Location</h1>
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
                href="https://goo.gl/maps/2enSvsjFBUygmSeeA"
                style={{ color: "#bc274f" }}
              >
                here
              </a>{" "}
              for directions
            </p>
          </div>
          <div style={{ height: "100%", width: "45%" }}>
            {!isLoaded ? (
              <h1>Loading...</h1>
            ) : (
              <GoogleMap
                mapContainerClassName="map-container"
                center={center}
                zoom={10}
              >
                <MarkerF position={center} />
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40%",
          backgroundColor: "#87cefa",
        }}
      >
        <div
          style={{
            paddingTop: "90px",
            paddingBottom: "90px",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "85%" }}>
            <h1 style={{ fontWeight: "600" }}>Contact Us</h1>
            <p>
              Have a comment, a question, a concern or just want to share
              something interesting? We'd love to hear from you. Please submit
              any questions, suggestions or general feedback in the space below.
            </p>
          </div>
          <form onSubmit={handleSubmit} id="contactUs">
            <div className="contactContainer">
              <div className="formSection">
                <label
                  className="required"
                  style={{
                    color: "#6F7482",
                  }}
                >
                  Name
                </label>
                <input
                  name="Name"
                  style={{
                    marginBottom: "15px",
                  }}
                  placeholder="Name"
                  className="textField"
                  onChange={handleOnChange}
                  id="cName"
                  type="text"
                />
                <label
                  className="required"
                  style={{
                    color: "#6F7482",
                  }}
                >
                  Email
                </label>
                <input
                  onChange={handleOnChange}
                  style={{
                    marginBottom: "15px",
                  }}
                  id="cEmail"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="textField"
                />
                <label
                  className="required"
                  style={{
                    color: "#6F7482",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  style={{
                    marginBottom: "15px",
                  }}
                  name="Phone Number"
                  placeholder="Phone Number"
                  id="cNumber"
                  className="textField"
                />
              </div>
              <div className="formSection">
                <label
                  className="required"
                  style={{
                    color: "#6F7482",
                  }}
                >
                  Message
                </label>
                <textarea
                  onChange={handleOnChange}
                  style={{
                    marginBottom: "15px",
                  }}
                  id="message"
                  name="Message"
                  value={inputs.message}
                  placeholder="Type your message"
                  rows={5}
                  className="textField"
                />
              </div>
            </div>
            <button className="submitButton" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
