import React from 'react'
import "./gallery.css"

export default function Gallery() {
  return (
    <div className='gallery' id='gallery'>
      <h1>Gallery</h1>
      <div className="galleryContainer">

        <div className="item">
          <img src="https://github.com/jsncorn/portfolio-v3/blob/main/public/photos/Screenshot%202022-02-18%20165100.png?raw=true" alt="" />
          <h3>Project Title</h3>
        </div>

        <div className="item">
          <img src="https://github.com/imanmansour86/get-moving/raw/main/public/images/homepage.gif" alt="" />
          <h3>Project Title</h3>
        </div>

        <div className="item">
          <img src="https://user-images.githubusercontent.com/87446864/150031399-87540499-0212-409a-8040-2317b3085ac0.gif" alt="" />
          <h3>Project Title</h3>
        </div>

        <div className="item">
          <img src="../assets/ecommerce-demo.png" alt="" />
          <h3>Project Title</h3>
        </div>

        <div className="item">
          <img src="../assets/social-network-code.png" alt="" />
          <h3>Project Title</h3>
        </div>

        <div className="item">
          <img src="../assets/JS-quiz-demo.png" alt="" />
          <h3>Project Title</h3>
        </div>

      </div>
    </div>
  )
}
