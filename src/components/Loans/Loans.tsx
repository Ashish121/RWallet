import React from 'react';
import { IonText, IonRow, IonCol } from '@ionic/react';
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
          <IonText text-center>
            <Translate message="home.loanText" />
          </IonText>
        </div>
        <IonRow>
          <IonCol>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <div>
                <button className="iconButtons">
                  <LoanIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.businessLoan" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <PurchaseIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.puchaseLoan" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <TearmLoanIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.termLoan" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <PersonalLoanIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.personalLoanText" />
                  </IonText>
                </button>
              </div>
            </div>
          </IonCol>
        </IonRow>
        {expanded && (
          <IonRow>
            <IonCol>
              <div>
                <button className="iconButtons" style={{ marginTop: '20px' }}>
                  <EducationIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.educationTedxt" />
                  </IonText>
                </button>
              </div>
            </IonCol>
            <IonCol>
              <div>
                <button
                  className="iconButtons"
                  style={{ marginLeft: '14px', marginTop: '20px' }}
                >
                  <Securityicon width="20" height="20" />
                  <IonText>
                    <Translate message="home.secureText" />
                  </IonText>
                </button>
              </div>
            </IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
          </IonRow>
        )}
      </div>
    </>
  );
};

export default LoanSection;
