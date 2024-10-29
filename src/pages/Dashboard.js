import React from 'react'
import Housestyle from '../assets/house-style.png'
import Pricerange from '../assets/price-range.png'
import Recommendation1 from '../assets/recommendation1.png'
import Recommendation2 from '../assets/recommendation2.png'
import Recommendation3 from '../assets/recommendation3.png'
import Recommendation4 from '../assets/recommendation4.png'
import Recommendation5 from '../assets/recommendation5.png'
import Recommendation6 from '../assets/recommendation6.png'
import Minibedicon from '../assets/mini-bed-icon.png'
import Bathicon from '../assets/bath-icon.png'
import Houseareaicon from '../assets/house-area-icon.png'
import DashboardHeader from '../components/DashboardHeader.js'
import Footer from '../components/Footer.js'



const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <DashboardHeader />
            <div class="homify-recommendation margin-top2 dashcontainer-child " id="recommendation">
                <div class="recommendation-container">
                    <h2>House Recommendations for You</h2>
                    <div class="recommendation-searchcontaiiner">
                        <div class="recommendation-search">
                            <input type="text" placeholder="search by location, ID, Property" />
                            <button type="button">Search</button>
                        </div>
                        <div class="recommendation-filter">
                            <div class="house-filter">
                                <img src={Housestyle} alt="house-icon" />
                                <p>House Type</p>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.24995 3.90002L6.49995 7.15002L9.74995 3.90002L11.05 4.55002L6.49995 9.10002L1.94995 4.55002L3.24995 3.90002Z" fill="#00985B"/>
                                </svg>
                            </div>
                            <div class="house-filter">
                                <img src={Pricerange} alt="house-icon" />
                                <p>Price Range</p>
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.24995 3.90002L6.49995 7.15002L9.74995 3.90002L11.05 4.55002L6.49995 9.10002L1.94995 4.55002L3.24995 3.90002Z" fill="#00985B"/>
                                </svg>   
                            </div>
                        </div>
                    </div>
                    
                    <div class="recommendation-secondcontainer">
                        <div class="recommendation-card">
                            <img src={Recommendation1} alt="" />
                            <div  class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="recommendation-card">
                            <img src={Recommendation2} alt="" />
                            <div class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="recommendation-card"> 
                            <img src={Recommendation3} alt="" />
                            <div class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="recommendation-card">
                            <img src={Recommendation4} alt="" />
                            <div class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="recommendation-card">
                            <img src={Recommendation5} alt="" />
                            <div class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                        <div class="recommendation-card">
                            <img src={Recommendation6} alt="" />
                            <div class="recommendation-carddetails">
                                <h4>N 6,000,000</h4>
                                <p>4th Avenue, Kasumu Street, Ikeja, Lagos</p>
                                <p>Rent</p>
                            </div>
                            <div class="inner-carddetails">
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Minibedicon} alt="" />
                                        <p>3</p>
                                    </div>
                                    <p>Bedroom</p>
                                </div>
                                <div class="innerdetails-content"> 
                                    <div class="innerdetails-image">
                                        <img src={Bathicon} alt="" />
                                        <p>4</p>
                                    </div>
                                    <p>Bathroom</p>
                                </div>
                                <div class="innerdetails-content">
                                    <div class="innerdetails-image">
                                        <img src={Houseareaicon} alt="" />
                                        <p>360m</p>
                                    </div>
                                    <p>House Area</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                    <div class="loadmore">
                        <p><a href="./user-dashboard/userdash.html">Load More...</a></p>
                    </div>
                </div>
            </div>
        <Footer />
    </div>
   
  )
}

export default Dashboard