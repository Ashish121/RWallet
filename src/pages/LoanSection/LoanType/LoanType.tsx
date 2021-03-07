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
        showDetails: false,
      },
      {
        id: 2,
        title: 'HIRE-PURCHASE LOAN',
        showDetails: false,
      },

      {
        id: 3,
        title: 'TERM LOAN',
        showDetails: false,
      },

      {
        id: 4,
        title: 'PERSONAL LOAN',
        showDetails: false,
      },

      {
        id: 5,
        title: 'EDUCATION LOAN',
        showDetails: false,
      },

      {
        id: 6,
        title: 'SECURED LOAN',
        showDetails: false,
      },
    ];
    setAccordionDetails(data);
  }, []);

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="loan-type-text-area">
                <Translate message="LoanTypeText" />
              </IonText>
              <div className="loan-type-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>
              <div className="loanType-btn">
                <ButtonConmponent
                  buttonLabel="LoanTypeEmiCal"
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
