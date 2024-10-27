import React from 'react'
import NotificationComp from '../components/NotificationComp'
import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'

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