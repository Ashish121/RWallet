import React from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  HeaderComponent,
  InputText,
  RadioComponent,
  CheckboxComponent,
  ButtonConmponent,
} from '../../../components';

import './Saving.scss';

const SavingAccountPage: React.FC = () => {
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }

  return (
    <div>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent className="saving-account-wrapper">
            <div className="page-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate
                      message="account.savingPageHeader"
                      value={{ accountNo: '07601402201' }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="page-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Enter the amount"
                />
                <div className="section-1">
                  <IonText className="sections-heading">
                    <Translate message="account.rateOfInterest" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="3.50% on balance below Rs 50 lakh" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="3.75% on balance above Rs 50 lakh" />
                      </div>
                    </IonRadioGroup>
                  </div>
                </div>
                <div className="section-2">
                  <IonText className="sections-heading">
                    <Translate message="account.deposit" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="Daily basis" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="Monthly basis" />
                      </div>
                    </IonRadioGroup>
                  </div>
                </div>
                <div className="section-3">
                  <IonText className="sections-heading">
                    <Translate message="account.savingPeriod" />
                  </IonText>
                  <div className="fixed-radio-options">
                    <IonRadioGroup>
                      <div className="options-section1">
                        <RadioComponent label="18 months" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="12 months" />
                      </div>
                      <div className="options-section1">
                        <RadioComponent label="06 months" />
                      </div>
                    </IonRadioGroup>
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

export { SavingAccountPage };
