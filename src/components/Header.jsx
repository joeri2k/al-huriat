import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerBox">
        <h1 className="logoName">Al Huriat Printing</h1>
        <div className="infoContainer">
          <div className="infoBox">
            <div className="infoCircle mr-15">
              <img className="infoIcon" src="/assets/email.svg"></img>
            </div>
            <div className="flex-col" style={{ justifyContent: "center" }}>
              <p className="infoText">Email</p>
              <p className="infoText">alhuriat@inco.com.lb</p>
            </div>
          </div>
          <div className="infoBox">
            <div className="infoCircle mr-15">
              <img className="infoIcon" src="/assets/phone.svg"></img>
            </div>
            <div className="flex-col" style={{ justifyContent: "center" }}>
              <p className="infoText">Call Us</p>
              <p className="infoText">(+961) 01 681 902</p>
              <p className="infoText">(+961) 70 195 857</p>
            </div>
          </div>
          <div className="infoBox">
            <div className="infoCircle mr-15">
              <img className="infoIcon" src="/assets/location.svg"></img>
            </div>
            <div className="flex-col" style={{ justifyContent: "center" }}>
              <p className="infoText">Location</p>
              <p className="infoText">New Rawda, facing</p>
              <p className="infoText">LaLipco station</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
