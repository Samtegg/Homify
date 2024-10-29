import React from 'react'
import '../index.css'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
    <div className="first-footer">
        <img className="logo" src={Logo} alt="" />
        <nav className="footer-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="./login-signup/login.html">Login</a></li>
            </ul>
        </nav>
    </div>
    <p>Copyright Homily All Right Reserved.</p>
  </div>
  )
}

export default Footer