import React from 'react'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Newproperty from '../assets/newproperty.png'
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
import Apartment1 from '../assets/apartment1.png'
import Apartment2 from '../assets/apartment2.png'
import Apartment3 from '../assets/apartment3.png'
import Apartment4 from '../assets/apartment4.png'
import Addressicon from '../assets/address-icon.png'
import Telephoneicon from '../assets/telephone-icon.png'
import Emailicon from '../assets/email-icon.png'
import Facebookicon from '../assets/facebook-icon.png'
import Twittericon from '../assets/twitter-icon.png'
import Instagramicon from '../assets/instagram-icon.png'

const LandingPage = () => {
  return (
    <div className="homify-container">
    <div className="homify-firstsection">
        <div className="firstsection-background">
            <Header />
           
                <div class="homify-herosection" id="home">
                    <h1>Homify Helping to Find <br /> the Dream Home.</h1>
                    <p>Homify is here to find the best house for you,<br/> whether for sale or rent, with reliable sources.</p>
                    <div class="hero-buttoncontainer">
                        <button class="hero-button"><a href="#recommendation">Find a House</a></button>
                        <a href="#recommendation">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3334 34.8333C17.905 34.8342 17.4899 34.685 17.1601 34.4117C16.9744 34.2578 16.821 34.0687 16.7085 33.8554C16.596 33.6421 16.5267 33.4087 16.5046 33.1686C16.4824 32.9285 16.5079 32.6864 16.5795 32.4561C16.651 32.2258 16.7673 32.0119 16.9217 31.8267L25.1351 22L17.2151 12.155C17.0628 11.9675 16.949 11.7517 16.8804 11.5201C16.8118 11.2885 16.7896 11.0456 16.8152 10.8053C16.8407 10.5651 16.9135 10.3323 17.0293 10.1203C17.1451 9.90832 17.3017 9.72129 17.4901 9.57C17.6797 9.4031 17.9019 9.27721 18.1425 9.20023C18.3832 9.12325 18.6371 9.09685 18.8885 9.12267C19.1398 9.14849 19.3831 9.22598 19.6031 9.35029C19.823 9.47459 20.0149 9.64302 20.1667 9.845L29.0217 20.845C29.2914 21.173 29.4388 21.5845 29.4388 22.0092C29.4388 22.4338 29.2914 22.8453 29.0217 23.1733L19.8551 34.1733C19.6711 34.3952 19.4375 34.5706 19.1731 34.6853C18.9087 34.7999 18.621 34.8507 18.3334 34.8333Z" fill="white"/>
                            </svg>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
        

        <div class="homify-services" id="services">
            <div class="services-header">
                <h2>Our Services.</h2>
                <h4>The dream home is here to be a solution for you.</h4>
            </div>
            <div class="services-cardcontainer">
                <div class="services-card">
                    <div class="services-image">
                        <img src={Newproperty} alt=""/>
                    </div>
                    <h3>New Property.</h3>
                    <p>The dream home is now a reality. Buy a new house with the best facilities in a comfortable environment.</p>
                </div>
                <div class="services-card2">
                    <div class="services-image">
                        <img src={Newproperty} alt=""/>
                    </div>
                    <h3>Rent a House.</h3>
                    <p>Rent a beautiful house for your family, the best choice for your family's residence.</p>
                </div>
                <div class="services-card">
                    <div class="services-image">
                        <img src={Newproperty} alt=""/>
                    </div>
                    <h3>Buy a House.</h3>
                    <p>Buy the perfect house at the best price with guaranteed quality from a reliable source.</p>
                </div>
            </div>
        </div>

   
        <div class="homify-navigate">
            <div class="navigate-first">
                <h2>Find Your Dream Home.</h2>
                <h4>Now you can save all the stress, time, and hidden costs, with hundreds of houses for you.</h4>
            </div>
            <div class="navigate-second">
                <h3>Navigate to our various Services</h3>
            </div>
            <div class="navigate-third">
                <div class="navigate-options">
                    <p class="sell"><a href="#">Sell</a></p>
                    <p class="rent"><a href="#">Rent</a></p>
                    <p class="new-property"><a href="#">New Property</a></p>
                </div> 
            </div>
        </div>

        <div class="homify-recommendation" id="recommendation">
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

            <div class="features-container" id="features">
                <div class="features-header">
                    <h3> House Features</h3>
                    <button id="viewAllBtn">View All..</button>
                </div>
                <div class="features-image">
                    <svg class ="arrow left-arrow" width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30.5" cy="30.5" r="30.5" fill="#00985B"/>
                        <path d="M35.8714 44.5016C36.3679 44.5025 36.849 44.3314 37.2313 44.0179C37.4465 43.8414 37.6243 43.6246 37.7547 43.3799C37.8851 43.1352 37.9654 42.8675 37.991 42.5921C38.0167 42.3167 37.9872 42.039 37.9042 41.7748C37.8213 41.5107 37.6865 41.2654 37.5075 41.0529L27.9881 29.7815L37.1676 18.4891C37.3441 18.2741 37.4759 18.0266 37.5554 17.7609C37.6349 17.4952 37.6606 17.2166 37.631 16.9411C37.6014 16.6655 37.5171 16.3985 37.3828 16.1553C37.2486 15.9122 37.0671 15.6976 36.8488 15.5241C36.629 15.3327 36.3715 15.1883 36.0926 15.1C35.8137 15.0117 35.5193 14.9814 35.228 15.011C34.9367 15.0406 34.6548 15.1295 34.3998 15.2721C34.1449 15.4147 33.9224 15.6079 33.7465 15.8395L23.4834 28.4567C23.1709 28.833 23 29.305 23 29.792C23 30.2791 23.1709 30.7511 23.4834 31.1274L34.1077 43.7445C34.3209 43.999 34.5917 44.2002 34.8981 44.3317C35.2045 44.4632 35.538 44.5214 35.8714 44.5016Z" fill="white"/>
                    </svg>
                        
                    <img src={Apartment1} alt="" />
                    <img src={Apartment2} alt="" />
                    <img src={Apartment3} alt="" />
                    <img src={Apartment4} alt="" />
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30.5" cy="30.5" r="30.5" transform="matrix(-1 0 0 1 61 0)" fill="#00985B"/>
                        <path d="M25.1286 44.4852C24.6321 44.4862 24.151 44.315 23.7687 44.0016C23.5535 43.825 23.3757 43.6082 23.2453 43.3635C23.1149 43.1189 23.0346 42.8512 23.009 42.5758C22.9833 42.3003 23.0128 42.0226 23.0958 41.7585C23.1787 41.4943 23.3135 41.249 23.4925 41.0365L33.0119 29.7652L23.8324 18.4728C23.6559 18.2577 23.5241 18.0102 23.4446 17.7445C23.3651 17.4788 23.3394 17.2002 23.369 16.9247C23.3986 16.6492 23.4829 16.3821 23.6172 16.139C23.7514 15.8958 23.9329 15.6813 24.1512 15.5078C24.371 15.3163 24.6285 15.1719 24.9074 15.0836C25.1863 14.9953 25.4807 14.965 25.772 14.9947C26.0633 15.0243 26.3452 15.1132 26.6002 15.2557C26.8551 15.3983 27.0776 15.5915 27.2535 15.8232L37.5166 28.4404C37.8291 28.8166 38 29.2886 38 29.7757C38 30.2628 37.8291 30.7347 37.5166 31.111L26.8923 43.7282C26.6791 43.9827 26.4083 44.1838 26.1019 44.3154C25.7955 44.4469 25.462 44.5051 25.1286 44.4852Z" fill="white"/>
                    </svg>
                        
                 
                </div>
            </div>
        </div>

    
        <div class="contact-container" id="contact">
            <div class="contact-darkbackground">
                <div class="first-contact">
                    <h4>Need a Consultation..? Please contact us. We are Ready to Help.</h4>
                    <div class="contact-details">
                        <h5>Contact</h5>
                        <div class="contact-info">
                            <img src={Addressicon} alt="" />
                            <a href=""><p>4th Avenue, Kasumu Street, Ikeja, Lagos</p></a>
                        </div>
                        <div class="contact-info">
                            <img src={Telephoneicon} alt="" />
                            <a href=""><p>022-6545-2041</p></a>
                        </div>
                        <div class="contact-info">
                            <img src={Emailicon} alt="" />
                            <a href=""><p>osimesimon@gmail.com</p></a>
                        </div>
                    </div>
                    <div class="contact-image">
                        <a href=""><img src={Facebookicon} /></a>
                        <a href=""><img src={Twittericon} /></a>
                        <a href=""><img src={Instagramicon} /></a>
                        <a href=""><p>Homify</p></a>
                    </div>
                </div>
                
                <div class="contact-questions">
                    <h3>Any questions..?</h3>
                    <form class="contact-form">
                        <input type="email" placeholder="Enter your email here..." required/>
                        <input type="text" rows="4" placeholder="Your question.." required/>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
           
        </div>


    <Footer />
</div>
  )
}

export default LandingPage