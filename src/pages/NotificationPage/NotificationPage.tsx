import React, { useState } from 'react';

import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,

} from '@ionic/react';
import './NotificationPage.scss';
import { Translate } from '../../i18n/formatMessages';
const NotificationPage: React.FC = () => {

  const notificationDate = useState('12/18/2020');
  const notificationtime = useState('12:00:21');
  const notificationMessage = useState('Your loan account (A/C no.) is due with interest for the month ');
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="container-notification">
              <IonText className="notification-text-area">
                <Translate  message="NotificationPage.text"/>
              </IonText>
              <IonText className="notification-today-text" >
                <Translate  message="NotificationPage.today"/>
              </IonText>
              <IonCard className="notification-area">
                <IonCardContent className="notification-content">
                  <div className="vl">    </div>
                  <IonText className="notificationdate">
                    <Translate message="NotificationPage.date" />{' '}
                    {notificationDate}
                  </IonText>
                  <IonText className="notificationtime">
                    <Translate
                      message="NotificationPage.time" />{' '}
                    {notificationtime}
                  </IonText>
                  <div className="message-box">
                    <IonText className="notificationMessage">
                      {notificationMessage}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonText className="notification-today-text" >
                <Translate  message="NotificationPage.yesterday"/>
              </IonText>
              <IonCard className="notification-area">
                <IonCardContent className="notification-content">
                  <div className="vl">    </div>
                  <IonText className="notificationdate">
                    <Translate message="NotificationPage.date" />{' '}
                    {notificationDate}
                  </IonText>
                  <IonText className="notificationtime">
                    <Translate
                      message="NotificationPage.time" />{' '}
                    {notificationtime}
                  </IonText>
                  <div className="message-box">
                    <IonText className="notificationMessage">
                      {notificationMessage}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard className="notification-area">
                <IonCardContent className="notification-content">
                  <div className="vl">    </div>
                  <IonText className="notificationdate">
                    <Translate message="NotificationPage.date" />{' '}
                    {notificationDate}
                  </IonText>
                  <IonText className="notificationtime">
                    <Translate
                      message="NotificationPage.time" />{' '}
                    {notificationtime}
                  </IonText>
                  <div className="message-box">
                    <IonText className="notificationMessage">
                      {notificationMessage}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonText className="notification-today-text" >
                <Translate  message="NotificationPage.ThisWeek"/>
              </IonText>
              <IonCard className="notification-area">
                <IonCardContent className="notification-content">
                  <div className="vl">    </div>
                  <IonText className="notificationdate">
                    <Translate message="NotificationPage.date" />{' '}
                    {notificationDate}
                  </IonText>
                  <IonText className="notificationtime">
                    <Translate
                      message="NotificationPage.time" />{' '}
                    {notificationtime}
                  </IonText>
                  <div className="message-box">
                    <IonText className="notificationMessage">
                      {notificationMessage}
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
              <IonCard className="notification-area">
                <IonCardContent className="notification-content">
                  <div className="vl">    </div>
                  <IonText className="notificationdate">
                    <Translate message="NotificationPage.date" />{' '}
                    {notificationDate}
                  </IonText>
                  <IonText className="notificationtime">
                    <Translate
                      message="NotificationPage.time" />{' '}
                    {notificationtime}
                  </IonText>
                  <div className="message-box">
                    <IonText className="notificationMessage">
                      {notificationMessage}
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

export { NotificationPage };


