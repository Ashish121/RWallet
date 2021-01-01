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

import './Current.scss';

const CurrentAccountPage: React.FC = () => {
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
          <IonContent className="current-account-wrapper">
            <div className="current-wrapper">
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
              <div className="current-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite(Min Rs 1000)"
                />
                <div className="CurrentSection-0">
                  <IonText className="CurrentSection-header">
                    <Translate message="account.minimumAccountBalance" />
                  </IonText>
                  <IonRadioGroup>
                    <div className="options-section1">
                      <RadioComponent label="Rs 5000 per quarter for non-rural" />
                    </div>
                    <div className="options-section1">
                      <RadioComponent label="Rs 2500 per quarter for rural" />
                    </div>
                  </IonRadioGroup>
                  <IonText className="CurrentSection-last">
                    <Translate message="account.currentWithdrawlimit" />
                  </IonText>
                  <br/>
                  <IonText className="CurrentSection-last1">
                    <Translate message="account.currentUnlimited" />
                  </IonText>
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

export { CurrentAccountPage };
