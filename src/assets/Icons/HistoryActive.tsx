import React from 'react';

const HistoryActive: React.FC<any> = ({ width, height }) => {
  const w = width;
  const h = height;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.298 22 8.695 21.575 7.292 20.825L2 22L3.176 16.71C2.426 15.306 2 13.703 2 12C2 6.477 6.477 2 12 2ZM13 7H11V14H17V12H13V7Z"
        fill="white"
      />
    </svg>
  );
};

export { HistoryActive };
