import React from 'react';

const TelevisionIcon: React.FC<any> = ({ width, height }) => {
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
        d="M24 18.3281V2.85938H0V18.3281H6.60938V19.7344H4.73438V21.1406H6.60938H17.3906H19.2656V19.7344H17.3906V18.3281H24ZM15.9844 19.7344H8.01562V18.3281H15.9844V19.7344ZM1.40625 16.9219V4.26562H22.5938V16.9219H1.40625Z"
        fill="#004777"
      />
    </svg>
  );
};

export { TelevisionIcon };
