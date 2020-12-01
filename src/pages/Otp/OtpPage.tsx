import React  from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';

import './OtpPage.css';




const OtpPage: React.FC = () => {
  const history = useHistory();
  function handleVerifyOtp() {
    history.push('/mpin');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="container">
              <div className="page-header">
                <IonText>
                  <Translate message='otp.pageHeader'/>
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message='otp.pageSubHeader'  value={{contact:'8892050268'}}/>
                  </IonText>
                </div>
                   
              </div>
              <div className="field-container">
                <InputText  inputType="tel" maxLen={1}/>
                <InputText  inputType="tel" maxLen={1}/>
                <InputText  inputType="tel" maxLen={1}/>
                <InputText  inputType="tel" maxLen={1}/>
              </div>
              <div className="resend-link-container">
                <IonText><Translate message='otp.resendText'/><a><Translate message='otp.resendLinkText'/></a></IonText>
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent buttonLabel="otp.verify" size="block" clickHandler={handleVerifyOtp}/>
              </div>
               
            </div>
            
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { OtpPage };
