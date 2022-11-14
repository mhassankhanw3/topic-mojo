import React from 'react'
import Cards from './Cards'
import Content from './Content'
import DaisyCards from './DaisyCards'
import Feature from './Feature'
import Footer from './Footer'
import Hero from './Hero'
import LaunchOption from './LaunchOption'
import Navbar from './Navbar'
import PlatformFeatures from './PlatformFeatures'
import Pricing from './Pricing'
import Subscribe from './Subscribe'
import Topics from './Topics'
import Users from './Users'

const Allfiles = () => {
  return (
    <div className="container">
        <Navbar/>
        <Hero/>
        <Feature/>
        <Users/>
        <Topics/>
        <LaunchOption/>
        <Cards/>
        <PlatformFeatures/>
        {/* <DaisyCards/> */}
        {/* <Content/> */}
        {/* <Pricing/> */}
        {/* <Subscribe/> */}
        {/* <Footer/> */}
    </div>
  )
}

export default Allfiles