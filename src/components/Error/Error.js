import React from "react";

const Error = ({ handleClickFn }) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      Error occurred. Try to
      <span
        className="btn btn-danger btn-sm ml-2"
        role="button"
        onClick={handleClickFn}
      >
        refresh
      </span>
    </div>
  );
};

export default Error;
