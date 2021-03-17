import React, { useEffect, useState } from 'react';

import './LoanType.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  CustomAccordion,
  HeaderComponent,
  ButtonConmponent,
} from '../../../components';
import { useHistory } from 'react-router-dom';

const LoanType: React.FC = () => {
  const history = useHistory();

  function handleEMIcal() {
    console.log('Handling registration');
    history.replace('/tabs/emiCalculater');
  }
  const [accordionDetails, setAccordionDetails] = useState([{}]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Hide splash now');
      return () => {
        clearTimeout(timeout);
      };
    }, 7000);
  }, []);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: 'BUSINESS LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },
      {
        id: 2,
        title: 'HIRE-PURCHASE LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },

      {
        id: 3,
        title: 'TERM LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },

      {
        id: 4,
        title: 'PERSONAL LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },

      {
        id: 5,
        title: 'EDUCATION LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },

      {
        id: 6,
        title: 'SECURED LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: false,
      },
    ];
    setAccordionDetails(data);
  }, []);

  function goBack() {
    history.replace('/tabs');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="loan-type-text-area">
                <Translate message="Loan Types" />
              </IonText>

              <div className="loan-type-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>

              <div className="loanType-btn">
                <ButtonConmponent
                  buttonLabel="EMI Calculator"
                  size="block"
                  clickHandler={handleEMIcal}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { LoanType };
