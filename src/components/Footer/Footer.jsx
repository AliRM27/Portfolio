import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-nav'>
        <h3><a href="#about">About</a></h3>
        <h3><a href="#experience">Experience</a></h3>
        <h3><a href="#projects">Projects</a></h3>
        <h3><a href="#contact">Contact</a></h3>
      </div>
      <p>Copyright &#169; 2024 Ali Mammadov</p>
    </div>
  )
}

export default Footer