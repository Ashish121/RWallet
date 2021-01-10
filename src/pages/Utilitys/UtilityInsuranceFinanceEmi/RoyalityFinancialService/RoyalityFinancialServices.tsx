import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent } from '../../../../components';
import './RoyalityFinancialServices.scss';

const RoyalityFinancialServices: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="royalityFinancial-text-area">
                <Translate message="RoyalitySaving" />
              </IonText>
              <div className="royalityFinancial-wrapper">
                <InputText
                  inputType="text"
                  labelText="membershipAccountnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="MemberName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="MobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="SelectTransactionType"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="SavingAmount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="Remarks"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                  
            
                <div className="royalityFinancial-button">
                  <ButtonConmponent
                    buttonLabel="ClearSaving"
                    size="block"/>
                </div>
                <div className="royalityFinancial-submit">
                  <ButtonConmponent
                    buttonLabel="ConfirmSaving"
                    size="block"
                    clickHandler={handleproceed}
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

export { RoyalityFinancialServices};
