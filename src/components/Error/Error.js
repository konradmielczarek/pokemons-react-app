import React from 'react';
import { Alert } from 'reactstrap';

const Error = () => {
  return (
    <Alert color="danger" className="d-flex align-items-center">
      Error occurred. Try to
      <a
        href="/"
        className="btn btn-danger btn-sm ml-2"
        role="button"
      >
        refresh
      </a>
    </Alert>
  );
};

export default Error;
