import React from 'react'
import './Navbar.css'
import{ assets } from '../../assets/assets'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-contents'>
            <div className="title">
                <h1 className='red'>D</h1>
                <h1 className='white'>ev</h1>
                <h1 className='red'>B</h1>
                <h1 className='white'>y</h1>
                <h1 className='red'>T</h1>
                <h1 className='white'>rinidad</h1>
                <img className='select' src={assets.select}/>
            </div>
            <div className="menu">
                <h2>Menu</h2>
                <img src={assets.menu_logo} className='menu-logo'/>
                <div className="menu-options">
                    <Link to="about-me" smooth={true} duration={500}>
                        <p>About me</p>
                    </Link>
                    <Link to='services' smooth={true} duration={500}>
                        <p>Services</p>
                    </Link>
                    <Link to='contact-me' smooth={true} duration={500}>
                        <p>Contact-me</p>
                    </Link>  
                </div>
            </div>    
        </div>
        <div className='about'>
            <h1>Web Designer &</h1>
            <h1>Developer</h1>
        </div>
    </div>
  )
}

export default Navbar