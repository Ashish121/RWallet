import React, { useState } from 'react';
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
  LoaderComponent,
} from '../../../components';

import './Saving.scss';
import { useDispatch } from 'react-redux';
import { requestForSavingAccount } from '../../../redux/actions';
const SavingAccountPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [investment_period, setInvestmentPeriod] = useState('');
  const [amount, setAmount] = useState('');
  const [depositType, setDepositType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoadeMessage] = useState('');
  const [showDailySection, setShowDailySection] = useState(true);
  const [showMonthlySection, setShowMonthlySection] = useState(false);
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/confirm');
      return;
    }
    setIsLoading(true);
    setLoadeMessage('');
  }

  function navigateToConfirm() {
    setIsLoading(true);
    setLoadeMessage('Creating account...');
    const user_id = localStorage.getItem('userId');

    dispatch(
      requestForSavingAccount(
        { investment_period, user_id, amount, depositType },
        nextRoute
      )
    );
    console.log('Handling saving account', amount, investment_period);
  }

  function updateInvestmentPeriod(event: any) {
    const investment_period = event.target.value;
    setInvestmentPeriod(investment_period);
    console.log('investment_period', investment_period);
  }

  function updateAmount(amount: any) {
    console.log('amount', amount);
    setAmount(amount);
  }

  function updateDepositType(event: any) {
    const depositType = event.target.value;
    setDepositType(depositType);
    if (depositType === 'daily') {
      setShowDailySection(true);
      setShowMonthlySection(false);
    } else {
      setShowDailySection(false);
      setShowMonthlySection(true);
    }
  }

  function goBack() {
    history.replace('/accountpage');
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent className="saving-account-wrapper">
            <div className="saving-wrapper">
              <div className="page-inner-wrapper">
                <div className="page-header-label">
                  <IonText className="account-no-text">
                    <Translate message="account.savingPageHeader" />
                  </IonText>
                </div>
              </div>
              <div className="saving-content-wrapper">
                <InputText
                  inputType="tel"
                  placeholderText="Amount of deposite(Min Rs 1000)"
                  onChange={updateAmount}
                />
                <div className="SavingSection-0">
                  <IonText className="section-header">
                    <Translate message="account.savingDeposit" />
                  </IonText>
                  <IonRadioGroup onIonChange={updateDepositType}>
                    <div className="options-section1">
                      <RadioComponent
                        label="Daily Rs 100"
                        val="daily"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                    <div className="options-section1">
                      <RadioComponent
                        label="Monthly Rs 1000"
                        val="monthly"
                        showRadioButton={true}
                        showColor={true}
                      />
                    </div>
                  </IonRadioGroup>
                </div>
                {showDailySection && (
                  <div className="SevingSection-1">
                    <IonText className="section-header">
                      <Translate message="account.investmentPeriodDaily" />
                    </IonText>

                    <IonRadioGroup onIonChange={updateInvestmentPeriod}>
                      <div className="options-section1">
                        <RadioComponent
                          label="12 months with 3.5%"
                          val="12"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="24 months with 8%"
                          val="24"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="36 months with 13%"
                          val="36"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                    </IonRadioGroup>
                  </div>
                )}
                {showMonthlySection && (
                  <div className="SevingSection-2">
                    <IonText className="section-header">
                      <Translate message="account.investmentPeriodMonthly" />
                    </IonText>

                    <IonRadioGroup onIonChange={updateInvestmentPeriod}>
                      <div className="options-section1">
                        <RadioComponent
                          label="12 months with 5%"
                          val="12"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="24 months with 6%"
                          val="24"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="36 months with 12%"
                          val="36"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="48 months with 15.5%"
                          val="48"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                      <div className="options-section1">
                        <RadioComponent
                          label="60 monthss with 20%"
                          val="60"
                          showRadioButton={true}
                          showColor={true}
                        />
                      </div>
                    </IonRadioGroup>
                  </div>
                )}
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
                    disabled={
                      investment_period.trim() &&
                      amount.trim() &&
                      depositType.trim()
                        ? false
                        : true
                    }
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
