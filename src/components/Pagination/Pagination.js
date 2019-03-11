import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ handleClickFn, totalCount, limit, currentPage }) => {
  const numberOfPages = Math.ceil(totalCount / limit);

  const renderPages = pages => {
    const pagesArr = [];

    for (let i = 1; i <= pages; i++) {
      pagesArr.push(
        <li
          className={`${i === currentPage ? 'active' : ''} page-item`}
          onClick={handleClickFn}
          id={i}
          key={i}
        >
          <span className="page-link">{i}</span>
        </li>
      );
    }

    return pagesArr;
  };

  return (
    <nav className="mt-2 mb-5">
      <ul className="pagination">{renderPages(numberOfPages)}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  handleClickFn: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default Pagination;
