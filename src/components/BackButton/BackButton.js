import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css'; // Import your CSS file for styling

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(to); // Navigate to the specified route path
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      Back
    </button>
  );
};

export default BackButton;
