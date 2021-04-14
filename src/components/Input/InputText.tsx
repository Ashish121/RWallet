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
  value?: any;
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
  value,
}) => {
  const [toggleEyeOn, setToggleEyeOn] = useState(false);
  const onInpuTextChange = debounce((event) => {
    console.log('received: event', event);

    if (event) {
      onChange?.(event.target.value);
    } else {
      onChange?.(null);
    }
  }, 100);

  function toggleEye(event: any) {
    event.stopPropagation();
    console.log('Hello');
    setToggleEyeOn(!toggleEyeOn);
  }
  console.log('value******', value);

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
              maxlength={maxLen}
              type={toggleEyeOn ? 'text' : inputType || 'text'}
              color={color}
              autofocus={autoFocus}
              onIonChange={(e) => {
                if (e.detail.value === undefined) onInpuTextChange(null);
                onInpuTextChange(e);
              }}
              clearInput={clearInput}
            />
          )}

          {placeholderText && (
            <IonInput
              maxlength={maxLen}
              type={toggleEyeOn ? 'text' : inputType || 'text'}
              color={color}
              autofocus={autoFocus}
              onIonChange={(e) => {
                if (e.detail.value === undefined) onInpuTextChange(null);
                onInpuTextChange(e);
              }}
              placeholder={placeholderText}
              clearInput={clearInput}
              value={value}
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
