import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext();

export const useSelectionContext = () => {
  return useContext(SelectionContext);
};

export const SelectionProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(25);

  const setSelections = (category, goal, price, distance) => {
    console.log('setSelections called with:', category, goal, price, distance);
    setSelectedCategory(category);
    setSelectedGoal(goal);
    setSelectedPrice(price);
    setSelectedDistance(distance);
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedCategory,
        selectedGoal,
        selectedPrice,
        selectedDistance,
        setSelections,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};