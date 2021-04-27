import React from 'react';
import { IonRange } from '@ionic/react';
import debounce from 'lodash.debounce';
import './RangeSlider.scss';

interface RangeSliderProps {
  min?: any;
  max?: any;
  handler?: Function;
  value?: any;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  handler,
  value,
}) => {
  const handleRangeSlider = debounce((val) => {
    handler?.(val);
  }, 300);

  return (
    <div className="range-slider-wrapper">
      <IonRange
        pin={true}
        min={min}
        max={max}
        value={value}
        onIonChange={handleRangeSlider}
      ></IonRange>
    </div>
  );
};

export default RangeSlider;
