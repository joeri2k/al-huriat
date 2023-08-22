import React from "react";

function TopImage(props) {
  return (
    <div
      className="imageStyle"
      style={{ backgroundImage: `url(${props.image_url})` }}
    >
      <div className="frontImageBox">
        <div style={{ display: "flex", marginBottom: "30px" }}>
          <div className="guideStyle"></div>
          <div className="guideTextBox">
            <p className="guideText">{props.guide}</p>
          </div>
        </div>
        <div className="catchingPhrase">{props.catching_phrase}</div>
        <div className="subPhrase">{props.sub_phrase}</div>
      </div>
    </div>
  );
}

export default TopImage;
