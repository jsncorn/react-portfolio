import React from 'react'
import "./portfolio.css"
import { GitHub, OpenInBrowser } from "@mui/icons-material";


export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className="portfolioContainer">

        <div className="item">
          <img src="https://github.com/jsncorn/portfolio-v3/blob/main/public/photos/Screenshot%202022-02-18%20165100.png?raw=true" alt="" />
          <h3>Node: Employee Tracker</h3>
          <a href="https://github.com/jsncorn/employee-tracker" className='gitOnlyIcon'><GitHub /></a>
        </div>

        <div className="item">
          <img src="https://github.com/imanmansour86/get-moving/raw/main/public/images/homepage.gif" alt="" />
          <h3>Database: Get Moving</h3>
          <div className="duoIcon">
            <a href="https://github.com/imanmansour86/get-moving"><GitHub/></a>
            <a href="https://pacific-wildwood-76799.herokuapp.com/"><OpenInBrowser/></a>
            </div>
        </div>

        <div className="item">
          <img src="https://user-images.githubusercontent.com/87446864/150031399-87540499-0212-409a-8040-2317b3085ac0.gif" alt="" />
          <h3>API: Kanye Quote Translator</h3>
          <div className="duoIcon">
            <a href="https://github.com/705h-S/JPJ-enterprise"><GitHub/></a>
            <a href="https://705h-s.github.io/JPJ-enterprise/"><OpenInBrowser/></a>
            </div>
        </div>

        <div className="item">
          <img src="https://github.com/jsncorn/react-portfolio/blob/main/public/assets/ecommerce-demo.png?raw=true" alt="" />
          <h3>Backend: eCommerce Backend</h3>
          <a href="https://github.com/jsncorn/ecommerce-backend" className='gitOnlyIcon'><GitHub /></a>
        </div>

        <div className="item">
          <img src="https://github.com/jsncorn/react-portfolio/blob/main/public/assets/social-network-code.png?raw=true" alt="" />
          <h3>Backend: Social Network API</h3>
          <a href="https://github.com/jsncorn/social-network-api" className='gitOnlyIcon'><GitHub /></a>
        </div>

        <div className="item">
          <img src="https://github.com/jsncorn/react-portfolio/blob/main/public/assets/JS-quiz-demo.png?raw=true" alt="" />
          <h3>JS: Code Quiz</h3>
          <div className="duoIcon">
            <a href="https://github.com/jsncorn/code-quiz"><GitHub/></a>
            <a href="https://jsncorn.github.io/code-quiz/"><OpenInBrowser/></a>
            </div>
        </div>

      </div>
    </div>
  )
}
