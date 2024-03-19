import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PriceSelect.css';
import { useSelectionContext } from '../../SelectionContext';
import BackButton from '../BackButton/BackButton';

const priceOptions = [
  { value: 'low', label: '$' },
  { value: 'medium', label: '$$' },
  { value: 'high', label: '$$$' },
];

const PriceSelect = () => {
  const navigate = useNavigate();
  const { selectedCategory, selectedGoal, selectedPrice, selectedDistance, setSelections } = useSelectionContext();

  const handlePriceSelect = (price) => {
    setSelections(selectedCategory, selectedGoal, price.value, selectedDistance);
    navigate('/distanceSelect');
  };

  return (
    <div className="price-select-container">
      <BackButton to="/GoalSelect" />
      <h2>Please Select Price Preference</h2>
      <div className="price-grid">
        {priceOptions.map((price) => (
          <div
            key={price.value}
            className="price-square"
            onClick={() => handlePriceSelect(price)}
          >
            <p>{price.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSelect;