import React, { useState, useEffect, useContext, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from "react-slick";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fal, far, fas, fab);

const ProductDetail = () => {

  /****  useState Hook ****/
  const [count, setCount] = useState(0);
  const [didMount, setMount] = useState(false);
  

  /****  useEffect Hook ****/
  useEffect(() => {
    if(didMount === false){
      // Treat as componentDidMount
      console.log('We have "Mounted"');
      setMount(true);
    }else{
      // Treat as componentDidUpdate
      console.log("We just Updated");
    }
  });

  const Carousel=()=>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    let sliderImgs = [];

    for(let i= 0; i < 5; i++){
      sliderImgs.push(
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07f7a6bb-2d35-4630-93fc-be249af22b3e/ddzi6zg-3b0b2de3-587e-45ec-b764-4880cb1216b4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDdmN2E2YmItMmQzNS00NjMwLTkzZmMtYmUyNDlhZjIyYjNlXC9kZHppNnpnLTNiMGIyZGUzLTU4N2UtNDVlYy1iNzY0LTQ4ODBjYjEyMTZiNC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.PdjSGg20iKwW8dX2WTfYE8Q3cLPiJ1hADkzMOxtI2nc" />
        </div>
      )
    }

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {sliderImgs}
        </Slider>
      </div>
    );
  }

  const Information=(props)=>{
    return  <div className={props.className}>
          <h2 className="mt-5 mb-5">Product Information</h2>
          <p>
            Product Code:<br/>
            Lorem Ipsum
          </p>
          <a href="#" className="detail-read-more">
            Read more
            <FontAwesomeIcon className="float-right" icon={["fas", "chevron-right"]} />
          </a>
          <h2 className="mt-5 mb-5">Product Specification</h2>
          <div className="details-spec">
            Spec 
            <span className="float-right">soemthing</span>
          </div>
        </div>
  }
  //  Our "HTML"
  return (
    <div>
      <h1>Lorem</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 prod-det-left-col">
            <Carousel/>
            <Information className="d-none d-lg-block" />
          </div>
          <div className="col-12 col-lg-5 prod-det-right-col">
            <div className="details-price">
              £123
            </div>
            <p className="text-red">Lorem</p>
            <p className="text-green">Lorem</p>
            <Information className="d-block d-lg-none mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
