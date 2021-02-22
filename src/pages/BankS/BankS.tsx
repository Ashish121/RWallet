import React, { useState } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
import { ButtonConmponent, HeaderComponent} from '../../components';
import './BankS.scss';
const BankS: React.FC = () => {
  const history = useHistory();
  const DestinationBank=useState('XYZ');
  const AccountHolderName=useState('XYZ');
  const accountNumber=useState('XYZ');
  const mobileNumber=useState('XYZ');
  const amount=useState('XYZ');
  const remarks=useState('XYZ');

   
  function handleSucess() {
    console.log('Handling registration');
    history.push('/tabs/confirm');
  }
  
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="bankDetails-container">
              <IonText className="bankDetails-text-area">
                <Translate  message="fund.bankTrasfer"/>
              </IonText>
              <div className='bankDetails-wrapper'>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.destination'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {DestinationBank}
                  </IonText>
                </div>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.holderName'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {AccountHolderName}
                  </IonText>
                </div>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.number'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {accountNumber}
                  </IonText>
                </div>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.mobile'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {mobileNumber}
                  </IonText>
                </div>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.amount'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {amount}
                  </IonText>
                </div>
                <IonText className="bankDetails-header-text"><span className="bank_text"><Translate message='bank.remark'/></span></IonText>
                <div className="bankDetails-message">
                  <IonText className="nameMessage">
                    {remarks}
                  </IonText>
                </div>
                <div className="bankDetails-button">
                  <div style={{marginTop: '13px'}}>
                    <ButtonConmponent buttonLabel='agent.conform' size='block' clickHandler={handleSucess}/>
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { BankS };
