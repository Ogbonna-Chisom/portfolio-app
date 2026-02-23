import { Link } from 'react-router-dom'
import { routes } from '../config/routes'
import About from './About'
import Service from './Service'
import Project from './Project'
import Contact from './Contact'


const Home = () => {
    return (

        <>
            <div id='home' className='hero'>
                <h1><span>Hi, I'm Genny Blessed</span></h1>
                <p>Currently learning front end development in Lagos Nigeria</p>
                <div className="hero-action">
                    <div className="hero-connect"><Link to={routes.contact} className='anchor-link' offset={50} href='#contact'>Connect with me</Link></div>
                    <div className="hero-resume"><Link to={routes.contact} className='anchor-link' offset={50} href='#contact'>My Resume</Link></div>
                </div>
            </div>
            <About/>
            <Project/>
            <Service/>
            <Contact/>
            
        </>
      
        
    )
}

export default Home
