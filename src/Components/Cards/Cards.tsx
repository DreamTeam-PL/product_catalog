import './cards.scss';
import { Card } from "../Card/Card"; 
import { Button } from '../Button/Button';
import { useCardsWidget } from './useCardsWidget'; 
import { ListResult } from '../../Api/Products';

type CardsProps = { 
  title: string; 
  requestServer: () => Promise<ListResult>;
  showDiscount?: boolean;
}

export const CardsWidget: React.FC<CardsProps> = ({ title, requestServer, showDiscount=false }) => {
  const {
    grid, 
    cards, 
    onScroll,
    isNextDisabled,
    isPreviousDisabled,
  } = useCardsWidget(requestServer);

  return (
    <section className='cardsWidget'>
      <section className='cardsWidget__header'>
        <p className="cardsWidget__title">{title}</p>
        <div className="cardsWidget__actions">
          <Button 
            type="circle"
            icon="chevron-left"
            disabled={isPreviousDisabled}
            onClick={() => onScroll('left')}
          />
          <Button 
            type="circle"
            icon="chevron-right"
            disabled={isNextDisabled}
            onClick={() => onScroll('right')}
          />
        </div>
      </section>
      <main className={`cardsWidget__products${!isPreviousDisabled ? ' cardsWidget__products--pushedLeft' : ''}${!isPreviousDisabled ? ' cardsWidget__products--pushedRight' : ''}`}>
        <div className='cardsWidget__grid'
          ref={grid}
          style={{ transition: 'transform 0.3s ease' }}
        >
          {cards.map(product => <Card 
            key={product.id}
            className="cardsWidget__card"
            item={product}
            showDiscount={showDiscount}
          />)} 
        </div>
      </main>
    </section>
  );
};