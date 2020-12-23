import React from 'react';

const CloseBarIcon: React.FC<any> = ({ width, height }) => {
  const w = width || '84';
  const h = height || '4';
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 87 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="2"
        x2="85"
        y2="2"
        stroke="black"
        stroke-opacity="0.25"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { CloseBarIcon };
