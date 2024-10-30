import React from 'react'
import recommendation1 from '../assets/recommendation1.png';
import recommendation2 from '../assets/recommendation2.png';
import recommendation3 from '../assets/recommendation3.png';
import recommendation4 from '../assets/recommendation4.png';


const HighProperties = () => {

    const topListings = [
		
        { 
            id: 3, 
            name: "Luxury 5 Bedroom Duplex", 
            location: "Banana Island", 
            type: "House", 
            price: "₦500,000,000", 
            image: recommendation1,
            description: "Private access road, uninterrupted power supply, 24/7 security, proximity to high-end amenities."
        },
        { 
            id: 4, 
            name: "Studio Apartment", 
            location: "Victoria Island", 
            type: "Apartment", 
            price: "₦25,000,000", 
            image: recommendation2,
            description: "Central location, good road network, constant electricity, modern security systems in place."
        },
        { 
            id: 4, 
            name: "Studio Apartment", 
            location: "Victoria Island", 
            type: "Apartment", 
            price: "₦25,000,000", 
            image: recommendation3,
            description: "Central location, good road network, constant electricity, modern security systems in place."
        },
        { 
            id: 4, 
            name: "Studio Apartment", 
            location: "Victoria Island", 
            type: "Apartment", 
            price: "₦25,000,000", 
            image: recommendation4,
            description: "Central location, good road network, constant electricity, modern security systems in place."
        }
    ];

    

  return (
        <div className='personal-properties-container margin-top'>
            <section class="property-container margin-top2">
                <h2>Top Listings</h2>
                <ul class="property-list" id="top-listings">
                    {
                        topListings.map(top => (
                            <li key={top.id}>
                                <img src={top.image} alt={top.name} className="property-image" />
                                <div class="property-details">
                                    <h3>{top.name}</h3>
                                    <p><strong>Location: </strong>{top.location}</p>
                                    <p><strong>Type:</strong> {top.type}</p>
                                    <p><strong>Price:</strong> {top.price}</p>
                                    <p>{top.description}</p>
                                </div>

                            </li>
                        ))
                    }
                    
                </ul>
            </section>
        </div>
  )
}

export default HighProperties