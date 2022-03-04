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
          <h2>Hello my name is</h2>
          </div>
        </div>
      </div>
  )
}
