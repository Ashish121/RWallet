import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';
import './ResetPassword.scss';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const [contactNo, setConactNo] = useState('');
  function handleVerifyReset() {
    history.push('/otp', { mobileNo: contactNo, routeName: 'passReset' });
  }

  function setContact(value: any) {
    console.log('value', value);
    setConactNo(value);
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="password-reset-container">
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
                  inputType="text"
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
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { ResetPassword };
