import React from 'react'
import './Services.css'

const Services = () => {

  const services = [
    {
      title: "IT",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis autem culpa!"
    },
    {
      title: "Programming",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis autem culpa!"
    },
    {
      title: "Support",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis autem culpa!"
    },
    {
      title: "Content Writing",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam perferendis autem culpa!"
    }
  ]

  return (
    <div id='service' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="my-service" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
