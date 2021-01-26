import React, { useState, useEffect, useContext, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';
import Slider from "react-slick";

const Carousel = (props) => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let sliderImgs = [];

    props.media.images.urls.map((img,i)=>{
      sliderImgs.push(
        <div key={i}>
          <img key={i} alt={props.media.images.altText} src={img} />
        </div>
      )
    });

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImgs}
        </Slider>
      </div>
    );
};

export default Carousel;
