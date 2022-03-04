import React from 'react';
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar active">
        <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>jason ngo</a>
            </div>
          <div className="right">
            <div className="menu">
              <span className='lineOne'></span>
              <span className='lineTwo'></span>
              <span className='lineThree'></span>
              </div>
            </div>
          </div>
        </div>
  )
}
