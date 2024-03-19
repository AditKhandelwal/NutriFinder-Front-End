import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoalSelect.css';
import vegetarian from './vegetarian.png';
import protein from './protein.png';
import lowcalorie from './low-calorie.png';
import { useSelectionContext } from '../../SelectionContext';
import BackButton from '../BackButton/BackButton';


const goals = [
  { value: 'low', label: 'Low Calorie', firecount: '🔥' },
  { value: 'medium', label: 'Medium Calorie', firecount: '🔥🔥' },
  { value: 'high', label: 'High Calorie', firecount: '🔥🔥🔥' },
];

const GoalSelect = () => {
  const navigate = useNavigate();
  const { selectedCategory, selectedGoal, selectedPrice, selectedDistance, setSelections } = useSelectionContext();

  const handleGoalSelect = (goal) => {
    setSelections(selectedCategory, goal.value, selectedPrice, selectedDistance);
    navigate('/priceSelect');
  };

  return (
    <div className="goal-select-container">
      <BackButton to="/categorySelect" />
      <h2>Please select which goal fits closest</h2>
      <div className="goal-grid">
        {goals.map((goal) => (
          <div
            key={goal.value}
            className="goal-square"
            onClick={() => handleGoalSelect(goal)}
          >
            <p>{goal.label}</p>
            <p classname='fire'>{goal.firecount}</p>
            {/* <img src={goal.imageUrl} alt={goal.label} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalSelect;