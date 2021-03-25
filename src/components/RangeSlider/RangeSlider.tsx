import React from 'react';
import { IonRange } from '@ionic/react';
import debounce from 'lodash.debounce';
import './RangeSlider.scss';

interface RangeSliderProps {
  min?: any;
  max?: any;
  handler?: Function;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, handler }) => {
  const handleRangeSlider = debounce((val) => {
    handler?.(val);
  }, 300);

  return (
    <div className="range-slider-wrapper">
      <IonRange
        pin={true}
        min={min}
        max={max}
        onIonChange={handleRangeSlider}
      ></IonRange>
    </div>
  );
};

export default RangeSlider;
