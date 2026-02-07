import React, { useState, useEffect } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkMode])


  // Funtionality of the navbar
  const[menu, setMenu] = useState("home")


  return (
    <div className='navbar'>
      <h1 className="logo">GB</h1>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() =>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() =>setMenu("about")}>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={() =>setMenu("projects")}>Project</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={() =>setMenu("contact")}>Service</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() =>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
       <div className="nav-actions"></div>
      {/* <div className="nav-connect">Connect with me</div> */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
    </div>
  ) 
}

export default Navbar

