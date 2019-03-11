import React from 'react';

const Error = () => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      Error occurred. Try to
      <a
        href="/"
        className="btn btn-danger btn-sm ml-2"
        role="button"
      >
        refresh
      </a>
    </div>
  );
};

export default Error;
