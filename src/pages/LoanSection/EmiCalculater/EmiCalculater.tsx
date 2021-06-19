import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { useDispatch, useSelector } from 'react-redux';

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
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState(Number);
  const [loanTenure, setLoanTenure] = useState(Number);
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const emiDetails = useSelector((state: any) => state.emi.emiDetails);

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/loanType');
  }, []);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      setShowMenu(!showMenu);
      return;
    }
  }

  function handleCalculate() {
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
    setLoanAmount(loanAmount);
  }

  function updateInterestRate(interestRate: any) {
    interestRate = interestRate.detail.value;
    setInterestRate(interestRate);
  }

  function updateLoanTenure(loanTenure: any) {
    loanTenure = loanTenure.detail.value;
    setLoanTenure(loanTenure);
  }
  function goBack() {
    history.replace('/tabs/loanType');
  }

  function handleResetButtonForEMI() {
    setLoanAmount('');
    setInterestRate(0);
    setLoanTenure(0);

    let emiInputFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < emiInputFields.length; ++i) {
      if (emiInputFields[i].id === 'input-area') emiInputFields[i].value = '';
    }
    setShowMenu(false);
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
              <div className="emi-container">
                <IonText className="emi-calcluter-text-area">
                  <Translate message="emiCalculator" />
                </IonText>
                <div className="emi-calculater-wrapper">
                  <InputText
                    inputType="tel"
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
                        min={1}
                        max={20}
                        handler={updateInterestRate}
                        value={interestRate}
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
                      <RangeSlider
                        min={1}
                        max={10}
                        handler={updateLoanTenure}
                        value={loanTenure}
                      />
                    </div>
                  </div>

                  <div className="button-Section">
                    <div className="emiCalculate-rest">
                      <ButtonConmponent
                        buttonLabel="emiRest"
                        size="block"
                        clickHandler={handleResetButtonForEMI}
                      />
                    </div>
                    <div className="emiCalculater-calculate">
                      <ButtonConmponent
                        buttonLabel="emiCalculate"
                        size="block"
                        disabled={
                          loanAmount && interestRate && loanTenure
                            ? false
                            : true
                        }
                        clickHandler={handleCalculate}
                      />
                    </div>
                  </div>
                </div>

                {showMenu && (
                  <>
                    <div className="emiCalculater">
                      <IonText className="emi-cal-principal">
                        <span className="emi-interest">
                          <Translate message="emiPrinivipalAmount" />
                        </span>
                      </IonText>
                      <div className="name-message">
                        <IonText className="nameMessage">{loanAmount}</IonText>
                      </div>
                    </div>
                    <div className="emiCalculater">
                      <IonText className="emi-cal-principal">
                        <span className="emi-interest">
                          <Translate message="emiInterest" />
                        </span>
                      </IonText>
                      <div className="name-message">
                        <IonText className="nameMessage">
                          {emiDetails.data.data.total_interest}
                        </IonText>
                      </div>
                    </div>

                    <div className="emiCalculater">
                      <IonText className="emi-cal-principal">
                        <span className="emi-interest">
                          <Translate message="emiTotal" />
                        </span>
                      </IonText>
                      <div className="name-message">
                        <IonText className="nameMessage">
                          {emiDetails.data.data.total_payable}
                        </IonText>
                      </div>
                    </div>
                    <div className="emiCalculater-message">
                      <IonText className="emi-cal-principal-message">
                        <span className="emi-interest-message">
                          <Translate message="emiAmountMonthely" />
                        </span>
                      </IonText>
                      <div className="emi-message">
                        <IonText className="nameMessage">
                          {emiDetails.data.data.emi}
                        </IonText>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </IonContent>
          </IonPage>
        </IonApp>
      </>
    </>
  );
};

export { EmiCalculater };
