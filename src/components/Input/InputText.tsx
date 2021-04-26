import React, { useState } from 'react';
import { IonItem, IonInput, IonLabel, IonList } from '@ionic/react';
import debounce from 'lodash.debounce';
import { Translate } from '../../i18n/formatMessages';
import './InputText.scss';
import { EyeDisabledIcon, EyeEnabledIcon } from '../../assets/Icons';

interface inputTextProps {
  label?: string;
  onChange?: Function;
  labelType?: any;
  labelColor?: string;
  color?: string;
  fontSize?: any;
  labelText?: any;
  inputType?: any;
  maxLen?: any;
  pattern?: any;
  placeholderText?: any;
  showPasswordMode?: boolean;
  autoFocus?: boolean;
  clearInput?: boolean;
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
  showPasswordMode = false,
  maxLen,
  placeholderText,
  autoFocus,
  clearInput,
}) => {
  const [toggleEyeOn, setToggleEyeOn] = useState(false);
  const onInpuTextChange = debounce((event) => {
    onChange?.(event.target.value);
  }, 100);

  function toggleEye(event: any) {
    event.stopPropagation();

    setToggleEyeOn(!toggleEyeOn);
  }

  return (
    <div className="inputWrapper">
      <IonList className="login-fileds-list-wrapper">
        <IonItem class="ion-no-padding">
          {labelText && (
            <IonLabel
              position={labelType || 'fixed'}
              className="input-floating-label"
              color={labelColor || ''}
              font-size={fontSize}
            >
              <Translate message={labelText} />
            </IonLabel>
          )}
          {!placeholderText && (
            <IonInput
              id="input-area"
              maxlength={maxLen}
              type={toggleEyeOn ? 'text' : inputType || 'text'}
              color={color}
              autofocus={autoFocus}
              onIonChange={(e) => onInpuTextChange(e)}
              clearInput={clearInput}
            />
          )}

          {placeholderText && (
            <IonInput
              id="input-area"
              maxlength={maxLen}
              type={toggleEyeOn ? 'text' : inputType || 'text'}
              color={color}
              autofocus={autoFocus}
              onIonChange={(e) => onInpuTextChange(e)}
              placeholder={placeholderText}
              clearInput={clearInput}
            />
          )}
          {showPasswordMode && (
            <button type="button" className="eye-btn" onClick={toggleEye}>
              {toggleEyeOn && <EyeEnabledIcon />}
              {!toggleEyeOn && <EyeDisabledIcon />}
            </button>
          )}
        </IonItem>
      </IonList>
    </div>
  );
};

export default InputText;
