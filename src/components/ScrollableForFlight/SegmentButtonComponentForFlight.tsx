import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import './SegmentButtonComponentForFlight.scss';

interface buttonProps {
  clickHandler?: Function;
  value?: string;
}

const SegmentButtonComponentForFlight: React.FC<buttonProps> = ({
  clickHandler,
  value,
}) => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  function handleButtonClick(value: any) {
    clickHandler?.();
    if (value === 'one_way') {
      history.replace('/tabs/flightOneWay', { value: value });
    }

    if (value === 'two_way') {
      history.replace('/tabs/flightTwoWay', { value: value });
    }
  }

  function handleClickButtonTwoWay(value: any) {
    if (value === 'two_way') {
      const toggle = true;
      setToggle(toggle);
    }
  }

  function handleClickButtonForOneWay(value: any) {
    if (value === 'one_way') {
      setToggle(toggle);
    }
  }
  return (
    <div className="segmentWrapper">
      <IonSegment
        className="common_btn_wrapper"
        onIonChange={(e) => {
          handleButtonClick(e.detail.value);
          //console.log("Segment selected", e.detail.value);
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

export default SegmentButtonComponentForFlight;
