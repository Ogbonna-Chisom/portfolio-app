import React from 'react'

const About = () => {
    
  return (
    <div>
      <div id='about' className='about'>
      <div className="about-title">
         <h1>About Me</h1>
      </div>


       <div className="about-section">
        {/*-----Left Side-----*/}
        <div className="about-left">
          <p>
            I’m a passionate front-end developer focused on building clean,
            responsive, and user-friendly web experiences. I love turning ideas
            into real-world digital products and continuously improving my skills.
          </p>
        </div>

        {/*-----Right Section-----*/}
        <div className="about-right">
          <h2>My Skills</h2>

          <div className="skills-grid">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          </div>
        </div>

      </div>

    </div>

    </div>
  )
}

export default About
