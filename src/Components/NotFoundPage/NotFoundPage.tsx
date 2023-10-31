import React from 'react'
import { Link } from 'react-router-dom';
import './notFoundPage.scss'

export const NotFoundPage: React.FC = () => {
  return (
    <div className='page-not-found'>
      <h1 className='landing__title page-not-found__title'>Page not found.</h1>
      <p className='page-not-found__text'>Return to <Link to={'/home'} className='page-not-found__link'>Home page</Link>.</p>
    </div>
  )
}
