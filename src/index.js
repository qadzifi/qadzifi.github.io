import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import GlobalRouter from './routes';
import GlobalNavbar from './general/Navbar';

ReactDOM.render(
    <React.StrictMode>
      <GlobalNavbar />
      <RouterProvider router={GlobalRouter}/>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
