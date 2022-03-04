import React from 'react';
import "./footer.css";
import { GitHub, Email, LinkedIn, PhoneIphone } from "@mui/icons-material";

export default function Footer() {
  return (
    <div className="footer" >
      <div className="footer-wrapper">
        <a href='https://www.linkedin.com/in/jason-ngo-050b481b3/' className="icon">
          <LinkedIn />
        </a>
        <a href='https://www.github.com/jsncorn' className="icon">
          <GitHub />
        </a>
        <a href="mailto:jsncourn@gmail.com" className="icon">
          <Email />
        </a>
        <a href="tel:+15107105041" className="icon">
          <PhoneIphone />
        </a>
      </div>
    </div>
  )
}
