import React from "react";

function ServiceItem(props) {
  return (
    <div className="serviceContainer">
      <div className="serviceItem">
        <div
          className="serviceImg"
          style={{ backgroundImage: `url(${props.image_url})` }}
        ></div>
        <div className="seperator"></div>
        <div className="serviceContent">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
          <button>test</button>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
