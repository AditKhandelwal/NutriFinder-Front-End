import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

const IntroPage = () => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/categorySelect');
  };

  return (
    <div className="intro-page">
      <div className="intro-content">
        <h2 className="intro-title">Welcome to NutriFinder!</h2>
        <p className="intro-description">
          Click continue to find your best fit food!
        </p>
        <button className="continue-button" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
      <div className="background-animation">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
    </div>
  );
};

export default IntroPage;
