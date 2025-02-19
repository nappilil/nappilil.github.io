import { createRoot } from 'react-dom/client'
import './index.css';
import App from './components/App.jsx'
import { HashRouter } from 'react-router-dom'
import React from 'react';

createRoot(document.getElementById('root')).render( // wrap app in router
    <HashRouter>
      <App />
    </HashRouter>,
)
