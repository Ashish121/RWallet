import React, { useState } from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './SegmentButtonComponent.scss';

interface segmentBtnProps {
  handler?: Function;
}

const SegmentButtonComponent: React.FC<segmentBtnProps> = ({ handler }) => {
  const [defaultValue, setDefaultValue] = useState('one_way');
  function handleChange(event: any) {
    //
    setDefaultValue(event.target.value);
    handler?.(event);
  }

  return (
    <div className="segment-wrapper">
      <IonSegment value={defaultValue} onIonChange={handleChange}>
        <IonSegmentButton value="one_way" className="segment-left-button">
          <IonLabel>One Way</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="two_way" className="segment-right-button">
          <IonLabel>Two Way</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default SegmentButtonComponent;
