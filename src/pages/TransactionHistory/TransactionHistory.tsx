import React, { useState } from 'react';
import {HeaderComponent} from '../../components';

import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,

} from '@ionic/react';
import './TransactionHistory.scss';
import { Translate } from '../../i18n/formatMessages';

const TransactionHistory: React.FC = () => {
  const transactionMessage = useState('Tv Recharge  ');
  const transactionDate = useState('12/18/2020');
  const AmountMessage=useState('250');
 
  
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="transaction-wrapper">
              <IonText className="transaction-text-area">
                <Translate  message="TransactionHistory.text"/>
              </IonText>
              <IonCard className="transactionHistory-area">
                <IonCardContent className="transactionHistory-content">
                  <div className="vl-red">    </div>
                  <IonText className="transaction-pyment">
                    <Translate message="TransactionHistory.payment" />{' '}
                    <IonText className="transactionMessage">
                      {AmountMessage}
                    </IonText>
                  </IonText>
                  <div className="message-box">
                    <IonText className="transactionMessage">
                      {transactionMessage}
                    </IonText>
                    <IonText className="transactionDateMessage">
                      { transactionDate}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard className="transactionHistory-area">
                <IonCardContent className="transactionHistory-content">
                  <div className="vl-green">    </div>
                  <IonText className="transaction-pyment">
                    <Translate message="TransactionHistory.Receivedfrom" />{' '}
                  </IonText>
                  <div className="message-box">
                    <IonText className="transactionMessage">
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TransactionHistory };
