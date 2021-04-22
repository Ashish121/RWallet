import React from 'react';
import { IonItem, IonRadio, IonList, IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Radio.scss';

interface radioTypeProps {
  label?: any;
  clickHandler?: Function;
  color?: any;
  val?: string;
  showRadioButton?: Boolean;
}

const RadioComponent: React.FC<radioTypeProps> = ({
  label,
  val,
  showRadioButton = false,
  ...props
}) => {
  return (
    <div className="radio-wrapper">
      {showRadioButton && (
        <IonList>
          <IonItem lines="none" color="light">
            <IonRadio mode="md" value={val} {...props} className="radio-icon" />
            <IonText className="ion-margin-start">
              <Translate message={label} />
            </IonText>
          </IonItem>
        </IonList>
      )}
    </div>
  );
};

export default RadioComponent;
