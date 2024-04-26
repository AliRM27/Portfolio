import React from 'react'
import check from '../../assets/checkmark.png'

import './Skill.css'

const Skill = ({name, level}) => {
  return (
    <div className='app__skill'>
        <img src={check} alt="check" />
        <div className='app__skill-content'>
            <h3 style={{fontSize:"20px"}}>{name}</h3>
            <p style={{fontSize:"13px"}}>{level}</p>
        </div>
    </div>
  )
}

export default Skill