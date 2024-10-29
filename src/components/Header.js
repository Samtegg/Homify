import React from 'react'
import '../index.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

        <header>
               
                    <nav className="homify-nav" id="nav-bar">
                        <Link to="/">
                            <a href="/index.html"><img className="logo" src={Logo} alt="Homify Logo" /></a>
                        </Link>
                        <a href="#" className="toggle-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                        <ul className="first-nav">
                            <li><a href="#home">HOME</a></li>
                            <li><a href="#services">SERVICES</a></li>
                            <li><a href="#features">FEATURES</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                        <ul className="second-nav">
                            <Link to="/register">
                                <li className="reg register-button"><a href="./register/register.html" >REGISTER</a></li>
                            </Link>
                            <Link to="/login">
                                <li className="login"><a href="./login-signup/login.html" >LOGIN</a></li> 
                            </Link>
                        </ul>
                    </nav> 
                </header>

    </div>
  )
}

export default Header