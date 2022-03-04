import React from 'react'
import "./intro.css"

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="introLeft">
        <div className="selfie">
          <img src="../assets/selfie.JPG" alt="selfie"></img>
          </div>
        </div>
      <div className="introRight">
        <div className="introWrap">
          <h2>Hello! I'm</h2>
          <h1>Jason Ngo</h1>
          <h3></h3>
          </div>
          <img className='downArrow' src="../assets/down.png" alt="down arrow"/>
        </div>
      </div>
  )
}
