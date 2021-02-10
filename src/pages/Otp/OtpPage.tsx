import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import OtpInput from 'react-otp-input';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent } from '../../components';

import './OtpPage.scss';

const OtpPage: React.FC = () => {
  const [otpText1, setOtpText1] = useState('');
  const history = useHistory();
  function handleVerifyOtp() {
    history.push('/mpin');
  }
  const onOtpEnter = (otp: any) => {
    setOtpText1(otp);
  };
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="otp-container">
              <div className="page-header">
                <IonText>
                  <Translate message="otp.pageHeader" />
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate
                      message="otp.pageSubHeader"
                      value={{ contact: '8892050268' }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="field-container">
                <OtpInput
                  value={otpText1}
                  onChange={onOtpEnter}
                  numInputs={4}
                  containerStyle="otp-field-wrapper"
                  isInputNum={true}
                  inputStyle="otp-field-input"
                />
              </div>
              <div className="resend-link-container">
                <IonText>
                  <Translate message="otp.resendText" />
                  <a>
                    <Translate message="otp.resendLinkText" />
                  </a>
                </IonText>
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="common.continue"
                  size="block"
                  clickHandler={handleVerifyOtp}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { OtpPage };
