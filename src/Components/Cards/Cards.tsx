import React, { useEffect, useState } from 'react';
import './cards.scss';
import { Card } from "../Card/Card";
import { ProductService } from '../../Api/Products';
import { Product } from '../../types/types';

type CardsProps = { 
  type: 'newest' | 'discount';
}

export const Cards: React.FC<CardsProps> = ({ type }) => {
  const [catalogItems, setCatalogItems] = useState<Product[]>([]);

  useEffect(() => {
    ((type === 'newest') ? ProductService.getNewest() : ProductService.getDiscounted()).then(result => setCatalogItems(result.data));
  }, [type]);
  
  return (
    <div className='hmm2'>
      <p className="title">{type === 'newest' ? 'Brand new models' : 'Hot prices'}</p>
      <div className='cards'>
        {catalogItems.map(product => <Card key={product.id} item={product}/>)}
      </div>
    </div>
  );
};