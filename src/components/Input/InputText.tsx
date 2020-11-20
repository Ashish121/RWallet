import React from 'react';
import { IonItem, IonInput, IonLabel, IonList } from '@ionic/react';
import debounce from 'lodash.debounce';
import   { Translate   } from '../../i18n/formatMessages';
import './InputText.css';


interface inputTextProps {
    label?: string,
    onChange?: Function,
    labelType?: any,
    labelColor?:string;
    color?:string,
    fontSize?:any,
    labelText?:any,
    inputType?:any,
    ChildElem?:any,
}

/**
 * 
 * <InputText labelText="Type your mail" onChange="callbackFn" ...otherProps/>
 */

const InputText: React.FC<inputTextProps> = ({
  onChange,
  labelType,
  color,
  fontSize,
  labelText,
  inputType,
  labelColor,
  ChildElem
}) => {
    
  const onInpuTextChange = debounce((event) => {
        onChange?.(event.target.value);
  },100);
    
  return (
    <div className="inputWrapper">
      <IonList className="login-fileds-list-wrapper">
        <IonItem class="ion-no-padding">
          <IonLabel position={labelType || 'fixed'} className="input-floating-label" color={labelColor || ''} font-size={fontSize}><Translate message={labelText}/></IonLabel>
          <IonInput type={inputType || 'text'}  color={color} onIonChange={(e)=> onInpuTextChange(e)}/>
          {ChildElem}
        </IonItem>
      </IonList>
    </div>
  );
};

export default InputText;
