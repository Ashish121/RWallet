import React, { useState } from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './SegmentButtonComponent.scss';

interface buttonProps {
  clickHandler?: Function;
  value?: string;
  handler?: Function;
}

const SegmentButtonComponent: React.FC<buttonProps> = ({
  clickHandler,
  value,
  handler,
}) => {
  const [toggle, setToggle] = useState(false);

  function handleButtonClick(value: any) {
    clickHandler?.();
    console.log('value is *******', value);
    handler?.({
      value,
    });
  }

  function handleClickButtonTwoWay(value: any) {
    if (value === 'two_way') {
      const toggle = true;
      setToggle(toggle);
      console.log('toggle value :', toggle);
    }
  }

  function handleClickButtonForOneWay(value: any) {
    if (value === 'one_way') {
      const toggle = false;
      setToggle(toggle);
      console.log('toggle value :', toggle);
    }
  }
  return (
    <div className="segmentWrapper">
      <IonSegment
        className="common_btn_wrapper"
        onIonChange={(e) => {
          handleButtonClick(e.detail.value);
        }}
        value={value}
      >
        <IonSegmentButton
          value="one_way"
          className={!toggle ? 'oneWay_btn' : 'oneWay_btn1'}
          onClick={() => handleClickButtonForOneWay('one_way')}
        >
          <IonLabel>One Way</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="two_way"
          className={!toggle ? 'twoWay_btn' : 'twoWay_btn1'}
          onClick={() => handleClickButtonTwoWay('two_way')}
        >
          <IonLabel>Two Way</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default SegmentButtonComponent;
