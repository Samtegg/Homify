import React from 'react'
import NotificationComp from '../components/NotificationComp.js'
import DashboardHeader from '../components/DashboardHeader.js'
import Footer from '../components/Footer.js'

const Notification = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader />
        <NotificationComp />
        <Footer />
    </div>
  )
}

export default Notification