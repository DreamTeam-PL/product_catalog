import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Landing } from '../Pages/Landing';

export const AppRouter: React.FC = () => {
  return (<Routes>
            <Route path="/" element={<Landing />} /> 
    </Routes>);
};