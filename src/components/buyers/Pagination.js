import React from 'react';

const Pagination = ({handlePagination,activeClass,paginationArray,paginationIndex}) => {
  return (
    <div class="buyers__pagination">
      <button
        id="0"
        onClick={handlePagination}
        className={activeClass == 0 ? 'active' : ''}
        value={paginationArray[paginationIndex]}
      >
        {paginationArray[paginationIndex]}
      </button>
      <button
        id="1"
        onClick={handlePagination}
        className={activeClass == 1 ? 'active' : ''}
        value={paginationArray[paginationIndex + 1]}
      >
        {paginationArray[paginationIndex + 1]}
      </button>
      <button
        id="2"
        onClick={handlePagination}
        className={activeClass == 2 ? 'active' : ''}
        value={paginationArray[paginationIndex + 2]}
      >
        {paginationArray[paginationIndex + 2]}
      </button>
    </div>
  );
};

export default Pagination;
