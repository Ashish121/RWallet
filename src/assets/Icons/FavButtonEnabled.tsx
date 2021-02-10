import React from 'react';

const FavButtonEnabled: React.FC<any> = ({ width, height }) => {
  const w = width || '16';
  const h = height || '16';
  return (
    <>
      <svg
        width={w}
        height={h}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00035 3.01933C9.56635 1.61333 11.9863 1.66 13.495 3.17133C15.003 4.68333 15.055 7.09133 13.6523 8.662L7.99901 14.3233L2.34701 8.662C0.944345 7.09133 0.997012 4.67933 2.50435 3.17133C4.01435 1.662 6.42968 1.61133 8.00035 3.01933Z"
          fill="#FF0000"
        />
      </svg>
    </>
  );
};

export { FavButtonEnabled };
