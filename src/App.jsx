import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Testimonial from './Components/Testmonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import img from './assets/about-background-image.png'
import ScrollToTopButton from './Components/ScrollToTop'


export default function App() {
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)

    }, 1500);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <>
   
    {Loading ? <div className="load">
        <i className='fas fa-spin'><img className='size-image' src={img} alt="" /></i>
      </div> : <div className='App'>
        <Home />
        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>}

   

    </>

  )
}
