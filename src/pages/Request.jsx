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
                  name="name"
                  placeholder="Name"
                  className="textField"
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
                Email
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
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
                Phone Number
                <input
                  type="text"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="textField"
                />
              </label>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                Products
                <select name="name" placeholder="Name" className="textField">
                  <option value="b-card">Business Card</option>
                  <option value="brochure">Brochure</option>
                  <option value="flyer">Flyer</option>
                  <option value="p-bags">Paper Bags</option>
                  <option value="folders">Folders</option>
                  <option value="envelops">Envelops</option>
                  <option value="booklet">Booklet</option>
                  <option value="book">Book</option>
                  <option value="stickers">Stickers</option>
                  <option value="vinil">Vinil</option>
                  <option value="b-forms">Business Forms</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Requests;
