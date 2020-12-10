import React from 'react';
import { IonItem, IonRadio ,IonList, IonText } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import './Radio.scss';

interface radioTypeProps {
    label?: any,
    clickHandler?: Function,
}

const RadioComponent: React.FC<radioTypeProps> = ({label}) => {
    
 
  return (
    <div className="radio-wrapper">
      <IonList lines="none">
        <IonItem lines="none">
          <IonRadio mode='md'/><IonText className='ion-margin-start'><Translate message={label}/></IonText>
        </IonItem>
            
      </IonList>
    </div>
  );
};

export default RadioComponent;
