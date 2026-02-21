import React from 'react'

const Home = () => {
    return (
        <div id='home' className='hero'>
            <h1><span>Hi, I'm Genny Blessed</span></h1>
            <p>Currently learning front end development in Lagos Nigeria</p>
            <div className="hero-action">
                <div className="hero-connect"><a className='anchor-link' offset={50} href='#contact'>Connect with me</a></div>
                <div className="hero-resume"><a className='anchor-link' offset={50} href='#contact'>My Resume</a></div>
            </div>
        </div>
    )
}

export default Home
