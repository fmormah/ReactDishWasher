import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../components/Carousel.jsx';
import Specificafions from '../components/Specifications.jsx';

const ProductDetail = () => {

  const [didMount, setMount] = useState(false);
  const [payLoad, setPayLoad] = useState(void(0));
  const productDetailApi = "https://api.johnlewis.com/mobile-apps/api/v1/products/";
  const productID = /[^/]*$/.exec(location.href)[0];

  useEffect(() => {
    if (didMount === false) {
      getProductDetails();
      setMount(true);
    }
  });


  const getProductDetails = async () => {
    /*** Using CORS Proxy method to get data due to errors occured from a stright fetch (CORS policy: No 'Access-Control-Allow-Origin' header is present) ***/
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    
    const url = productDetailApi+productID; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
    .then(response => response.json())
    .then((contents) => {
      console.log(contents);
      setPayLoad(contents);
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }

  const AdditionalServices=()=>{
    let servicesArray=[];
    
    payLoad.additionalServices.optionalServices.map((obj,i)=>{
      servicesArray.push(
        <p key={i+"-op"} className="text-red m-0">{obj.title}</p>
      );
    });
    payLoad.additionalServices.includedServices.map((obj,i)=>{
      servicesArray.push(
        <p key={i+"-is"} className="text-green m-0">{obj}</p>
      );
    });
    return <div>{servicesArray}</div>;
  }

  if(payLoad === void(0)){
    return (
      <div>
        <h1></h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              Loading...
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <h1>{payLoad.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-7 prod-det-left-col">
              <Carousel media={payLoad.media} />
              <Specificafions payLoad={payLoad} className="d-none d-lg-block" />
            </div>
            <div className="col-12 col-lg-5 prod-det-right-col">
              <div className="details-price">
                £{payLoad.price.now}
              </div>
              <AdditionalServices/>
              <Specificafions payLoad={payLoad} className="d-block d-lg-none mt-5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
