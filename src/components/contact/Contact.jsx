import React from 'react'
import "./contact.css"
import { useState } from "react";

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState('');
  const [validity, setValidity] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  setSubmitMessage('Thanks, I will get back to you ASAP!');
  setValidity("green");


  }

  return (
    <div className='contact' id='contact'>
      <div className="contactLeft">
        <img src="https://github.com/jsncorn/react-portfolio/blob/main/public/assets/networking.jpg?raw=true" alt="network web" />
      </div>
      <div className="contactRight">
        <h2>Get In Touch With Me</h2>
        <form onSubmit={handleSubmit}>
          <label for="name">Your Name</label><br />
          <input required type="text" id="name" placeholder='First and Last' /><br />
          <label for="email">Email</label><br />
          <input required type="email" id="email" placeholder="Email" /><br />
          <label for="subject">Subject</label><br />
          <input required type="subject" id="subject" placeholder="Subject" /><br />
          <label for="content">Message</label><br />
          <textarea required name="content" id="content" cols="45" rows="6" placeholder="Message" />
          <button type="submit">Send</button>
          { submitMessage && <span className={validity}>{submitMessage}</span>}
        </form>
      </div>
    </div>
  )
}
