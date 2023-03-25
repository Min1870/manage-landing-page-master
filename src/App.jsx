import React from 'react'
import Cta from './components/Cta'
import Feature from './components/Feature'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Feature/>
      <Testimonials/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default App