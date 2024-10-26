import React from 'react'
import '../index.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="homify-container">
    <div className="homify-firstsection">
        <div className="firstsection-background">
            <Header />

            {/* Hero Section */}
            <div className="homify-herosection" id="home">
                <h1>Homify Helping to Find <br /> the Dream Home.</h1>
                <p>Homify is here to find the best house for you,<br /> whether for sale or rent, with reliable sources.</p>
                <div className="hero-buttoncontainer">
                    <button className="hero-button"><a href="#recommendation">Find a House</a></button>
                    <a href="#recommendation">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3334 34.8333C17.905 34.8342 17.4899 34.685 17.1601 34.4117C16.9744 34.2578 16.821 34.0687 16.7085 33.8554C16.596 33.6421 16.5267 33.4087 16.5046 33.1686C16.4824 32.9285 16.5079 32.6864 16.5795 32.4561C16.651 32.2258 16.7673 32.0119 16.9217 31.8267L25.1351 22L17.2151 12.155C17.0628 11.9675 16.949 11.7517 16.8804 11.5201C16.8118 11.2885 16.7896 11.0456 16.8152 10.8053C16.8407 10.5651 16.9135 10.3323 17.0293 10.1203C17.1451 9.90832 17.3017 9.72129 17.4901 9.57C17.6797 9.4031 17.9019 9.27721 18.1425 9.20023C18.3832 9.12325 18.6371 9.09685 18.8885 9.12267C19.1398 9.14849 19.3831 9.22598 19.6031 9.35029C19.823 9.47459 20.0149 9.64302 20.1667 9.845L29.0217 20.845C29.2914 21.173 29.4388 21.5845 29.4388 22.0092C29.4388 22.4338 29.2914 22.8453 29.0217 23.1733L19.8551 34.1733C19.6711 34.3952 19.4375 34.5706 19.1731 34.6853C18.9087 34.7999 18.621 34.8507 18.3334 34.8333Z" fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    {/* Services */}
    <div className="homify-services" id="services">
        <div className="services-header">
            <h2>Our Services.</h2>
            <h4>The dream home is here to be a solution for you.</h4>
        </div>
        <div className="services-cardcontainer">
            <div className="services-card">
                <div className="services-image">
                    <img src="./assets/newproperty.png" alt="New Property" />
                </div>
                <h3>New Property.</h3>
                <p>The dream home is now a reality. Buy a new house with the best facilities in a comfortable environment.</p>
            </div>
            <div className="services-card2">
                <div className="services-image">
                    <img src="./assets/newproperty.png" alt="Rent a House" />
                </div>
                <h3>Rent a House.</h3>
                <p>Rent a beautiful house for your family, the best choice for your family's residence.</p>
            </div>
            <div className="services-card">
                <div className="services-image">
                    <img src="./assets/newproperty.png" alt="Buy a House" />
                </div>
                <h3>Buy a House.</h3>
                <p>Buy the perfect house at the best price with guaranteed quality from a reliable source.</p>
            </div>
        </div>
    </div>

    {/* Navigation */}
    <div className="homify-navigate">
        <div className="navigate-first">
            <h2>Find Your Dream Home.</h2>
            <h4>Now you can save all the stress, time, and hidden costs, with hundreds of houses for you.</h4>
        </div>
        <div className="navigate-second">
            <h3>Navigate to our various Services</h3>
        </div>
        <div className="navigate-third">
            <div className="navigate-options">
                <p className="sell"><a href="#">Sell</a></p>
                <p className="rent"><a href="#">Rent</a></p>
                <p className="new-property"><a href="#">New Property</a></p>
            </div>
        </div>
    </div>

    {/* Recommendations */}
    <div className="homify-recommendation" id="recommendation">
        <div className="recommendation-container">
            <h2>House Recommendations for You</h2>
            <div className="recommendation-searchcontaiiner">
                <div className="recommendation-search">
                    <input type="text" placeholder="search by location, ID, Property" />
                    <button type="button">Search</button>
                </div>
                <div className="recommendation-filter">
                    <div className="house-filter">
                        <img src="./assets/house-style.png" alt="House Style" />
                        <p>House Type</p>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.24995 3.90002L6.49995 7.15002L9.74995 3.90002L11.05 4.55002L6.49995 9.10002L1.94995 4.55002L3.24995 3.90002Z" fill="#00985B" />
                        </svg>
                    </div>
                    <div className="house-filter">
                        <img src="./assets/price-range.png" alt="Price Range" />
                        <p>Price Range</p>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.24995 3.90002L6.49995 7.15002L9.74995 3.90002L11.05 4.55002L6.49995 9.10002L1.94995 4.55002L3.24995 3.90002Z" fill="#00985B" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="recommendation-secondcontainer">
                <div className="recommendation-card">
                    <div className="recommendation-card-image">
                        <img src="./assets/h1.png" alt="House 1" />
                    </div>
                    <div className="recommendation-card-content">
                        <h3>3 Bedroom Apartment</h3>
                        <p>Located at 1234 Elm Street. This spacious apartment is perfect for families.</p>
                        <button type="button" className="card-button">View More</button>
                    </div>
                </div>
                <div className="recommendation-card">
                    <div className="recommendation-card-image">
                        <img src="./assets/h2.png" alt="House 2" />
                    </div>
                    <div className="recommendation-card-content">
                        <h3>2 Bedroom Bungalow</h3>
                        <p>Perfect for a small family. Located in a serene environment.</p>
                        <button type="button" className="card-button">View More</button>
                    </div>
                </div>
                <div className="recommendation-card">
                    <div className="recommendation-card-image">
                        <img src="./assets/h3.png" alt="House 3" />
                    </div>
                    <div className="recommendation-card-content">
                        <h3>4 Bedroom Duplex</h3>
                        <p>Luxury living at its finest. Contact us for more details.</p>
                        <button type="button" className="card-button">View More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <Footer />
</div>
  )
}

export default LandingPage