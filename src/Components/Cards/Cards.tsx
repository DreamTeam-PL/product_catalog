import React, { useEffect, useState } from 'react';
import './cards.scss';
import { Card } from "../Card/Card";
import { ProductService } from '../../Api/Products';
import { Product } from '../../types/types';
import { Button } from '../Button/Button';

type CardsProps = { 
  type: 'newest' | 'discount';
}

export const Cards: React.FC<CardsProps> = ({ type }) => {
  const [catalogItems, setCatalogItems] = useState<Product[]>([]);

  useEffect(() => {
    ((type === 'newest') ? ProductService.getNewest() : ProductService.getDiscounted()).then(result => setCatalogItems(result.data));
  }, [type]);
  
  return (
    <section className='cardsWidget'>
      <section className='cardsWidget__header'>
        <p className="cardsWidget__title">{type === 'newest' ? 'Brand new models' : 'Hot prices'}</p>
        <div className="cardsWidget__actions">
          <Button 
            type="circle"
            icon="chevron-left"
          />
          <Button 
            type="circle"
            icon="chevron-right"
          />
        </div>
      </section>
      <main className='cardsWidget__products'>
        <div className='cardsWidget__grid'>
          {catalogItems.map(product => <Card 
            key={product.id}
            className="cardsWidget__card"
            item={product}
            showDiscount={type === 'discount'}
          />)}
        </div>
      </main>
    </section>
  );
};