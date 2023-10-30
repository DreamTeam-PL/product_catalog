import React from 'react';
import './cards.scss';
import { Card } from "../Card/Card";

type CardsProps = {
  title: string;
}

export const Cards: React.FC<CardsProps> = ({ title }) => {
  return (
    <>
        <p className="title">{title}</p>
        <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  );
};