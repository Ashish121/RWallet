import React from 'react';
// import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,

} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent } from '../../../components';
import './TopUpRecharge.scss';

const TopUpRecharge: React.FC = () => {
  // const history = useHistory();

  //   function handleproceed() {
  //     console.log('Handling registration');
  //     history.push('/');
  //   }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="antivirus-payment-text-area">
                <Translate message="AntivirusPaymentOption" />
              </IonText>
              <div className="antivirus-payment-wrapper">
                <InputText
                  inputType="text"
                  labelText="AntivirusSelectBank"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="AntivirusPayment-OrderDetails">
                  <IonText className="antivirus-payment-spersky">
                    <Translate message="AntivirusOrderDetails" />
                  </IonText>
                </div>
            
                <div className="AntivirusPayment-spersky">
                  <IonText className="antivirus-payment-spersky">
                    <Translate message="Antiviruskaspersky" />
                  </IonText>
                </div>
              
                <div className="antivirus-confirm-button">
                  <ButtonConmponent
                    buttonLabel="AntivirusContiue"
                    size="block"

                  />
                </div>
               
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TopUpRecharge };
