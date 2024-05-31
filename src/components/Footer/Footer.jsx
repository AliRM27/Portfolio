import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-nav'>
        <h3><a href="#about">About</a></h3>
        <h3><a href="#experience">Experience</a></h3>
        <h3><a href="#projects">Projects</a></h3>
      </div>
      <p className='cr'>Copyright &#169; 2024 <a href='#'>Ali Mammadov</a></p>
    </div>
  )
}

export default Footer