import React from 'react';
import { IonButton } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import './Button.css';


interface inputTextProps {
    buttonLabel?: any,
    clickHandler?: Function,
    size? : any
}

/**
 * 
 * <InputText labelText="Type your mail" onChange="callbackFn" ...otherProps/>
 */

const ButtonConmponent: React.FC<inputTextProps> = ({
  buttonLabel,
  clickHandler,
  size
}) => {
  function handleButtonClick() {
    clickHandler?.();
  }
  return (
    <div className="buttonWrapper">
      <IonButton expand={size}  onClick={ () => handleButtonClick()} className='btn-elem'><Translate message={buttonLabel}/></IonButton>
    </div>
  );
};

export default ButtonConmponent;
