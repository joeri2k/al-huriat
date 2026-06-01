import React from "react";

function TopImage(props) {
  return (
    <section
      className="imageStyle"
      style={{ backgroundImage: `url(${props.image_url})` }}
      role="img"
      aria-label={props.guide}
    >
      <div className="frontImageBox">
        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
          <div className="guideStyle" aria-hidden="true"></div>
          <div className="guideTextBox">
            <p className="guideText">{props.guide}</p>
          </div>
        </div>
        <h1 className="catchingPhrase">{props.catching_phrase}</h1>
        <p className="subPhrase">{props.sub_phrase}</p>
      </div>
    </section>
  );
}

export default TopImage;
