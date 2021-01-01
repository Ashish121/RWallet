import React from 'react';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }
  function navigateToConfirm() {
    // console.log("history: ", history);
    // console.log("Router.History", Router.History);
    // history.replaceState("/confirm");
    history.replace('/confirm');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent className="saving-account-wrapper">
            <div className="saving-wrapper">
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
              <div className="saving-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite(Min Rs 1000)"
                />
                <div className="SavingSection-0">
                  <IonText className="section-header">
                    <Translate message="account.savingDeposit" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="Daily Rs 1000" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="Monthly Rs 1000" />
                    </div>
                  </IonRadioGroup>
                </div>
                <div className="SevingSection-1">
                  <IonText className="section-header">
                    <Translate message="account.investmentPeriodDaily" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="12 months with 3.5%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="24 months with 8%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="36 months with 13%" />
                    </div>
                  </IonRadioGroup>
                </div>
                <div className="SevingSection-2">
                  <IonText className="section-header">
                    <Translate message="account.investmentPeriodMonthly" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="12 months with 5%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="24 months with 6%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="36 months with 12%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="48 months with 15.5%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="60 monthss with 20%" />
                    </div>
                  </IonRadioGroup>
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
                    size="block"
                    clickHandler={navigateToConfirm}
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

export { SavingAccountPage };
