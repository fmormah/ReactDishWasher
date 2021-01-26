import React, { useState, useEffect, useContext, useReducer, useRef} from 'react';
import GridItems from '../components/GridItem.jsx';

const ProductGrid = () => {

  const productsApi = "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI";

  return (
    <div>
      <GridItems productsApi={productsApi}  />
    </div>
  );
};

export default ProductGrid;
