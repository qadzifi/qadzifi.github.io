import React from 'react';
import './Navbar.css';

export default function Navbar(props) {
  const style = {};

  return (
    <div id='root' className='navbar-container' style={style}>
      <div id='chunk' className='navbar-container'>
        <div className='navbar-item'>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Resume</a>
        </div>
      </div>
    </div>
  );
}
