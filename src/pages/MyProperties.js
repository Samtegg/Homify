import React from 'react'
import '../index.css';
import DashboardHeader from '../components/DashboardHeader.js'
import Footer from '../components/Footer.js'
import PersonalProperties from '../components/PersonalProperties.js'

const MyProperties = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader />
        <PersonalProperties  />
        <Footer />
    </div>
  )
}

export default MyProperties