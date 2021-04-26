import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { BackButton, ButtonConmponent, InputText } from '../../components';
import './ResetPassword.scss';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [contactNo, setConactNo] = useState('');
  const [countryCode, setCountryCode] = useState('');
  function handleVerifyReset() {
    history.replace('/otp', {
      mobileNo: contactNo,
      routeName: 'passReset',
      countryCode,
    });
  }

  function setContact(value: any) {
    setConactNo(value);
  }
  function back() {
    history.replace('/login');
  }
  function updateCountryCode(code: any) {
    setCountryCode(code);
  }
  return (
    <>
      <IonPage>
        <BackButton clickHandler={back} />
        <IonContent>
          <div className="password-container">
            <div className="page-header">
              <IonText>
                <Translate message="reset.pageHeader" />
              </IonText>
            </div>
            <div className="page-sub-header">
              <div className="innercontainer">
                <IonText>
                  <Translate message="reset.pageSubHeader" />
                </IonText>
              </div>
            </div>
            <div className="input-container">
              <InputText
                inputType="tel"
                labelText="signup.countryCode"
                labelType="floating"
                color="light"
                labelColor="light"
                onChange={updateCountryCode}
              />
              <InputText
                inputType="tel"
                labelText="signup.mobileNo"
                labelType="floating"
                color="light"
                labelColor="light"
                onChange={setContact}
              />
            </div>
            <div className="confirm-btn-wrapper">
              <ButtonConmponent
                buttonLabel="reset.continue"
                size="block"
                clickHandler={handleVerifyReset}
                disabled={contactNo ? false : true}
              />
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { ResetPassword };
