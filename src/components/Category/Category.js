import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';
import burgerImage from './burger.png';
import comingsoon from './comingsoon.png';
import { useSelectionContext } from '../../SelectionContext';
import BackButton from '../BackButton/BackButton';

const Category = () => {
  const navigate = useNavigate();
  const { selectedCategory, setSelections } = useSelectionContext();

  const categories = [
    { value: 'Hamburger', label: 'Burgers', imageUrl: burgerImage },
    { value: 'coming-soon-1', label: 'Coming Soon', imageUrl: comingsoon },
    { value: 'coming-soon-2', label: 'Coming Soon', imageUrl: comingsoon },
  ];

  useEffect(() => {
    if (selectedCategory) {
      navigate('/goalSelect');
    }
  }, [selectedCategory, navigate]);

  const handleClick = (category) => {
    setSelections(category.value, null, null, null);
  };

  return (
    <div className="category-container">
      <h2>SELECT A FOOD CATEGORY</h2>
      <BackButton to="/" />
      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.value}
            className="category-square"
            onClick={() => handleClick(category)}
          >
            <p>{category.label}</p>
            <img src={category.imageUrl} alt={category.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;