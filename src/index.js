import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Themecontext from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Themecontext.Provider value='Red'>
       <App />
    </Themecontext.Provider>
  </React.StrictMode>
);


