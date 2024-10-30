import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../index.css';

const PersonalPropertiesModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name_of_property: "",
    address: "",
    price: "",
    type_of_property: "",
    transaction: "",
    bedroom: "",
    bathroom: "",
    house_area: "",
    image: null // Use null to represent no file selected initially
  });

  const [error, setError] = useState(null);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0] // Capture the file object
    }));
  };

  const handleSave = async () => {
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('/api/properties', data, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the header for file upload
        }
      });
      console.log('Response data:', response.data);
      onClose();
    } catch (error) {
      console.error('Error saving data:', error);
      setError('Failed to save data');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-container">
      <div className="userdata-modal-content" ref={modalRef}>
        <div className="add-text-header">
          <h3>Add Property</h3>
          <span onClick={onClose} className="close">&times;</span>
        </div>
        <div id="user-data-content-container-location" className="margin-top">
          <form className="biodata-form">
            <div className="three-forms">
              <div className="form_element">
                <label className="form-label" htmlFor="name_of_property">Name of Property</label>
                <input
                  className="modal-input"
                  type="text"
                  id="name_of_property"
                  name="name_of_property"
                  value={formData.name_of_property}
                  onChange={handleChange}
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="address">Address</label>
                <input
                  className="modal-input"
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="price">Price</label>
                <input
                  className="modal-input"
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="three-forms">
              <div className="form_element">
                <label className="form-label" htmlFor="image">Image</label>
                <input
                  className="modal-input"
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleFileChange} // Use the new handler for file input
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="type_of_property">Type of Property</label>
                <input
                  className="modal-input"
                  type="text"
                  id="type_of_property"
                  name="type_of_property"
                  value={formData.type_of_property}
                  onChange={handleChange}
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="transaction">Transaction Type</label>
                <select
                  className="modal-input"
                  id="transaction"
                  name="transaction"
                  value={formData.transaction}
                  onChange={handleChange}
                >
                  <option value="">Select Transaction</option>
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </div>
            </div>
            <div className="three-forms">
              <div className="form_element">
                <label className="form-label" htmlFor="bedroom">Bedrooms</label>
                <input
                  className="modal-input"
                  type="number"
                  id="bedroom"
                  name="bedroom"
                  value={formData.bedroom}
                  onChange={handleChange}
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="bathroom">Bathrooms</label>
                <input
                  className="modal-input"
                  type="number"
                  id="bathroom"
                  name="bathroom"
                  value={formData.bathroom}
                  onChange={handleChange}
                />
              </div>
              <div className="form_element">
                <label className="form-label" htmlFor="house_area">House Area (sq ft)</label>
                <input
                  className="modal-input"
                  type="number"
                  id="house_area"
                  name="house_area"
                  value={formData.house_area}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            <div className="modal-button-container margin-bottom">
              <button type="button" className="generate-button" onClick={handleSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalPropertiesModal;
