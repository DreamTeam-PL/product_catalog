import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './Styles/reset.scss'
import './Styles/fonts.scss'
import { HashRouter as Router } from 'react-router-dom'
import { StorageProvider } from './Context/StorageContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StorageProvider>
    <Router>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
  </StorageProvider>
)
