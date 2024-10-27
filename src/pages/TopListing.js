import React from 'react'
import '../index.css';
import DashboardHeader from '../components/DashboardHeader'
import Footer from '../components/Footer'

import HighProperties from '../components/HighProperties';

const TopListing = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader />
        <HighProperties />
        <Footer />
    </div>
  )
}

export default TopListing