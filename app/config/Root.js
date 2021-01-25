import "@babel/polyfill";
import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductGrid from '../templates/ProductGrid.jsx';

const Root = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={ProductGrid} />
      </Switch>
    </Router>
    
  );
};

export default Root;
