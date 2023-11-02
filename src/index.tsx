import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './Styles/reset.scss';
import './Styles/fonts.scss';
import { HashRouter as Router } from 'react-router-dom';
import { StorageProvider } from './Context/StorageContext';

createRoot(document.getElementById('root') as HTMLDivElement)
    .render(
        <StorageProvider>
          <Router>
            <App />
          </Router>
        </StorageProvider>
      )
