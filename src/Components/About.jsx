import React from 'react'
import bgabout from '../assets/about-background.png'
import imag from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'


function About() {
    return (
        <div className='about-section-container' id='About'>
            <div className="about-background-image-container">
                <img src={bgabout} alt="" />
            </div>
            <div className="about-section-image-container">
                <img src={imag} alt="" />
            </div>
            <div className="about-section-text-container ">
                <p className='primary-subheading'> About</p>
                <h1 className='primary-heading'>Food Is An Important Part Of A Balanced Diet</h1>
                <p className='primary-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam.</p>
                <p className='primary-text'>Non tincidunt magna non et elit. Dolor turpis molestie
                    dui magnis facilisis at fringilla quam.</p>
                <div className="about-buttons-container">
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button '><BsFillPlayCircleFill />Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default About
