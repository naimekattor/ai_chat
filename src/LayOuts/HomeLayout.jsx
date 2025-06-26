import About from '@/components/About'
import Actions from '@/components/Actions'
import Benefites from '@/components/Benefites'
import CaseUse from '@/components/CaseUse'
import Footer from '@/components/Footer'
import GetStarted from '@/components/GetStarted'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Solutions from '@/components/Solutions'
import Technology from '@/components/Technology'
import React from 'react'

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Actions />
      <Technology />
      <Benefites />
      <CaseUse />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default HomeLayout
