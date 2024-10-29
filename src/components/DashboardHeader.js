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

        <nav className="homify-nav" id="nav-bar">
            <Link to='/dashboard'>
              <a href=""><img className="logo" src={Logo} alt="Homify Logo" /></a>
            </Link>

            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
           
            <ul className="second-nav">
                <Link to='/myproperties'>
                  <li className="reg"><a className="dash-anchor" href="./myproperties.html">MY PROPERTIES</a></li>
                </Link> 
                <Link to='/topListing'>
                  <li className="reg"><a className="dash-anchor" href="./toplistings.html">TOP LISTINGS</a></li>
                </Link> 
                <Link to='/profile'>
                  <li className="reg">
                    <a className="dash-anchor" href="./myprofile.html">
                      <img src={Accountimg} alt="" className="account-img acc-img1" />
                    </a>
                  </li>
                </Link> 
                <Link to='/notification'>
                  <li className="reg">
                    <a className="dash-anchor" href="./notification.html">
                      <img src={Active} alt="" className="account-img acc-img2"/>
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

export default DashboardHeader;