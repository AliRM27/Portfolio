import React from 'react'
import './Navbar.css'
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'

import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)


  const Menu = () => {
    return(
      <>
        <h3><a href="#about" onClick={()=>setToggle(true)}>About</a></h3>
        <h3><a href="#experience" onClick={()=>setToggle(true)}>Experience</a></h3>
        <h3><a href="#projects" onClick={()=>setToggle(true)}>Projects</a></h3>
        <h3><a href="#contact" onClick={()=>setToggle(true)}>Contact</a></h3>
      </>
    )
  }

  return (
    <div className='app__navbar'>
      <div className='app__navbar-title'>
        <h1>Ali Mammadov</h1>
      </div>
      <div className='app__navbar-links'>
        <Menu/>
      </div>
      <div className='app__navbar-menu'>
        {toggle 
          ? <RiMenu3Fill className="app__navbar-open" fontSize={35} style={{cursor:"pointer"}} onClick={()=>setToggle(false)}/> 
          : <RiCloseLine className="app__navbar-close" fontSize={35} style={{cursor:"pointer"}} onClick={()=>setToggle(true)}/>
        }
        {!toggle && (
          <div className='app__navbar-menu_links'>
            <Menu/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;