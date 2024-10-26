import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="header">
    <div className="header-container">
        <img className="logo" src="./assets/logo.png" alt="Homify Logo" />
        <nav className="header-nav">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="./login-signup/login.html">Login</a></li>
            </ul>
        </nav>
    </div>
</header></div>
  )
}

export default Header