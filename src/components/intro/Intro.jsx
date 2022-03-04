import React from 'react'
import "./intro.css"
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ["Node.js", "React.js", "Express.js", "Fullstack"]
    });
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className="introLeft">
        <div className="selfie">
          <img src="assets/selfie.JPG" alt="selfie"></img>
        </div>
      </div>
      <div className="introRight">
        <div className="introWrap">
          <h2>Hello! I'm</h2>
          <h1>Jason Ngo</h1>
          <h3><span ref={textRef}></span>Developer</h3>
        </div>
        <div className='arrowDiv'>
          <a className='anchorArrow' href="#about">
            <img className='downArrow' src="assets/down.png" alt="down arrow" />
          </a>
        </div>
      </div>
    </div>
  )
}
