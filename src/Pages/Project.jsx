import React from 'react'

const Project = () => {
  const projectData = [
    {
      title: "Simple Portfolio Website",
      description: "My personal portfolio built with React and CSS.",
      image: portfolio_app,
      live: "https://github.com/Ogbonna-Chisom/",
      github: "https://github.com/Ogbonna-Chisom/",
    },

    {
      title: "Gamified App",
      description: "A gamified app that alocates roles to student depending on their activities, using HTML, CSS and JavaScript.",
      image: gamified_app,
      live: "https://wid-gamified-final-project.vercel.app/",
      github: "https://github.com/Ogbonna-Chisom/",
    },

    
    {
      title: "Budget Tracker App",
      description: "An app that calculate your expenses in different currencies with HTML, CSS and JavaScript.",
      image: budget_app,
      live: "https://budget-tracker-app-steel.vercel.app/",
      github: "https://github.com/Ogbonna-Chisom/",
    },
  ];


  return (
    <div className="project" id="project">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>

      <div className="project-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn">Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;