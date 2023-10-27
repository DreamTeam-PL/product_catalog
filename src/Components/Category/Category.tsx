import React from 'react'
import './category.scss'

export const Category = () => {
  return (
    <div className='category'>
      <div className='category__img-background'>
        <img src={require('./category-phones.png')} alt='' className='category__img'></img>
      </div>
      <a href='#' className='category__link'>
        <p className='category__title'>Mobile phones</p>
      </a>
      <p className='category__count'>95 models</p>
    </div>
  )
}
