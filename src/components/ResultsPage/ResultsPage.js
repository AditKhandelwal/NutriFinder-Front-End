import React from 'react';
import { useLocation } from 'react-router-dom';
import PlaceBox from './PlaceBox'; // Import the PlaceBox component
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const { places } = location.state;

  // Render places if array is not empty
  if (places.length === 0) {
    return (
      <div className="results-page">
        <h2>No Options Available</h2>
        <p>There are no options given your preferences, please try again with different preferences</p>
        <button className="returnButton" onClick={() => window.location.href = '/'}>Return Home</button>
      </div>
    );
  }

  return (
    <div className="results-page">
      <h2 className='header'>Best Match</h2>
      <div className="places-container">
        {places.map((place, index) => (
          <PlaceBox key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
