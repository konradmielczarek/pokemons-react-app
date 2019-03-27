import React from 'react';

// REACTSTRAP
import { Spinner } from 'reactstrap';

const LoadingSpinner: React.FC = () => {
  return (
    <Spinner style={{ width: '3rem', height: '3rem' }} />
  );
};

export default LoadingSpinner;
