import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

function Slider() {
  return (
    <div>
      <Splide
        aria-label="printing press"
        options={{ autoplay: true, pauseOnHover: false }}
      >
        <SplideSlide>
          <div
            className="imageStyle"
            style={{ backgroundImage: 'url("/assets/printing.webp")' }}
          ></div>
        </SplideSlide>
        <SplideSlide>
          <div
            className="imageStyle"
            style={{
              backgroundImage: 'url("/assets/lamp.webp")',
            }}
          ></div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;

// function Slider({ slides, height, width }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const sliderStyles = {
//     position: "relative",
//     height: height,
//     width: width,
//   };
//   const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };

//   const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//   };
//   const slideStyles = {
//     backgroundImage: `url(${slides[currentIndex].url})`,
//     height: "100%",
//     width: "100%",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//   };
//   const dotsContainerStyles = {
//     position: "absolute",
//     right: "50%",
//     bottom: "32px",
//     display: "flex",
//     justifyContent: "center",
//   };

//   const dotStyle = {
//     margin: "0 3px",
//     cursor: "pointer",
//     fontSize: "20px",
//   };

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   return (
//     <div style={sliderStyles}>
//       <div onClick={goToPrevious} style={leftArrowStyles}>
//         ❰
//       </div>
//       <div onClick={goToNext} style={rightArrowStyles}>
//         ❱
//       </div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//       <div style={slideStyles}></div>
//     </div>
//   );
// }
