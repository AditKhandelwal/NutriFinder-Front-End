import React from 'react';
import './PlaceComponent.css'; // Assuming you have a CSS file for styling the place component

const PlaceComponent = ({ name, distance, photoUrl }) => {
  return (
    <div className="place-container">
      <h2>{name}</h2>
      <p>Distance: {distance} miles</p>
      <img src={photoUrl} alt={name} />
    </div>
  );
};

const PlacesPage = ({ places }) => {
  return (
    <div className="places-page">
      <h1>Places</h1>
      <div className="places-container">
        {places.map(place => (
          <PlaceComponent
            key={place.place_id}
            name={place.name}
            distance={place.distance}
            photoUrl={place.photo_urls[0]} // Assuming you want to display the first photo
          />
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;
