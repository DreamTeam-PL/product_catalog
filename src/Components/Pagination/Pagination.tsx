import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const Pagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchParams] = useSearchParams();
  // const [pageNumbers, setPageNumbers] = useState([]);
  const [currentPage, setCurrentPage] = useState<string>('');
  
  useEffect(() => {
    setCurrentPage(() => searchParams.get('page') || '1');
    console.log('query', searchParams)
    console.log('query', searchParams.get('page'))
  }, [searchParams])

  const previousPageButtonDisable= (): boolean  => {
    if (currentPage !== '1') {
      return false
    }

    return true;
  }

  const nextPageButtonDisable= (): boolean  => {
    if (currentPage !== '6') {
      return false
    }

    return true;
  }

  const previousPage = () => {
    navigate(currentPath + `?page=${+currentPage - 1}`)
  }

  const nextPage = () => {
    navigate(currentPath + `?page=${+currentPage + 1}`)
  }
  
  return (
    <>
      <Button type='circle' icon='back' onClick={previousPage} disabled={previousPageButtonDisable()}/>
      <Button type='circle' value='1'/>
      <Button type='circle' value='2'/>
      <Button type='circle' value='3'/>
      <Button type='circle' value='4'/>
      <Button type='circle' icon='next' onClick={nextPage} disabled={nextPageButtonDisable()}/>
    </>
  )
}
