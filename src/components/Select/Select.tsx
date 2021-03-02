import React from 'react';
import {
  IonItem,
  IonSelect,
  IonLabel,
  IonList,
  IonSelectOption,
} from '@ionic/react';
import debounce from 'lodash.debounce';
import { Translate } from '../../i18n/formatMessages';
import './Select.scss';

interface SelectGenderProps {
  onSelect?: Function;
  placeholderLabel?: string;
  label?: any;
  array?: any;
}

const SelectMenu: React.FC<SelectGenderProps> = ({
  onSelect,
  placeholderLabel,
  label,
  array,
}) => {
  const handleSelect = debounce((value) => {
    onSelect?.(value);
  }, 100);

  return (
    <div className="select-menu-wrapper">
      <IonList className="list-wrapper">
        <IonItem className="ion-no-padding">
          <IonLabel className="gender-label" position="floating">
            <Translate message={label} />
          </IonLabel>
          <IonSelect
            placeholder={placeholderLabel}
            onIonChange={(e) => handleSelect(e.detail.value)}
          >
            {array.map((element: any) => {
              return (
                <IonSelectOption value={element.value}>
                  {element.label}
                </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
      </IonList>
    </div>
  );
};

export default SelectMenu;
