import React from 'react';
import { IonItem, IonCheckbox, IonLabel, IonList } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Checkbox.scss';

interface checkboxProps {
  onCheckboxToggle: Function;
  checkboxLabel?: string;
}

const CheckboxComponent: React.FC<checkboxProps> = ({
  onCheckboxToggle,
  checkboxLabel,
  ...props
}) => {
  const checked = true;
  const setChecked = (value: boolean) => {
    onCheckboxToggle?.(value);
  };
  return (
    <div className="checkbox-wrapper">
      <IonList className="ion-margin-top">
        <IonItem className="ion-no-padding" lines="none">
          <IonLabel className="terms-label">
            <Translate message={checkboxLabel || ''} />
          </IonLabel>
          <IonCheckbox
            slot="start"
            checked={checked}
            onIonChange={(e) => setChecked(e.detail.checked)}
            {...props}
          />
        </IonItem>
      </IonList>
    </div>
  );
};

export default CheckboxComponent;
