import React from "react";

const CloseBarIcon: React.FC<any> = ({ width, height }) => {
  const w = width || "84";
  const h = height || "4";
  return (
    <svg
      width="200"
      height="2"
      viewBox="0 0 200 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        opacity="0.5"
        x1="1"
        y1="1"
        x2="199"
        y2="1"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export { CloseBarIcon };
