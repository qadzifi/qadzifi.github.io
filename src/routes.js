import React from 'react';
import {createHashRouter} from 'react-router-dom';
import App from './App';

const GlobalRouter = createHashRouter([
  {
    path: '/',
    element: <App/>,
  },
]);

export default GlobalRouter;
