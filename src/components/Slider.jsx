import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

function Slider() {
  return (
    <div>
      <Splide
        aria-label="printing press"
        options={{ autoplay: true, pauseOnHover: false, type: "loop" }}
      >
        <SplideSlide>
          <div
            className="sliderImage"
            style={{ backgroundImage: 'url("/assets/color.jpeg")' }}
            role="img"
            aria-label="Color printing samples"
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="sliderImage"
            style={{ backgroundImage: 'url("/assets/lamp.jpeg")' }}
            role="img"
            aria-label="Printing press workshop"
          ></div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
