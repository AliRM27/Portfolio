import React from 'react'

import img1 from '../../assets/project1.png'
import img2 from '../../assets/project2.png'
import img3 from '../../assets/project3.png'
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
        <Project image={img1} name={"GPT-5 Landing Page"} gitLink={"https://github.com/AliRM27/gpt5-website"} demoLink={"https://gpt5-landing-page.netlify.app"}/>
        <Project image={img2} name={"Restaurant"} gitLink={"https://github.com/AliRM27/gericht-restaurant"} demoLink={"https://gericht-restaurant-am.netlify.app"}/>
        <Project image={img3} name={"Movie Finder"} gitLink={"https://github.com/AliRM27/Movie-finder"} demoLink={"https://movie-finder-am.netlify.app"}/>
      </div>
    </div>
  )
}

export default Projects