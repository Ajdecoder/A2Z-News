import React from 'react';
import { PacmanLoader } from 'react-spinners';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const LoadingSpinner = () => {
  return (
    <div
      className="sweet-loading text-center"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
        background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
      }}
    >
      <PacmanLoader size={28} />
    </div>
  );
};

export default LoadingSpinner;
