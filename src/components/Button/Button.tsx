import React from 'react';
import { IonButton } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Button.css';

interface buttonProps {
  buttonLabel?: any;
  clickHandler?: Function;
  size?: any;
  disabled?: boolean;
}

/**
 *
 * <InputText labelText="Type your mail" onChange="callbackFn" ...otherProps/>
 */

const ButtonConmponent: React.FC<buttonProps> = ({
  buttonLabel,
  clickHandler,
  size,
  disabled,
  ...props
}) => {
  function handleButtonClick() {
    clickHandler?.();
  }
  return (
    <div className="buttonWrapper">
      <IonButton
        disabled={disabled}
        expand={size}
        onClick={() => handleButtonClick()}
        className="btn-elem"
        {...props}
      >
        <Translate message={buttonLabel} />
      </IonButton>
    </div>
  );
};

export default ButtonConmponent;
