import React from 'react';
import './PlaceBox.css';

const PlaceBox = ({ place }) => {
  // Round the distance to one decimal place
  const roundedDistance = place.distance.toFixed(1);

  return (
    <div className="place-box">
      <img src={place.photo_urls[0]} alt={place.name} />
      <div className="place-details">
        <h3>{place.name}</h3>
        <p>Distance: {roundedDistance} miles</p>
        <p>Menu Item: {place.menuItem}</p>
        <p>Calories: {place.Calories}</p>
        <p>Protein: {place.Protein}g</p>
        <p>Price: {place.price}</p>
        <p>Address: {place.address}</p>
      </div>
    </div>
  );
};

export default PlaceBox;
