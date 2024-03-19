import React, { useState } from 'react';
import './DisplaySelections.css';
import { useSelectionContext } from '../../SelectionContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import PlaceBox from '../ResultsPage/PlaceBox'; // Update the import path as needed

const DisplaySelections = () => {
  const { selectedCategory, selectedGoal, selectedPrice, selectedDistance } = useSelectionContext();
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const sendDataToAPI = () => {
    fetch('http://127.0.0.1:5000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: selectedCategory,
        goal: selectedGoal,
        price: selectedPrice,
        distance: selectedDistance,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from API:', data);
        setPlaces(data);
        // Redirect to a new page upon successful data retrieval
        navigate('/results', { state: { places: data } });

      })
      .catch(error => {
        console.error('Error sending data to API:', error);
      });
  };

  return (
    <div className="display-selections-container">
      <h1>Selected Values</h1>
      <div className="selection-item">
        <span className="label">Category:</span>
        <span className="value">{selectedCategory}</span>
      </div>
      <div className="selection-item">
        <span className="label">Goal:</span>
        <span className="value">{selectedGoal}</span>
      </div>
      <div className="selection-item">
        <span className="label">Price:</span>
        <span className="value">{selectedPrice}</span>
      </div>
      <div className="selection-item">
        <span className="label">Distance:</span>
        <span className="value">{selectedDistance}</span>
      </div>
      <button onClick={sendDataToAPI}>See Results</button>
    </div>
  );
};

export default DisplaySelections;
