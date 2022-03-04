import React from 'react'
import "./contact.css"
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({name: '', email: '', subject: '', content: ''});
  const [submitMessage, setSubmitMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
if(!e.target.name) {
  setSubmitMessage('Please enter a valid name')
} else if(!(validateEmail(e.target.email))) {
  setSubmitMessage('Please enter a valid email address.')
} else if(!e.target.subject) {
  setSubmitMessage('Please enter a valid subject')
} else if(!e.target.message) {
  setSubmitMessage('Please enter more information.')
}

    setForm();
  }

  return (
    <div className='contact' id='contact'>
      <div className="contactLeft">
        <img src="../assets/networking.jpg" alt="network web" />
      </div>
      <div className="contactRight">
        <h2>Get In Touch With Me</h2>
        <form onSubmit={handleSubmit}>
          <label for="name">Your Name</label><br />
          <input required type="text" id="name" placeholder='First and Last' /><br />
          <label for="email">Email</label><br />
          <input requiredtype="email" id="email" placeholder="Email" /><br />
          <label for="subject">Subject</label><br />
          <input required type="subject" id="subject" placeholder="Subject" /><br />
          <label for="content">Message</label><br />
          <textarea required name="content" id="content" cols="45" rows="6" placeholder="Message" />
          <button type="submit">Send</button>
          { form && <span>{submitMessage}</span>}
        </form>
      </div>
    </div>
  )
}
