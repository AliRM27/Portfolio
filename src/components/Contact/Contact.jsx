import React from 'react'

import './Contact.css'
import imgEmail from '../../assets/email.png'

const Contact = () => {
  return (
    <div className='app__contact' id='contact'>
      <div className='app__contact-title'>
        <p style={{fontSize:"15px", color:"rgb(123,123,123)"}}>Get in Touch</p>
        <h1 style={{fontSize:"50px"}}>Contact Me</h1>
      </div>
      <div className='app__contact-email'>
        <img src={imgEmail} alt="email" />
        <p>amammadov097@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact