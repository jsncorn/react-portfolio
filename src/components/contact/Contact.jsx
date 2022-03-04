import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contactLeft">
        <img src="../assets/networking.jpg" alt="network web" />
      </div>
      <div className="contactRight">
        <h2>Get In Touch With Me</h2>
        <form>
          <label for="name">Your Name</label><br />
          <input type="text" id="name" placeholder='First and Last' /><br />
          <label for="email">Email</label><br />
          <input type="email" id="email" placeholder="Email" /><br />
          <label for="subject">Subject</label><br />
          <input type="subject" id="subject" placeholder="Subject" /><br />
          <label for="content">Message</label><br />
          <textarea name="content" id="content" cols="20" rows="4" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
