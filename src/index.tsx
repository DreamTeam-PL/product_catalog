import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './Styles/reset.scss';
import './Styles/fonts.scss';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLDivElement)
    .render(
        <Router>
          <App />
        </Router>
      )
