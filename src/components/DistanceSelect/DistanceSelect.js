import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DistanceSelect.css';
import { useSelectionContext } from '../../SelectionContext';
import BackButton from '../BackButton/BackButton';


const DistanceSelect = () => {
  const [distance, setDistance] = useState(25);
  const navigate = useNavigate();
  const { selectedCategory, selectedGoal, selectedPrice, setSelections } = useSelectionContext();

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleSubmit = () => {
    setSelections(selectedCategory, selectedGoal, selectedPrice, distance);
    navigate('/displaySelections');
  };

  return (
    <div className="distance-select">
      <BackButton to="/PriceSelect" />
      <div><h2>Select Distance To Search</h2></div>
      <div className="distance-select-container">
        <div className="slider-container">
          <input
            type="range"
            min="1"
            max="50"
            value={distance}
            className="slider"
            onChange={handleDistanceChange}
          />
          <div className="slider-value-container">
            <span id="sliderValue">{distance}</span> miles
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DistanceSelect;