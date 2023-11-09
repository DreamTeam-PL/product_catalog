import React, { useEffect, useState } from 'react'
import { Button } from '../Button/Button';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './pagination.scss';

type Props = {
  totalAmount: number;
  itemsPerPage: number;
}

export const Pagination: React.FC<Props> = ({ totalAmount, itemsPerPage }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const numberOfPages = Math.ceil(totalAmount / itemsPerPage); 
  
  useEffect(() => {
    if (!searchParams.has('page')) {
      searchParams.set('page', '1');
      navigate(currentPath + `?${searchParams.toString()}`, {replace: true});
    }

    setCurrentPage(() => searchParams.get('page') ? Number(searchParams.get('page')) : 1);
  }, [searchParams])
  
  const previousPageButtonDisable = currentPage === 1;
  const nextPageButtonDisable = currentPage === numberOfPages;

  const changePage = ({selected}: { selected: number }) => {
    searchParams.set('page', (selected + 1).toString());
    navigate(currentPath + `?${searchParams.toString()}`);
  }

  const rangeDisplay = (pages: number, current: number): number => {
    if (current === 1 || current === pages || current === pages - 1) {
      return 3;
    }

    return 2;
  }

  return (
    <ReactPaginate 
      pageCount={numberOfPages}
      onPageChange={changePage}
      forcePage={currentPage - 1}
      pageRangeDisplayed={rangeDisplay(numberOfPages, currentPage)}
      marginPagesDisplayed={0}
      breakLabel={null}
      previousLabel={
        <Button 
          type='circle'
          icon='back'
          disabled={previousPageButtonDisable}
        />
      }
      nextLabel={
        <Button 
          type='circle'
          icon='next'
          disabled={nextPageButtonDisable}
        />
      }
      className='pagination'
      pageClassName='pagination__button'
      pageLinkClassName='pagination__link'
      activeClassName='pagination__button--active'
    />
  )
}
