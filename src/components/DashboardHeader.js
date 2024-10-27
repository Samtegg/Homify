import React from 'react'
import '../index.css'
import Logo from '../assets/logo.png'
import Accountimg from '../assets/account_icon.png'
import Active from '../assets/active.png'

const DashboardHeader = () => {
  return (
    <header>

        <nav class="homify-nav" id="nav-bar">
            <a href="/index.html"><img class="logo" src={Logo} alt="Homify Logo" /></a>

            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
           
            <ul class="second-nav">
                <li class="reg"><a class="dash-anchor" href="./myproperties.html">MY PROPERTIES</a></li>
                <li class="reg"><a class="dash-anchor" href="./toplistings.html">TOP LISTINGS</a></li>
                <li class="reg"><a class="dash-anchor" href="./myprofile.html">
                <img src={Accountimg} alt="" class="account-img" />
                </a>
                </li>
                <li class="reg"><a class="dash-anchor" href="./notification.html">
                <img src={Active} alt="" class="account-img"/>
                </a>
                </li>
                <li class="login"><a class="login" href="../index.html" >LOGOUT</a></li>
            </ul>
        </nav>  
    </header>
  )
}

export default DashboardHeader