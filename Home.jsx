import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import AboutMe from '../../components/AboutMe/AboutMe'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        < Navbar />
        <div id='about-me'>
          < AboutMe />
        </div>
        <div id='services'>
          < Header />
        </div>
        < Footer />
    </div>
  )
}

export default Home