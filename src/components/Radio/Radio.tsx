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
  showColor?: Boolean;
}

const RadioComponent: React.FC<radioTypeProps> = ({
  label,
  val,
  showRadioButton = false,
  showColor = false,
  ...props
}) => {
  return (
    <div className="radio-wrapper">
      {showRadioButton && (
        <IonList>
          <IonItem lines="none" color={showColor ? '' : 'light'}>
            <IonRadio
              mode="md"
              value={val}
              {...props}
              className={showColor ? 'radio-icon-color-white' : 'radio-icon-color-blue'}
            />
            <IonText
              className={showColor ? 'radio-text-color-white' : 'radio-text-color-black'}
            >
              <Translate message={label} />
            </IonText>
          </IonItem>
        </IonList>
      )}
    </div>
  );
};

export default RadioComponent;
