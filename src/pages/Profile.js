import React from 'react'
import Human from '../assets/human-img2.jpg'
import DashboardHeader from '../components/DashboardHeader.js'
import Footer from '../components/Footer.js'

const Profile = () => {
  return (
    
     <div className='dashboard-container'>
      <DashboardHeader />
      <section className="user-overview margin-top2">
              <div className="user-info">
                  <div className="profile-picture-container">
                      <img id="profile-picture" src={Human} alt="human_image" className="profile-picture" />
                      <button className="change-picture-btn" >Change Profile Picture</button>
                  </div>
                  <div className="user-details">
                      <h2 id="username">User</h2>
                      <p id="phone"><strong>Phone:</strong> +234 123 456 7890</p>
                      <p id="email"><strong>Email:</strong> User@email.com</p>
                      <p><strong>Joined:</strong> <span id="date-joined">January 1, 2023</span></p>
                      <p><strong>User Type:</strong> <span id="user-type">Seller (Land Owner)</span></p>
                      <button className="edit-profile-btn" onclick="editProfile()">Edit Profile</button>
                      <button className="logout-btn">Sign Out</button>
                  </div>
              </div>
          </section>
      <Footer />
  </div>
  )
}

export default Profile