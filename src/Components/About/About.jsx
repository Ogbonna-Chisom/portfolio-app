import React from 'react'
import './About.css'

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React"
  ]

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">




        {/* LEFT SECTION */}
        <div className="about-left">
          <p>
            I am a passionate front-end developer who enjoys building modern, 
            responsive, and user-friendly web applications. I love turning ideas 
            into interactive digital experiences and constantly improving my skills 
            in web development.
          </p>
        </div>



        {/* RIGHT SECTION */}
        <div className="about-right">
          <h2>My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
