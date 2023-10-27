import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Components/Header'; 
import { AppRouter } from './Components/AppRouter';
import { Footer } from './Components/Footer';
import './App.scss';

export const App: React.FC = () => {
  return (<>
    <Router>
      <Header />
      <AppRouter />
    </Router>
    <Footer />
    </>);
};
