import React, { useState } from 'react'
import '../index.css'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
  const navigate = useNavigate();
  const serverUrl = 'http://localhost:5000/api/signin';

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
   
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    console.log('this is formdata', formData);
    

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(serverUrl, formData)
      if(response.data.message ==='Error, user not found'){
        alert('Error, user not found')
      }
      if(response.data.message ==='Wrong Password, The password you entered is wrong'){
        alert('Wrong Password, The password you entered is wrong')
      }
      if(response.data.message === 'Login successful') {
        alert('Successfully logged in')

        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="login-reg-container">
    <div className="logo-container">
      <a href=""><img src={Logo} alt="Homify Logo" className="logo" /></a>
    </div>
    <div className="content-wrapper">
      <h2>Simplify house hunting today.</h2>
      <p>Homify is your go-to real estate platform, connecting property seekers in Lagos, Nigeria, with property owners and agents.</p>
    </div>

    <div className="form-wrapper">
      <div className="form-content">
        <h1>Sign In to Homify</h1>
        <form id="signinForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label for="email">Email</label>
            <input onChange={handleChange} name='email' type="email" id="email" required />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input onChange={handleChange} type="password" name='password' id="password" required />
          </div>
          <div className="forgot-password">
            <a href="#" id="forgotPassword">Forgot Password?</a>
          </div>
          <button  type="submit" id="sign-in">Sign In</button>
          <div className="or-divider">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="social-btn google-btn">Sign in with Google</button>
            <button type="button" className="social-btn facebook-btn">Sign in with Facebook</button>
          </div>
          <Link to='/register'>
            <p className="message">Don't have an account? <a href="./Register.js">Register</a></p>
          </Link>
  
        </form>
      </div>

    </div>
  </div>
  )
}

export default Login