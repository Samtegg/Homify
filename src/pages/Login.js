import React from 'react'
import '../index.css'
import Logo from '../assets/logo.png'

const Login = () => {
  return (
    <div className="login-container">
    <div className="logo-container">
      <a href="../index.html"><img src={Logo} alt="Homify Logo" className="logo" /></a>
    </div>
    <div className="content-wrapper">
      <h2>Simplify house hunting today.</h2>
      <p>Homify is your go-to real estate platform, connecting property seekers in Lagos, Nigeria, with property owners and agents.</p>
    </div>

    <div className="form-wrapper">
      <div className="form-content">
        <h1>Sign In to Homify</h1>
        <form id="signinForm">
          <div className="input-group">
            <label for="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="forgot-password">
            <a href="#" id="forgotPassword">Forgot Password?</a>
          </div>
          <button type="submit" id="sign-in" onclick="window.location.href='../user-dashboard/userdash.html'">Sign In</button>
          <div className="or-divider">
            <span>OR</span>
          </div>
          <div className="social-login">
            <button type="button" className="social-btn google-btn">Sign in with Google</button>
            <button type="button" className="social-btn facebook-btn">Sign in with Facebook</button>
          </div>
          <p className="message">Don't have an account? <a href="../register/register.html">Register</a></p>
        </form>
      </div>

    </div>
  </div>
  )
}

export default Login