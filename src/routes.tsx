import React from 'react';
import {createHashRouter} from 'react-router-dom';
import App from './App';
import routesResume from './feature/resume/Routes';

const GlobalRouter = createHashRouter([
  ...routesResume,
  {
    path: '/',
    element: <App/>,
  },
]);

export default GlobalRouter;
