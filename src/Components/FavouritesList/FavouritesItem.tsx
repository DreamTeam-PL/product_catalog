import React from 'react';
import './favouritesItem.scss';
import { useStorageContext } from '../../Context/StorageContext';

type ItemProps = {
    id: number,
    name: string,
    quantity: number,
    price: number,
    img: string,
    screen: string,
    capacity: string,
    ram: string,
    category: string,
    phoneId: string,
    itemId: string,
    fullPrice: number,
    color: string,
    year: number,
    image: string,
    remove: () => void,
    includes: () => void,
};

export const FavouritesItem: React.FC<ItemProps> = (item) => {
    const { cart } = useStorageContext();

    return (
        <div className='card'>
            <div className='card__img'>
                <img
                    className='img'
                    src={require('../Card/image2.png')}
                    alt={item.name} />
            </div>
            <div className="card__title">
                <p>{item.name}</p>
            </div>
            <div className="card__price">
                <p>${item.price}</p>
            </div>
            <div className="card__description">
                <div className="card__details">
                    <div className="card__details-left">Screen</div>
                    <div className="card__details-right">{item.screen}</div>
                </div>
                <div className="card__details">
                    <div className="card__details-left">Capacity</div>
                    <div className="card__details-right">{item.capacity}</div>
                </div>
                <div className="card__details">
                    <div className="card__details-left">RAM</div>
                    <div className="card__details-right">{item.ram}</div>
                </div>

            </div><div className="card__buttons">
                <button className='card__buttons-left' onClick={() => cart.add(item)}>Add to cart</button>
                <button className='card__buttons-right' onClick={item.remove}>
                    <div className="favourites">
                        <img
                            src={require('../Card/Favourites Filled (Heart Like).png')}
                            alt="Favoutites"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};