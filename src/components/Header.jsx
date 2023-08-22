import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerBox">
        <h1 className="logoName">Al-Huriat Printing</h1>
        <div className="infoBox">
          <div className="infoCircle mr-15">
            <img
              style={{ width: "30px", height: "22.5px" }}
              src="src/assets/email.svg"
            ></img>
          </div>
          <div className="flex-col" style={{ justifyContent: "center" }}>
            <p className="infoText">Email</p>
            <p className="infoText">alhuriat@inco.com.lb</p>
          </div>
        </div>
        <div className="infoBox">
          <div className="infoCircle mr-15">
            <img
              style={{ width: "40px", height: "28px" }}
              src="src/assets/phone.svg"
            ></img>
          </div>
          <div className="flex-col" style={{ justifyContent: "center" }}>
            <p className="infoText">Call Us</p>
            <p className="infoText">(+961) 01 320 440</p>
            <p className="infoText">(+961) 01 218 112</p>
          </div>
        </div>
        <div className="infoBox">
          <div className="infoCircle mr-15">
            <img
              style={{ width: "40px", height: "28px" }}
              src="src/assets/location.svg"
            ></img>
          </div>
          <div className="flex-col" style={{ justifyContent: "center" }}>
            <p className="infoText">Location</p>
            <p className="infoText">Mgr Massarra st, Ashrafieh,</p>
            <p className="infoText">Beirut, Lebanon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
