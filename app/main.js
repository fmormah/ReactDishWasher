import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import PageContent from './config/Root';

const render = () => {
  ReactDOM.render( <PageContent />,document.getElementById('content-root'),);
};

render();
