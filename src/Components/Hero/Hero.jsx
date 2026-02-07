import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <h1><span>Hi, I'm Genny Blessed</span></h1>
      <p>Currently learning front end development in Lagos Nigeria</p>
      <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume"><AnchorLink className='anchor-link' offset={50} href='#contact'>My Resume</AnchorLink></div>
      </div>

    </div>
  )
}

export default Hero
