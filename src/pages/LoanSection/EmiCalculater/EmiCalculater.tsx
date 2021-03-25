import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { useDispatch } from 'react-redux';

import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  RangeSlider,
  LoaderComponent,
} from '../../../components';
import './EmiCalculater.scss';
import { requestForEmiCalculaterPage } from '../../../redux/actions';

const EmiCalculater: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loanAmount, setLoanAmount] = useState(Number);
  const [interestRate, setInterestRate] = useState(Number);
  const [loanTenure, setLoanTenure] = useState(Number);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const prinicipalAmount = useState('10000.00');
  const interest = useState('724.00');
  const totalPayable = useState('10724.00');
  const emiAmountMonthly = useState('416.34');

  //   const emiDetails = useSelector(
  //     (state: any) => state.emi.emiDetails.data.data
  //   );
  // console.log("emiDetails", emiDetails);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      // history.replace('/tabs/emiCalculater');
      return;
    }
  }

  function handleCalculate() {
    console.log('Handling registration');
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForEmiCalculaterPage(
        { loanAmount, interestRate, loanTenure },
        nextRoute
      )
    );
  }

  function updateLoanAmount(loanAmount: any) {
    console.log('loanAmount :', loanAmount);
    setLoanAmount(loanAmount);
  }

  function updateInterestRate(interestRate: any) {
    console.log('interestRate :', interestRate);
    setInterestRate(interestRate);
  }

  function updateLoanTenure(loanTenure: any) {
    console.log('loanTenure :', loanTenure);
    setLoanTenure(loanTenure);
  }
  function goBack() {
    // history.replace("/tabs/loanType");
    history.replace('/tabs/emiCalculater');
  }

  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />
      <>
        <HeaderComponent
          headerLable="common.header"
          showBackButton={true}
          handler={goBack}
        />
        <IonApp>
          <IonPage>
            <HeaderComponent headerLable="common.header" />
            <IonContent>
              <div className="container">
                <IonText className="emi-calcluter-text-area">
                  <Translate message="emiCalculator" />
                </IonText>
                <div className="emi-calculater-wrapper">
                  <InputText
                    inputType="text"
                    labelText="emiloanAmount"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateLoanAmount}
                  />

                  <div className="interest-area">
                    <IonText className="interestRate-area">
                      <span className="emi-interest">
                        <Translate message="emiInterestRate" />
                      </span>
                    </IonText>
                    <div className="range-area">
                      <RangeSlider
                        min={12}
                        max={16}
                        handler={updateInterestRate}
                      />
                    </div>
                  </div>
                  <div className="interest-area1">
                    <IonText className="interestRate-area">
                      <span className="emi-interest">
                        <Translate message="emiLoanTenure" />
                      </span>
                    </IonText>
                    <div className="range-area">
                      <RangeSlider min={1} max={4} handler={updateLoanTenure} />
                    </div>
                  </div>

                  <div className="button-Section">
                    <div className="emiCalculate-rest">
                      <ButtonConmponent buttonLabel="emiRest" size="block" />
                    </div>
                    <div className="emiCalculater-calculate">
                      <ButtonConmponent
                        buttonLabel="emiCalculate"
                        size="block"
                        clickHandler={handleCalculate}
                      />
                    </div>
                  </div>
                </div>

                <div className="emiCalculater">
                  <IonText className="emi-cal-prinival">
                    <span className="emi-interest">
                      <Translate message="emiPrinivipalAmount" />
                    </span>
                  </IonText>
                  <div className="name-message">
                    <IonText className="nameMessage">
                      {prinicipalAmount}
                    </IonText>
                  </div>
                </div>
                <div className="emiCalculater">
                  <IonText className="emi-cal-prinival">
                    <span className="emi-interest">
                      <Translate message="emiInterest" />
                    </span>
                  </IonText>
                  <div className="name-message">
                    <IonText className="nameMessage">{interest}</IonText>
                  </div>
                </div>

                <div className="emiCalculater">
                  <IonText className="emi-cal-prinival">
                    <span className="emi-interest">
                      <Translate message="emiTotal" />
                    </span>
                  </IonText>
                  <div className="name-message">
                    <IonText className="nameMessage">{totalPayable}</IonText>
                  </div>
                </div>
                <div className="emiCalculater1">
                  <IonText className="emi-cal-prinival1">
                    <span className="emi-interest1">
                      <Translate message="emiAmountMonthely" />
                    </span>
                  </IonText>
                  <div className="name-message1">
                    <IonText className="nameMessage">
                      {emiAmountMonthly}
                    </IonText>
                  </div>
                </div>
              </div>
            </IonContent>
          </IonPage>
        </IonApp>
      </>
    </>
  );
};

export { EmiCalculater };
