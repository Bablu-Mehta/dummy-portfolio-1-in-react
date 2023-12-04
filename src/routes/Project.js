import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading='Projects.' text='Some of my most recent works.' />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project;