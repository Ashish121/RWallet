import React from 'react';
import { HeaderComponent } from '../../components';

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
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="transaction-wrapper">
              <IonText className="transaction-text-area">
                <Translate message="TransactionHistory.text" />
              </IonText>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  <div
                    className="card-body-wrapper"
                    style={{ borderLeftColor: 'red', width: '100%' }}
                  >
                    <div className="card-inner-header">
                      <IonText className="transaction-type">Payment To</IonText>
                      <IonText className="transaction-type">Rs 231</IonText>
                    </div>
                    <div className="card-inner-body">
                      <IonText className="transaction-type">TV payment</IonText>
                      <IonText
                        className="transaction-type"
                        style={{ fontSize: '8px' }}
                      >
                        12 Sep 2020
                      </IonText>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  <div
                    className="card-body-wrapper"
                    style={{ borderLeftColor: 'red', width: '100%' }}
                  >
                    <div className="card-inner-header">
                      <IonText className="transaction-type">Payment To</IonText>
                      <IonText className="transaction-type">Rs 231</IonText>
                    </div>
                    <div className="card-inner-body">
                      <IonText className="transaction-type">TV payment</IonText>
                      <IonText
                        className="transaction-type"
                        style={{ fontSize: '8px' }}
                      >
                        12 Sep 2020
                      </IonText>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  <div
                    className="card-body-wrapper"
                    style={{ borderLeftColor: 'red', width: '100%' }}
                  >
                    <div className="card-inner-header">
                      <IonText className="transaction-type">Payment To</IonText>
                      <IonText className="transaction-type">Rs 231</IonText>
                    </div>
                    <div className="card-inner-body">
                      <IonText className="transaction-type">TV payment</IonText>
                      <IonText
                        className="transaction-type"
                        style={{ fontSize: '8px' }}
                      >
                        12 Sep 2020
                      </IonText>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  <div
                    className="card-body-wrapper"
                    style={{ borderLeftColor: 'red', width: '100%' }}
                  >
                    <div className="card-inner-header">
                      <IonText className="transaction-type">Payment To</IonText>
                      <IonText className="transaction-type">Rs 231</IonText>
                    </div>
                    <div className="card-inner-body">
                      <IonText className="transaction-type">TV payment</IonText>
                      <IonText
                        className="transaction-type"
                        style={{ fontSize: '8px' }}
                      >
                        12 Sep 2020
                      </IonText>
                    </div>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent style={{ width: '100%' }}>
                  <div
                    className="card-body-wrapper"
                    style={{ borderLeftColor: 'red', width: '100%' }}
                  >
                    <div className="card-inner-header">
                      <IonText className="transaction-type">Payment To</IonText>
                      <IonText className="transaction-type">Rs 231</IonText>
                    </div>
                    <div className="card-inner-body">
                      <IonText className="transaction-type">TV payment</IonText>
                      <IonText
                        className="transaction-type"
                        style={{ fontSize: '8px' }}
                      >
                        12 Sep 2020
                      </IonText>
                    </div>
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
