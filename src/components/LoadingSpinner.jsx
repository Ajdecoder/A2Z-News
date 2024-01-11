import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = () => {
  return (
    <div className="sweet-loading text-center mt-5">
      <BeatLoader color={'#36D7B7'} css={override} size={15} />
    </div>
  );
};

export default LoadingSpinner;
