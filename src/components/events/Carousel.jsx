import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function EventCarousel({images}) {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    arrow: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings} style={{width: "48.5rem" , height: "28rem"}}>
        {images.map((item, index) => (
          <div key={index} style={{ opacity: '0.4', width: "48rem" , height: "24rem" }}>
            <img src={item.default}  alt={`Event ${index + 1}`} />
            &nbsp;&nbsp;
          </div>
        ))}
      </Slider>
      {/* <div style={{ textAlign: "center" }}>
        <button className="button" onClick={play}>
          Play
        </button>
        <button className="button" onClick={pause}>
          Pause
        </button>
      </div> */}
    </div>
  );
}
export default EventCarousel;
