import React from 'react';
import { Header } from './Components/Header';
import { Body } from './Components/Body';
import { Footer } from './Components/Footer';

export const App: React.FC = () => {
  return (
    <div className="productCatalog">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
