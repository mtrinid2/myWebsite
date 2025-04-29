import React, { useState } from 'react'
import './AboutMe.css'
import { assets } from '../../assets/assets'

const AboutMe = () => {
  const [showSkills, setSkills] = useState(true) // Move the state hooks inside the component
  const [showExperience, setExperience] = useState(false)
  const [showTab, setTab] = useState("skills")

  const setAboutMe1 = () => {
    setSkills(true)
    setExperience(false)
    setTab("skills")
  }

  const setAboutMe2 = () => {
    setExperience(true)
    setSkills(false)
    setTab("experience")
  }

  return (
    <div className='about-me'>
        <div className="about-me-contents">
            <div className="profile-pic">
                <img src={assets.myphoto} alt="profile"/>
            </div> 
            <div className="profile">
                <h1>About me</h1>
                <p>My name is Miguel Trinidad and I'm a computer engineer graduated from George Mason University.
                    I possess skills such as UI/Web designer. Since my early years, I've been passionate about technology and creative design.
                    This has driven me to pursue a career in web development, where I can blend my problem-solving skills with my creative side.
                </p>
                <div className="profile-contents">
                    <div className="raya">
                        <p onClick={setAboutMe1} className={showTab==="skills" ? "active":""}>Skills</p>
                    </div>
                    <div className="line">
                        <p onClick={setAboutMe2} className={showTab==="experience" ? "active":""}>Experience</p>
                    </div>   
                </div>
                {showSkills && (
                    <div className="profile-contents-contents">
                        <p>UI/UX</p>
                        <p>Web app Development</p>
                    </div> 
                )}
                {showExperience && (
                    <div className="profile-contents-contents">
                        <p>3+ years of experience in web development</p>
                        <p>Freelance projects and collaborations with clients</p>
                    </div>
                )}
            </div>
        </div>            
    </div>
  )
}

export default AboutMe
