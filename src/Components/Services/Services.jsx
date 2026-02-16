import React from 'react'
import './Services.css'

const Services = () => {

  const services = [
    {
      title: "IT",
      description: "Providing reliable IT solutions including system setup, troubleshooting, maintenance, and technical support to keep your technology running smoothly and efficiently."
    },
    {
      title: "Programming",
      description: "Building modern, responsive, and scalable web applications using the latest technologies to turn ideas into functional digital solutions."
    },
    {
      title: "Support",
      description: "Offering responsive technical and customer support to resolve issues quickly, ensure smooth operations, and deliver a seamless user experience."
    },
    {
      title: "Digital Marketing",
      description: "Helping businesses grow online through strategic marketing, social media management, content creation, and lead generation to increase visibility and sales."
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
