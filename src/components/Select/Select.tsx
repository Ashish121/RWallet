import React, { useState } from 'react';
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
  selectedVal?: any;
}

const SelectMenu: React.FC<SelectGenderProps> = ({
  onSelect,
  placeholderLabel,
  label,
  array,
  selectedVal,
}) => {
  const [currentSelectedVal, setCurrentSelectedVal] = useState('');
  const handleSelect = debounce((value) => {
    setCurrentSelectedVal(value);
    onSelect?.(value);
  }, 100);

  return (
    <div className='select-menu-wrapper'>
      <IonList className='list-wrapper'>
        <IonItem className='ion-no-padding'>
          <IonLabel className='gender-label' position='floating'>
            <Translate message={label} />
          </IonLabel>
          <IonSelect
            interface='action-sheet'
            placeholder={placeholderLabel}
            onIonChange={(e) => handleSelect(e.detail.value)}
            value={!selectedVal ? currentSelectedVal : ''}
          >
            {array.map((element: any) => {
              return (
                <IonSelectOption key={element.value} value={element.value}>
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
