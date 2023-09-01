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
            className="imageStyle"
            style={{ backgroundImage: 'url("/assets/color.jpeg")' }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="imageStyle"
            style={{
              backgroundImage: 'url("/assets/lamp.jpeg")',
            }}
          ></div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
