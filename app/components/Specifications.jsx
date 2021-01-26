import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
import ReactDOM from 'react-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Slider from "react-slick";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fal, far, fas, fab);

const Specifications = (props) => {

  const SpecList=()=>{
    let list = [];
    props.payLoad.details.features[0].attributes.map((feat,i)=>{
      list.push(
        <div key={i} className="details-spec">
          {feat.name}
          <span key={i} className="float-right">{feat.value}</span>
        </div>
      );
    });
    return list
  }

  return (
    <div className={props.className}>
      <h2 className="mt-5 mb-3">Product Information</h2>
      <p>
        Product Code: {props.payLoad.code}
      </p>
      { ReactHtmlParser(props.payLoad.details.productInformation) }
      <a href="#" className="detail-read-more">
        Read more
        <FontAwesomeIcon className="float-right" icon={["fas", "chevron-right"]} />
      </a>
      <h2 className="mt-5 mb-5">Product Specification</h2>
      <SpecList/>
    </div>
  );

};

export default Specifications;
