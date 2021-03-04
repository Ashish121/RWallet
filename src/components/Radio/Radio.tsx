import React from 'react';
import { IonItem, IonRadio, IonList, IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Radio.scss';

interface radioTypeProps {
  label?: any;
  clickHandler?: Function;
  color?: any;
  val?: string;
}

const RadioComponent: React.FC<radioTypeProps> = ({ label, val }) => {
  return (
    <div className="radio-wrapper">
      <IonList>
        <IonItem lines="none">
          <IonRadio mode="md" value={val} />
          <IonText className="ion-margin-start">
            <Translate message={label} />
          </IonText>
        </IonItem>
      </IonList>
    </div>
  );
};

export default RadioComponent;
