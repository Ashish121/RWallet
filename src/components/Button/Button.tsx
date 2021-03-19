import React from 'react';
import { IonButton } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Button.css';

interface buttonProps {
  buttonLabel?: any;
  clickHandler?: Function;
  size?: any;
  disabled?: boolean;
  style?: any;
  color?: string;
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
  style,
  color,
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
        style={style}
        color={color}
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
