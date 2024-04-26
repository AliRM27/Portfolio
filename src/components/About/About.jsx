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
            <p style={{fontSize:"15px"}}>1+ year</p>
            <p style={{fontSize:"15px"}}>Frontend Development</p>
          </div>
          <div className='app__about-box'>
            <img src={education} alt="education" style={{cursor:"pointer"}} />
            <h5 style={{fontSize:"20px"}}>Education</h5>
            <p style={{fontSize:"15px"}}>Code Academy: Frontend Development</p>
            <p style={{fontSize:"15px"}}>CS50 Python</p>
          </div>
        </div>
        <div className='app__about-text'>
          <p>Greetings! I'm Ali Mammadov, a driven and creative 17-year-old frontend developer with an insatiable curiosity for all things coding. My journey into the world of programming began at the tender age of 13, sparked by a fascination with technology and a desire to bring my ideas to life on the digital canvas. From the moment I wrote my first line of code, I was hooked. What started as a hobby quickly transformed into a genuine passion as I delved deeper into the intricacies of frontend development. The ability to blend design and functionality to create immersive and engaging user experiences captured my imagination like nothing else.</p>
        </div>
      </div>
    </div>
  )
}

export default About