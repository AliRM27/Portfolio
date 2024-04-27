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
          <p>Hey, I'm Ali Mammadov, a 17-year-old frontend developer who's been hooked on coding since I was 13. I love the challenge and creativity that comes with building stuff on the internet. It all started when I discovered HTML and CSS online. I was fascinated by the idea of creating websites from scratch. As I learned more, I realized how much fun it was to turn ideas into real digital things. The best thing about coding is that there's always more to learn. Whether it's mastering a new coding trick or trying out a different design idea, I'm always up for a challenge. I'm always looking for ways to improve and grow as a developer. In the future, I want to use my coding skills to make a difference. Whether it's building websites that help people or teaching others how to code, I want to use technology for good.</p>
        </div>
      </div>
    </div>
  )
}

export default About