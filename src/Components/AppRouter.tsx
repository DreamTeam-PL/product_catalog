import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Favourites } from '../Pages/Favourites/Favourites'
import { Cart } from '../Pages/Cart/Cart'
import { NotFoundPage } from './NotFoundPage/NotFoundPage'
import { PhoneInfo } from './PhoneInfo/PhoneInfo'
import { Catalog } from '../Pages/Catalog/Catalog'
import { PageInProgress } from './PageInProgress/PageInProgress'

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Navigate to='/' replace={true} />} />
      <Route path='/phones' element={<Catalog />} />
      <Route path='/phones/:productSlug' element={<PhoneInfo />} />
      <Route path='/tablets' element={<PageInProgress />} />
      <Route path='/accesories' element={<PageInProgress />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
