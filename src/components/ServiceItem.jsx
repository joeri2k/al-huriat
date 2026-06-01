import React from "react";

function ServiceItem(props) {
  return (
    <article className="serviceContainer">
      <div className="serviceItem">
        <div
          className="serviceImg"
          style={{ backgroundImage: `url(${props.image_url})` }}
          role="img"
          aria-label={props.title}
        ></div>
        <div className="serviceContent">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
      </div>
    </article>
  );
}

export default ServiceItem;
