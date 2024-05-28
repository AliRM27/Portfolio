import React from 'react'

import git from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import me from '../../assets/profile.png'
import cvpdf from '../../assets/Ali-Mammadov-CV.pdf'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-content'>
        <div className='app__header-content_img'>
          <img src={me} alt="profile" />
        </div>
        <div className='app__header-content_info'>
          <div className='app__header-content_title'>
            <p style={{fontWeight:"600", color:"grey"}}>Hello, I'm</p>
            <h1>Ali Mammadov</h1>
            <h2 style={{color:"grey"}}>Frontend Developer</h2>
          </div>
          <div className='app__header-btn'>
            <a href={cvpdf} download={"Ali-Mammadov-CV"} target='_blank' rel='noreferrer'><button type="button">Download CV</button></a>
            <a href="#contact"><button type="button" >Contact Info</button></a>
          </div>
          <div className='app__header-links'>
            <a href="https://github.com/AliRM27" target='_blank' rel="noreferrer"><img src={git} alt="github" /></a>
            <a href="https://www.linkedin.com/in/ali-mammadov-33a435303/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header