import React from 'react'

import img1 from '../../assets/project1.png'
import img2 from '../../assets/project2.png'
import './Projects.css'
import Project from '../Project/Project'

const Projects = () => {
  return (
    <div className='app__projects' id='projects'>
      <div className='app__projects-title'>
        <p style={{fontSize:"15px", color:"rgb(123,123,123)"}}>Browse My Recent</p>
        <h1 style={{fontSize:"50px"}}>Projects</h1>
      </div>
      <div className='app__projects-content'>
        <Project image={img1} name={"GPT-5 Project"} gitLink={"https://github.com/AliRM27/gpt5-website"} demoLink={"https://relaxed-raindrop-413cc0.netlify.app"}/>
        <Project image={img2} name={"Restaurant"} gitLink={"https://shiny-jalebi-61f723.netlify.app/"}/>
        <Project/>
      </div>
    </div>
  )
}

export default Projects