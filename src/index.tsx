import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './Styles/reset.scss'
import './Styles/index.scss'

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />)
