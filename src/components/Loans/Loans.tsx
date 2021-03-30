import React from 'react';
import { IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
import {
  LoanIcon,
  PersonalLoanIcon,
  PurchaseIcon,
  TearmLoanIcon,
} from '../../assets/Icons';
import './Loans.scss';
import { EducationIcon } from '../../assets/Icons/EducationIcon';
import { Securityicon } from '../../assets/Icons/SecurityIcon';

interface loanProps {
  expanded?: boolean;
}

const LoanSection: React.FC<loanProps> = ({ expanded }) => {
  const history = useHistory();
  const navigateToLoan = (id: any) => {
    history.replace({
      pathname: '/tabs/loanType',
      state: {
        loanId: id,
      },
    });
  };
  return (
    <>
      <div className="loan-section">
        <div style={{ textAlign: 'center' }}>
          <IonText text-center style={{ fontWeight: '600' }}>
            <Translate message="home.loanText" />
          </IonText>
        </div>
        <div className="loan-list-container">
          <div>
            <button className="iconButtons" onClick={() => navigateToLoan(1)}>
              <LoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.businessLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons" onClick={() => navigateToLoan(2)}>
              <PurchaseIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.puchaseLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons" onClick={() => navigateToLoan(3)}>
              <TearmLoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.termLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons" onClick={() => navigateToLoan(4)}>
              <PersonalLoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.personalLoanText" />
            </IonText>
          </div>
          {expanded && (
            <>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToLoan(5)}
                >
                  <EducationIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.educationTedxt" />
                </IonText>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToLoan(6)}
                >
                  <Securityicon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.secureText" />
                </IonText>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
    </>
  );
};

export default LoanSection;
