import React from 'react'
import '../index.css';
import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'
import PersonalProperties from '../components/PersonalProperties'

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