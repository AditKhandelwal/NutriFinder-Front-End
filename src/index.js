import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { SelectionProvider } from './SelectionContext';

ReactDOM.render(
  <BrowserRouter>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
