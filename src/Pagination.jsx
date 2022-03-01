import React from 'react';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa';

export const Pagination = ({currentPage, setCurrentPage, todos, itemsPerPage}) => {
    const increment = () => {
      if (currentPage + 1 >= todos.length/itemsPerPage) return
      setCurrentPage(currentPage + 1)
    }

    const decrement = () => {
      if (currentPage === 0) return
      setCurrentPage(currentPage - 1)
    }

    return <div className='pagination'>
      <FaLessThan className='pagination-angle' onClick={decrement} />
      <div>{currentPage + 1}</div>
      <FaGreaterThan className='pagination-angle' onClick={increment} />
    </div>
  }