import React from 'react';

// REACTSTRAP
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface IProps {
  handleClickFn: any,
  totalCount: number,
  limit: number,
  currentPage: number
}

const PaginationComponent: React.FC<IProps> = ({ handleClickFn, totalCount, limit, currentPage }) => {
  const numberOfPages: number = Math.ceil(totalCount / limit);
  const pages: number[] = [];

  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  const renderPages = () => {
    return pages.map(page => (
      <PaginationItem active={page === currentPage} onClick={page !== currentPage ? handleClickFn : null} data-page={page} key={page}>
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

export default PaginationComponent;
