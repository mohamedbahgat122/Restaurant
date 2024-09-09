import React from 'react'
import Navbar from './Navbar'
import bannerbackground from '../assets/home-banner-background.png'
import homeimg from '../assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'


function Home() {
    return (
        <div className='Home-container' id='Home'>
            <Navbar />
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={bannerbackground} alt="" />
                </div>

                <div className="home-text-section">
                    <h1 className='primary-heading '>Your Favourite Food Delivered Hot & Fresh</h1>
                    <p className='primary-text'>Healthy switcher chefs do all the prep work, like
                        peeding, chopping & marinating, so you can cook
                        a fresh food.</p>
                        <button className='secondary-button'>Order Now <FiArrowRight/></button>
                </div>
                <div className="home-image-container">
                    <img src={homeimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
