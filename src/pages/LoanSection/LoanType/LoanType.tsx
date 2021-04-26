import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './LoanType.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  CustomAccordion,
  HeaderComponent,
  ButtonConmponent,
} from '../../../components';

const LoanType: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  function handleEMIcal() {
    history.replace('/tabs/emiCalculater');
  }
  const [accordionDetails, setAccordionDetails] = useState([{}]);

  useEffect(() => {
    const params: any = location.state;
    const loanId = params && params.loanId ? params.loanId : 0;

    const data = [
      {
        id: 1,
        title: 'BUSINESS LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 1 ? true : false,
      },
      {
        id: 2,
        title: 'HIRE-PURCHASE LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 2 ? true : false,
      },

      {
        id: 3,
        title: 'TERM LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 3 ? true : false,
      },

      {
        id: 4,
        title: 'PERSONAL LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 4 ? true : false,
      },

      {
        id: 5,
        title: 'EDUCATION LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 5 ? true : false,
      },

      {
        id: 6,
        title: 'SECURED LOAN',
        amount: '40000',
        interest: '12-16%',
        year: '1-4 years',
        showDetails: loanId == 6 ? true : false,
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
            <div className="loan-type-container">
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
