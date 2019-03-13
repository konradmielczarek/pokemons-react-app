import React from 'react';
import PropTypes from 'prop-types';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationComponent = ({ handleClickFn, totalCount, limit, currentPage }) => {
  const numberOfPages = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  const renderPages = () => {
    return pages.map(page => (
      <PaginationItem active={page === currentPage} onClick={handleClickFn} data-page={page} key={page}>
        <PaginationLink>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  };

  return (
    <div className="mt-2 mb-5">
      <Pagination>
        <PaginationItem disabled={currentPage === 1} onClick={currentPage > 1 ? handleClickFn : null} data-page={currentPage - 1}>
          <PaginationLink previous />
        </PaginationItem>
        {renderPages()}
        <PaginationItem disabled={currentPage === pages.length} onClick={currentPage !== pages.length ? handleClickFn : null} data-page={currentPage + 1}>
          <PaginationLink next />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

PaginationComponent.propTypes = {
  handleClickFn: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
}

export default PaginationComponent;
