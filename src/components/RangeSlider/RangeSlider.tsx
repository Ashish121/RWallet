import React, { useState } from 'react';
import { IonRange } from '@ionic/react';

import './RangeSlider.scss';

const RangeSlider: React.FC<any> = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="range-slider-wrapper">
      <IonRange
        pin={true}
        value={value}
        onIonChange={(e) => setValue(e.detail.value as number)}
      />
    </div>
  );
};

export default RangeSlider;
