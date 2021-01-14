import React from 'react';

const BusBookingIcon: React.FC<any> = ( ) => {

  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.25" filter="url(#filter0_d)">
        <circle cx="22" cy="18" r="18" fill="white"/>
      </g>
      <path d="M25.75 24H18.25V24.75C18.25 24.9489 18.171 25.1397 18.0303 25.2803C17.8897 25.421 17.6989 25.5 17.5 25.5H16.75C16.5511 25.5 16.3603 25.421 16.2197 25.2803C16.079 25.1397 16 24.9489 16 24.75V24H15.25V18H14.5V15H15.25V12.75C15.25 12.3522 15.408 11.9706 15.6893 11.6893C15.9706 11.408 16.3522 11.25 16.75 11.25H27.25C27.6478 11.25 28.0294 11.408 28.3107 11.6893C28.592 11.9706 28.75 12.3522 28.75 12.75V15H29.5V18H28.75V24H28V24.75C28 24.9489 27.921 25.1397 27.7803 25.2803C27.6397 25.421 27.4489 25.5 27.25 25.5H26.5C26.3011 25.5 26.1103 25.421 25.9697 25.2803C25.829 25.1397 25.75 24.9489 25.75 24.75V24ZM16.75 12.75V19.5H27.25V12.75H16.75ZM16.75 21V22.5H19.75V21H16.75ZM24.25 21V22.5H27.25V21H24.25Z" fill="white"/>
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

export { BusBookingIcon };
