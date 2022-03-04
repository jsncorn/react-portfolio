import React from 'react';
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className='wrapper'>
          <div className="left">
            <a href="#intro" className='logo'>jason ngo</a>
            </div>
          <div className="right">
            <div className="menu">
              <span></span>
              <span></span>
              <span></span>
              </div>
            </div>
          </div>
        </div>
  )
}
