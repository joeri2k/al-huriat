import React from "react";
import TopImage from "../components/TopImage";

function Requests() {
  const urlText =
    "mailto:joerizk2@hotmail.com?subject=SendMail&body=Description i want a business card";
  return (
    <div>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Ready to get your next project started?"
        guide="Requests"
        sub_phrase="From concept to finished product, your project is our priority."
      />
      <div className="formContainer">
        <div className="formBox">
          <h1 style={{ fontWeight: "600" }}>Requests</h1>

          <form
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
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="textField"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="textField"
                />
              </label>
              <input
                className="submitButton"
                type="submit"
                value="Submit"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(urlText, "_self");
                }}
              />
            </div>
            <div className="formSection">
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="textField"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
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

export default Requests;
