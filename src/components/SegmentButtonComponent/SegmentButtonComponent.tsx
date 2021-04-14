import React, { useState } from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './SegmentButtonComponent.scss';

interface segmentBtnProps {
  handler?: Function;
}

const SegmentButtonComponent: React.FC<segmentBtnProps> = ({ handler }) => {
  const [defaultValue, setDefaultValue] = useState('one_way');
  function handleChange(event: any) {
    // console.log('value is *******', value);]
    setDefaultValue(event.target.value);
    handler?.(event);
  }

  return (
    <div className="segment-wrapper">
      <IonSegment value={defaultValue} onIonChange={handleChange}>
        <IonSegmentButton value="one_way">
          <IonLabel>One Way</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="two_way">
          <IonLabel>Two Way</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default SegmentButtonComponent;
