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
              color={showColor ? 'light' : 'dark'}
            />
            <IonLabel
              color={showColor ? 'light' : 'dark'}
              style={{ marginLeft: '10px' }}
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
