import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent,RangeSlider  } from '../../../components';
import './EmiCalculater.scss';

const EmiCalculater: React.FC = () => {
  const history = useHistory();
  const prinicipalAmount = useState('10000.00');
  const interest= useState('724.00');
  const totalPayable = useState('10724.00');
  const emiAmountMonthly = useState('416.34');

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
                />
               
                <div className="interest-area">
                  <IonText className="interestRate-area"><span className="emi-interest"><Translate message='emiInterestRate'/></span></IonText>
                  <div className="range-area">
                    <RangeSlider />
                  </div>
                </div>
                <div className="interest-area">
                  <IonText className="interestRate-area"><span className="emi-interest"><Translate message='emiLoanTenure'/></span></IonText>
                  <div className="range-area">
                    <RangeSlider />
                  </div>
                </div>
              
                <div className="button-Section">
                  <div className="emiCalculate-rest">
                    <ButtonConmponent
                      buttonLabel="emiRest"
                      size="block"
                    />
                  </div>
                  <div className="emiCalculater-calculate">
                    <ButtonConmponent
                      buttonLabel="emiCalculate"
                      size="block"
                      clickHandler={handleproceed}
                    />
                  </div>
                </div>
              </div>
              <div className="emiCalculater">
                <IonText className="emi-cal-prinival"><span className="emi-interest"><Translate message='emiPrinivipalAmount'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    {prinicipalAmount}
                  </IonText>
                </div>
              </div>
              <div className="emiCalculater">
                <IonText className="emi-cal-prinival"><span className="emi-interest"><Translate message='emiInterest'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    {interest}
                  </IonText>
                </div>
              </div>
              <div className="emiCalculater">
                <IonText className="emi-cal-prinival"><span className="emi-interest"><Translate message='emiTotal'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    {totalPayable}
                  </IonText>
                </div>
              </div>
              <div className="emiCalculater1">
                <IonText className="emi-cal-prinival1"><span className="emi-interest1"><Translate message='emiAmountMonthely'/></span></IonText>
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
  );
};

export { EmiCalculater };
