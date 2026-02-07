import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>

      <div className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Have a project in mind or want to collaborate? 
            Feel free to send a message, I’ll get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>Email: generouschisom14@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Location: Lagos Nigeria</p>
            </div>

            <div className="contact-detail">
              <img src={phone_icon} alt="" />
              <p>Phone Number: 08108505202</p>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE FORM */}
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />

          <label>Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message"></textarea>

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}

export default Contact
