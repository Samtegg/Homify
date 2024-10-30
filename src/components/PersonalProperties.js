import React from 'react';
import '../index.css';
import recommendation1 from '../assets/recommendation1.png';
import recommendation2 from '../assets/recommendation2.png';
import recommendation3 from '../assets/recommendation3.png';
import recommendation4 from '../assets/recommendation4.png';
import recommendation5 from '../assets/recommendation5.png';
import PersonalPropertiesModal from './PersonalPropertiesModal.js';
import { useState } from 'react';

const PersonalProperties = () => {
    const properties = [
        { 
            id: 1, 
            name: "3 Bedroom Flat", 
            location: "Lekki Phase 1", 
            type: "Apartment", 
            price: "₦50,000,000", 
            image: recommendation1,
            description: "Excellent road connectivity, 24/7 electricity supply, gated community with top-notch security."
        },
        { 
            id: 2, 
            name: "2 Bedroom Bungalow", 
            location: "Ajah", 
            type: "House", 
            price: "₦35,000,000", 
            image: recommendation2,
            description: "Newly paved roads, stable power supply, close to shopping centers, serene environment."
        },
        { 
            id: 3, 
            name: "2 Bedroom Bungalow", 
            location: "Ajah", 
            type: "House", 
            price: "₦35,000,000", 
            image: recommendation3,
            description: "Newly paved roads, stable power supply, close to shopping centers, serene environment."
        },
        { 
            id: 4, 
            name: "2 Bedroom Bungalow", 
            location: "Ajah", 
            type: "House", 
            price: "₦35,000,000", 
            image: recommendation4,
            description: "Newly paved roads, stable power supply, close to shopping centers, serene environment."
        },
        { 
            id: 5, 
            name: "2 Bedroom Bungalow", 
            location: "Ajah", 
            type: "House", 
            price: "₦35,000,000", 
            image: recommendation5,
            description: "Newly paved roads, stable power supply, close to shopping centers, serene environment."
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='personal-properties-container margin-top'>
            <section id="seller-section" className="property-container margin-top2">
                <h2 className='margin-top'>My Properties</h2>
                <button onClick={openModal} className="upload-btn">Upload New Property</button>
                <PersonalPropertiesModal isOpen={isModalOpen} onClose={closeModal} />
                <ul className="property-list" id="property-list">
                    {properties.map(property => (
                        <li key={property.id}>
                            <img src={property.image} alt={property.name} className="property-image" />
                            <div className="property-details">
                                <h3 className='property-name'>{property.name}</h3>
                                <p>Location: {property.location}</p>
                                <p>Type: {property.type}</p>
                                <p>Price: {property.price}</p>
                                <p className="property-description">{property.description}</p>
                                <div className="property-actions">
                                    <button className="edit-btn">Edit Property</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default PersonalProperties;
