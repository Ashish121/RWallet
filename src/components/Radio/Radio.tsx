import React from 'react';
import { IonItem, IonRadio, IonList, IonLabel } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Radio.scss';

interface radioTypeProps {
  label?: any;
  color?: any;
  val?: string;
  showRadioButton?: Boolean;
  showColor?: Boolean;
}

const RadioComponent: React.FC<radioTypeProps> = ({
  label,
  val,
  showRadioButton = false,
  showColor = false,
}) => {
  return (
    <React.Fragment>
      {showRadioButton && (
        <IonList className="radio-wrapper">
          <IonItem lines="none" color={showColor ? '' : 'light'}>
            <IonRadio
              mode="md"
              value={val}
              className={
                showColor ? 'radio-icon-color-white' : 'radio-icon-color-blue'
              }
            />
            <IonLabel
              className={
                showColor ? 'radio-text-color-white' : 'radio-text-color-black'
              }
            >
              <Translate message={label} />
            </IonLabel>
          </IonItem>
        </IonList>
      )}
    </React.Fragment>
  );
};

export default RadioComponent;
