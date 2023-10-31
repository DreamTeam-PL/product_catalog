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
        <Card item={{
          id: 4,
          name: 'Iphone 1',
          quantity: 1,
          price: 169,
          img: ''}}
        />
        <Card item={{
          id: 6,
          name: 'Iphone 3',
          quantity: 1,
          price: 323,
          img: ''}}
        />
        <Card item={{
          id: 12,
          name: 'Iphone 7',
          quantity: 1,
          price: 666,
          img: ''}}
        />
        <Card item={{
          id: 99,
          name: 'Iphone 11',
          quantity: 1,
          price: 2312,
          img: ''}}
        />
        </div>
    </>
  );
};