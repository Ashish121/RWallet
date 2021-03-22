import React from 'react';
import { IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
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
            <button className="iconButtons">
              <LoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.businessLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <PurchaseIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.puchaseLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <TearmLoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.termLoan" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <PersonalLoanIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.personalLoanText" />
            </IonText>
          </div>
          {expanded && (
            <>
              <div>
                <button className="iconButtons">
                  <EducationIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.educationTedxt" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
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
