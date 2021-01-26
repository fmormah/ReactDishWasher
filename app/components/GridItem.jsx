import React, { useState, useEffect, useContext, useReducer, useRef} from 'react';
import ReactDOM from 'react-dom';

const GridItem = (props) => {

  const [didMount, setMount] = useState(false);
  const [payLoad, setPayLoad] = useState(void(0));
  
  useEffect(() => {
    if(didMount === false){
      setMount(true);
      getProducts();
    }
  });

  const getProducts = async () => {
    /*** Using CORS Proxy method to get data due to errors occured from a stright fetch (CORS policy: No 'Access-Control-Allow-Origin' header is present) ***/
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = props.productsApi; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
    .then(response => response.json())
    .then((contents) => {
      console.log(contents);
      setPayLoad(contents)
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  }

  const ItemGrid=()=>{
    let itemsArray = [];
    payLoad.products.map((item,i)=>{
      let classString = "borders";
      if(i % 2 === 0 ){
        classString = "no-borders"
      }
      itemsArray.push(
        <a key={i} href={`/product/${item.productId}`} className={`col-12 col-sm-3 pt-3 grid-item ${classString}`}>
          <div>
            <div className="grid-img-container" key={i}>
                <img src={item.image} />
            </div>
            <div className="grid-info-details">
              <div className="grid-info-line">
                {item.title}  
              </div>
              <div className="grid-info-line">
                <b>£{item.price.now}</b>
              </div>
            </div>
          </div>
        </a>
      );
    });
    return itemsArray;
  }
 
 
  if(payLoad === void(0)){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            Loading...
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="container-fluid">
        <div className="row">
          <h1>{`${payLoad.categoryTitle} (${payLoad.products.length})`}</h1>
          <ItemGrid/>
        </div>
      </div>
    );
  }
  
};

export default GridItem;
