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
          <p>Hi! My name is Ali. I am a 17 year old web developer and programming is my absolute passion. I don’t think age matters when it comes to creativity, talent and ambition. I have spent a lot of time developing websites and applications which has developed my understanding of passion and determination. I am eager to be part of never ending education processes and at the same time able to keep up with the newest web technology trends.</p>
        </div>
      </div>
    </div>
  )
}

export default About