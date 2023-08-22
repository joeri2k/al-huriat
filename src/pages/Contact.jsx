import { useMemo, React, useState } from "react";
import axios from "axios";
import TopImage from "../components/TopImage";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

function Contact() {
  const center = useMemo(() => ({ lat: 33.88863, lng: 35.49548 }), []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY,
  });
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: "",
    test: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://app.formbold.com/s/9EPVK",
      data: inputs,
    })
      .then((r) => {
        alert("Thank you, your form was submitted.");
        setInputs(() => ({
          email: "",
          name: "",
          message: "",
          test: "",
        }));
      })
      .catch((r) => {
        console.log("error");
        alert("An error occurred while submitting the form.");
      });
  };

  return (
    <div>
      <TopImage
        image_url="public/assets/printing.webp"
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
        <div
          style={{
            paddingTop: "90px",
            paddingBottom: "90px",
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "600px" }}>
            <h1 style={{ fontWeight: "600" }}>Our Location</h1>
            <p>
              However you'd like to work with us, we're ready. This site
              includes all the tools you need if you prefer to stay in your
              office or home, but if you'd rather visit us in person, we'd love
              to see you. Our address and contact information are located on
              every page of our site.
            </p>
            <p>enter location link for direction</p>
          </div>
          <div style={{ height: "300px", width: "550px" }}>
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
          <div style={{ width: "600px" }}>
            <h1 style={{ fontWeight: "600" }}>Contact Us</h1>
            <p>
              Have a comment, a question, a concern or just want to share
              something interesting? We'd love to hear from you. Please submit
              any questions, suggestions or general feedback in the space below.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            id="contactUs"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
              justifyContent: "space-between",
            }}
          >
            <div className="formSection">
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                Name
                <input
                  name="name"
                  placeholder="Name"
                  className="textField"
                  onChange={handleOnChange}
                  value={inputs.name}
                  id="name"
                  type="text"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                test
                <input
                  name="test"
                  placeholder="test"
                  className="textField"
                  onChange={handleOnChange}
                  value={inputs.test}
                  id="test"
                  type="text"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                Email
                <input
                  onChange={handleOnChange}
                  value={inputs.email}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="textField"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                Phone Number
                <input
                  onChange={handleOnChange}
                  value={inputs.phone}
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="textField"
                />
              </label>
              <button className="submitButton" type="submit" value="Submit">
                Submit
              </button>
            </div>
            <div className="formSection">
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                Message
                <textarea
                  onChange={handleOnChange}
                  value={inputs.message}
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  rows={5}
                  className="textField"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
