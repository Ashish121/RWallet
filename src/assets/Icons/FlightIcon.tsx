import React from 'react';

const FlightIcon: React.FC<any> = ( ) => {
  
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.25" filter="url(#filter0_d)">
        <circle cx="22" cy="18" r="18" fill="white"/>
      </g>
      <path d="M23.5 15.7102L29.5 19.5V21L23.5 19.1055V23.1255L25.75 24.375V25.5L22.375 24.75L19 25.5V24.375L21.25 23.1248V19.1047L15.25 21V19.5L21.25 15.7102V11.625C21.25 11.3266 21.3685 11.0405 21.5795 10.8295C21.7905 10.6185 22.0766 10.5 22.375 10.5C22.6734 10.5 22.9595 10.6185 23.1705 10.8295C23.3815 11.0405 23.5 11.3266 23.5 11.625V15.7102Z" fill="white"/>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>

  );
};

export { FlightIcon };
