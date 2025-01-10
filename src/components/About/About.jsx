import React from 'react'
import exp from '../../assets/experience.png'
import education from '../../assets/education.png'

import "./About.css"

const About = () => {
  return (
    <div className='app__about' id='about'>
      <div className='app__about-content'>
        <div className='app__about-content_title'>
          <p style={{fontSize:"15px", color:"grey"}}>Get To Know More</p>
          <h1 style={{fontSize:"50px"}}>About Me</h1>
        </div>
        <div className='app__about-content-info'>
          <div className='app__about-box'>
            <img src={exp} alt="experience" style={{cursor:"pointer"}}/>
            <h5 style={{fontSize:"20px"}}>Experience</h5>
            <p style={{fontSize:"15px"}}>2+ years</p>
            <p style={{fontSize:"15px"}}>Web Development</p>
          </div>
          <div className='app__about-box'>
            <img src={education} alt="education" style={{cursor:"pointer"}} />
            <h5 style={{fontSize:"20px"}}>Education</h5>
            <p style={{fontSize:"15px"}}><strong>Codecademy: </strong>Frontend Development</p>
            <p style={{fontSize:"15px"}}><strong>CS50: </strong>Computer Science</p>
            <p style={{fontSize:"15px"}}><strong>CS50: </strong>Python</p>
          </div>
        </div>
        <div className='app__about-text'>
          <p>Hey, I'm Ali, a 17 year old web developer motivated by the desire of programming. I believe that age is just a number when it comes to creativity, skill, and drive. I have been building websites and applications which has equipped me with the knowledge of zeal and ambition. I welcome the potential to be part of a modern team and make a difference in the digital world. I am ready to be a part of a never ending learning cycle while still being on the latest trends of the web tech.</p>
        </div>
      </div>
    </div>
  )
}

export default About