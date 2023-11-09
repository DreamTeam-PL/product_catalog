import React, { useEffect, useRef, useState } from 'react';
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
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ((type === 'newest') ? ProductService.getNewest() : ProductService.getDiscounted()).then(result => setCatalogItems(result.data));
  }, [type]);

  useEffect(() => {
    const handleResize = () => { 
      if(gridRef.current !== null) { 
        const gridGap = parseInt(window.getComputedStyle(gridRef.current).gap);
        const maxPush =  gridRef.current.scrollWidth - gridRef.current.clientWidth + gridGap;

        if ((maxPush * -1) - scrollPosition > 0) {
          setScrollPosition(maxPush * -1);
        }
        
      }
    };
    
    if(gridRef.current !== null) { 
      gridRef.current.style.transform = `translateX(${scrollPosition}px)`;
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [scrollPosition])
  
  const handleScroll = (dir: 'right' | 'left') => { 
      setScrollPosition(scroll => {
        if(gridRef.current !== null) { 
          const gridGap = parseInt(window.getComputedStyle(gridRef.current).gap);
          const pushPixels:number = ((gridRef.current?.firstElementChild as HTMLElement)?.offsetWidth || 0) + gridGap;
          const maxPush =  gridRef.current.scrollWidth - gridRef.current.clientWidth + gridGap;    

          if(dir === 'right') { 
            return ((scroll-pushPixels)*-1 >= maxPush - 20) ? maxPush * -1 : scroll - pushPixels;
          }

          return scroll + pushPixels > -20 ? 0 : scroll + pushPixels;
        }
        return scroll;
      }); 
      
  }

  return (
    <section className='cardsWidget'>
      <section className='cardsWidget__header'>
        <p className="cardsWidget__title">{type === 'newest' ? 'Brand new models' : 'Hot prices'}</p>
        <div className="cardsWidget__actions">
          <Button 
            type="circle"
            icon="chevron-left"
            onClick={() => handleScroll('left')}
          />
          <Button 
            type="circle"
            icon="chevron-right"
            onClick={() => handleScroll('right')}
          />
        </div>
      </section>
      <main className='cardsWidget__products'>
        <div className='cardsWidget__grid' ref={gridRef} style={{ transition: 'transform 0.3s ease' }}>
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