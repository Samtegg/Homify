import React from 'react'
import Logo from '../assets/logo.png'

const Register = () => {
  return (
    <div className="container">
    <div className="logo-container">
      <a href="../index.html"><img src={Logo} alt="Homify Logo" className="logo" /></a>
    </div>
    <div className="content-wrapper">
      <h2>Simplify house hunting today.</h2>
      <p>Homify is your go-to real estate platform, connecting property seekers in Lagos, Nigeria, with property owners and agents.</p>
    </div>
    <div className="form-wrapper">
      <div className="form-content">
        <h1>Create Your Homify Account</h1>
        <form id="registerForm">
          <div className="input-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className="input-group">
            <label for="role">Role</label>
            <select id="role" name="role">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller (Landowner)</option>
              <option value="agent">Agent</option>
            </select>
          </div>
          <button type="submit" id="register-btn">Register</button>
          <div className="social-login">
            <button type="button" className="social-btn google-btn">Register with Google</button>
            <button type="button" className="social-btn facebook-btn">Register with Facebook</button>
          </div>
          <p className="message">Already have an account? <a href="../login-signup/login.html">Sign In</a></p>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register