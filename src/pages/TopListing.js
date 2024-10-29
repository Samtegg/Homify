import React from 'react'
import '../index.css';
import DashboardHeader from '../components/DashboardHeader.js'
import Footer from '../components/Footer.js'

import HighProperties from '../components/HighProperties.js';

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