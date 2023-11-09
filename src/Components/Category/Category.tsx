import React from 'react'
import './category.scss'
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type CategoryProps = {
  title: string;
  productType: string
  count: number
}

export const Category: React.FC<CategoryProps> = ({ 
  title,
  productType,
  count,
 }) => {
  
  return (
    <div className='category'>
      <Link to={`/${productType}`} className='category__link'>
        <div className={classNames('category__background', {
              'category__background--phones': productType === 'phones',
              'category__background--tablets': productType === 'tablets',
              'category__background--accessories': productType === 'accessories',
            }) }>
          <div 
            className={classNames('category__img', {
              'category__img--phones': productType === 'phones',
              'category__img--tablets': productType === 'tablets',
              'category__img--accessories': productType === 'accessories',
            }) }
          >
          </div>
        </div>
        <p className='category__title'>{title}</p>
        <p className='category__count'>{`${count} models`}</p>
      </Link>
    </div>
  )
}
