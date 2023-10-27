import { AppRouter } from './Components/AppRouter'; 
import React from 'react';
import { Header } from './Components/Header/Header';
import { Body } from './Components/Body/Body';
import { Footer } from './Components/Footer/Footer';

export const App: React.FC = () => {
  return (<>  
    <AppRouter />
    </>);
};
