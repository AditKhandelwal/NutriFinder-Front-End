import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category'; 
import GoalSelect from './components/GoalSelect/GoalSelect';
import PriceSelect from './components/PriceSelect/PriceSelect';
import DistanceSelect from './components/DistanceSelect/DistanceSelect';
import DisplaySelections from './components/DisplaySelections/DisplaySelections';
import IntroPage from './components/IntroPage/IntroPage';
import ResultsPage from './components/ResultsPage/ResultsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/categorySelect" element={<Category />} />
      <Route path="/goalSelect" element={<GoalSelect />} />
      <Route path="/priceSelect" element={<PriceSelect />} />
      <Route path="/distanceSelect" element={<DistanceSelect />} />
      <Route path="/displaySelections" element={<DisplaySelections />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default App;
