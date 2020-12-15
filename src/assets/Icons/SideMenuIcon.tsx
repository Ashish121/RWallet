import React from 'react';

const SideMenuIcon: React.FC<any> = ({ width, height }) => {
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
        d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"
        fill="white"
      />
    </svg>
  );
};

export { SideMenuIcon };
