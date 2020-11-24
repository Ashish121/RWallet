import React from 'react';
import { IonItem, IonSelect, IonLabel, IonList, IonSelectOption } from '@ionic/react';
import debounce from 'lodash.debounce';
import   { Translate   } from '../../i18n/formatMessages';
import './Select.css';


interface SelectGenderProps {
    onSelect?: Function,
    placeholderLabel?:string,
    label?:any
}
    


const SelectMenu: React.FC<SelectGenderProps> = ({
  onSelect,
  placeholderLabel,
  label
}) => {
  const gender = '';
  const handleSelect = debounce((value) => {
        onSelect?.(value);
  },100);

  return (
    <div className="wrapper">
      <IonList className="list-wrapper">
        <IonItem className="ion-no-padding">
          <IonLabel className='gender-label'><Translate message={label}/></IonLabel>
          <IonSelect
            value={gender}
            placeholder={placeholderLabel}
            onIonChange={e => handleSelect(e.detail.value)}>
            <IonSelectOption value="male">Male</IonSelectOption>
            <IonSelectOption value="female">Female</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
    </div>
  );
};

export default SelectMenu;
