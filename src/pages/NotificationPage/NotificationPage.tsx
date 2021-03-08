import React, { useState } from 'react';

import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { CloseIcon } from '../../assets/Icons';

import './NotificationPage.scss';
import { Translate } from '../../i18n/formatMessages';
const NotificationPage: React.FC = () => {
  const history = useHistory();
  const [color, setcolor] = useState('');
  setcolor('blue');
  const closeNotificationPanel = () => {
    history.replace('/tabs');
  };
  return (
    <>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton
                  onClick={closeNotificationPanel}
                  style={{ position: 'absolute', width: '100%' }}
                />
                <CloseIcon />
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent style={{ '--ion-background-color': '#ffffff' }}>
            <div className="notification-wrapper">
              <div className="notification-cards-wrapper">
                <div className="page-header-text">
                  <IonText>
                    <Translate message="NotificationPage.text" />
                  </IonText>
                </div>
                <IonCard>
                  <IonCardContent>
                    <div
                      className="card-body-wrapper"
                      style={{ borderLeftColor: color }}
                    >
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonCardContent>
                    <div className="card-body-wrapper">
                      <div className="bar"></div>
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonCardContent>
                    <div className="card-body-wrapper">
                      <div className="bar"></div>
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonCardContent>
                    <div className="card-body-wrapper">
                      <div className="bar"></div>
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonCardContent>
                    <div className="card-body-wrapper">
                      <div className="bar"></div>
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonCardContent>
                    <div className="card-body-wrapper">
                      <div className="bar"></div>
                      <div className="notification-text">
                        <IonText>
                          <span>Date: 20-12-2020 17:44:02</span>
                        </IonText>
                        <IonText>
                          <p>
                            Your loan account (A/C no.) is due with interest for
                            the month of June 2020
                          </p>
                        </IonText>
                      </div>
                    </div>
                  </IonCardContent>
                </IonCard>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { NotificationPage };
