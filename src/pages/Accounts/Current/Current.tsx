import React from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
  IonLabel,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  HeaderComponent,
  InputText,
  RadioComponent,
  CheckboxComponent,
  ButtonConmponent,
} from '../../../components';

import './Current.scss';

const CurrentAccountPage: React.FC = () => {
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }

  return (
    <div>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent className="current-account-wrapper">
            <div className="page-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate
                      message="account.currentPageHeader"
                      value={{ accountNo: '07601402201' }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="page-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposit"
                />
                <div className="section-1">
                  <IonText className="sections-heading">
                    <Translate message="account.minimumBalance" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="Rs 5000 per quarter for non-rural" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="Rs 2500 per quarter for rural" />
                      </div>
                    </IonRadioGroup>
                  </div>
                </div>
                <div className="section-2 ">
                  <IonText className="sections-heading ion-padding-top ion-padding-bottom">
                    <Translate message="account.withdrawLimit" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonLabel style={{color: '#fff'}}>
                      <Translate message="account.withdrawText" />
                    </IonLabel>
                  </div>
                </div>
                
                <div className="terms-select-wrapper">
                  <CheckboxComponent
                    onCheckboxToggle={setToggleTerms}
                    checkboxLabel="signup.checkboxTermsText"
                  />
                </div>
                <div
                  style={{
                    marginTop: '10px',
                    bottom: '10px',
                    width: '100%;',
                    left: '0',
                    padding: '30px',
                  }}
                >
                  <ButtonConmponent
                    buttonLabel="account.openAccount"
                    size="full"
                  />
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </div>
  );
};

export { CurrentAccountPage };
