
import React from 'react'
import { Header } from './Components/Header/Header' 
import { Footer } from './Components/Footer/Footer'
import { AppRouter } from './Components/AppRouter'
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className='productCatalog'>
      <Header />
      <main className='content'>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
 
