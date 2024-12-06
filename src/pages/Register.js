import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const Register = () => {
  const navigate = useNavigate();
  const serverUrl = 'http://localhost:5000/api/register';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: '',
  })

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
    console.log('this is formdata', formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const {name, email, phone, password, confirmPassword, role} = formData;

    console.log(name, email, phone, password, confirmPassword, role);
    

    if(password !== confirmPassword){

      toast.warn("Passwords do not match", { position: "top-center" });
      return
    }

    try {
      const response = await axios.post(serverUrl, formData);
      console.log('Response received:', response.data);

      if(response.data.message === 'Success'){
        toast.success('Successfully registered!', {position: "top-center", autoClose: 2000})
        setTimeout(() => {
          navigate('/dashboard')
        }, 2000)
      }else if(response.data.message === 'Email exist'){
        toast.error('This email is already registered!', {position: "top-center"})
      }
    } catch (error) {
      toast.error('Failed to register. Please try again later.', {position: "top-center"})
    }



  }


  return (
    <div className="login-reg-container">
    <div className="logo-container">
      <Link to='/'>
        <img src={Logo} alt="Homify Logo" className="logo" />
      </Link>
    </div>
    <div className="content-wrapper">
      <h2>Simplify house hunting today.</h2>
      <p>Homify is your go-to real estate platform, connecting property seekers in Lagos, Nigeria, with property owners and agents.</p>
    </div>
    <div className="form-wrapper">
      <div className="form-content">
        <h1>Create Your Homify Account</h1>
        <form id="registerForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input onChange={handleChange} type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input onChange={handleChange} type="tel" id="phone" name="phone" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id="password" name="password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={handleChange} type="password" id="confirmPassword" name="confirmPassword" required />
          </div>
          <div className="input-group">
            <label htmlFor="role">Role</label>
            <select onChange={handleChange} id="role" name="role">
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
          <Link to='/login'>
            <p className="message">Already have an account? <span>Sign In</span></p>
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register