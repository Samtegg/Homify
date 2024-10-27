import React from 'react'
import '../index.css'
import Logo from '../assets/logo.png'
import Accountimg from '../assets/account_icon.png'
import Active from '../assets/active.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();

  function goToNextPage(){
    navigate('/dashboard')
  }
  return (
    <header>

        <nav class="homify-nav" id="nav-bar">
            <Link to='/dashboard'>
              <a href=""><img class="logo" src={Logo} alt="Homify Logo" /></a>
            </Link>

            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
           
            <ul class="second-nav">
                <Link to='/myproperties'>
                  <li class="reg"><a class="dash-anchor" href="./myproperties.html">MY PROPERTIES</a></li>
                </Link> 
                <Link to='/topListing'>
                  <li class="reg"><a class="dash-anchor" href="./toplistings.html">TOP LISTINGS</a></li>
                </Link> 
                <Link to='/profile'>
                  <li class="reg">
                    <a class="dash-anchor" href="./myprofile.html">
                      <img src={Accountimg} alt="" class="account-img" />
                    </a>
                  </li>
                </Link> 
                <Link to='/notification'>
                  <li class="reg">
                    <a class="dash-anchor" href="./notification.html">
                      <img src={Active} alt="" class="account-img"/>
                    </a>
                  </li>
                </Link> 
                <Link to='/'>
                  <li onClick={goToNextPage} class="login"><a  href="../index.html" >LOGOUT</a></li>
                </Link> 

              
                
            
            </ul>
        </nav>  
    </header>
  )
}

export default DashboardHeader