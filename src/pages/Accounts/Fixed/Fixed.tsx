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

import './Fixed.scss';

const FixedAccountPage: React.FC = () => {
  const history = useHistory();
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }
  function navigateToConfirm() {
    history.push('/confirm');
  }

  return (
    <div>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent className="fixed-account-wrapper">
            <div className="fixed-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate
                      message="account.fixedPageHeader"
                      value={{ accountNo: '07601402201' }}
                    />
                  </IonText>
                </div>
              </div>
              <div className="fixed-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite"
                />
                <div className="section-1">
                  <IonText>
                    <Translate message="account.investmentPeriod" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="18 Months and 50%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="12 Months and 50%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="06 Months and 50%" />
                    </div>
                  </IonRadioGroup>
                </div>
                <div className="section-2">
                  <IonText>
                    <Translate message="account.investmentPeriod" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="18 Months and 50%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="12 Months and 50%" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="06 Months and 50%" />
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
    </div>
  );
};

export { FixedAccountPage };
