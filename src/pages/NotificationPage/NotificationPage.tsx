import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import {
  requestForNotification,
  requestForUpdateNotification,
} from '../../redux/actions/';

const NotificationPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [color, setcolor] = useState('');
  const user_id = localStorage.getItem('userId');
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    dispatch(requestForNotification({ user_id }, showNotificationList));
    dispatch(
      requestForUpdateNotification(
        { notificationId: 3 },
        UpdatedNotificationList
      )
    );
  }, []);

  useEffect(() => {
    setcolor('#004777');
  }, []);

  function showNotificationList(res: any) {
    setNotificationList(res.data.data);
    //console.log("notification :", res.data.data);
  }

  function UpdatedNotificationList(res: any) {
    const ab = res;
    history.replace('/tabs', ab);
    // console.log("updated notification :", res.data.data);
  }

  const closeNotificationPanel = () => {
    history.replace('/tabs');
  };

  const dateconverter = (item: any) => {
    const dateString = item.created_at;
    const ab2 = new Date(dateString);
    const month = ab2.getMonth() + 1;

    const newDate =
      ab2.getDate() +
      '-' +
      month +
      '-' +
      ab2.getFullYear() +
      ' ' +
      ab2.getHours() +
      ':' +
      ab2.getMinutes() +
      ':' +
      ab2.getSeconds();

    return newDate;
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
                {notificationList.map((item: any) => {
                  return (
                    <IonCard>
                      <IonCardContent>
                        <div
                          className="card-body-wrapper"
                          style={{ borderLeftColor: color }}
                        >
                          <div className="notification-text">
                            <IonText>
                              <span>Date: {dateconverter(item)}</span>
                            </IonText>
                            <IonText>
                              <p>{item.body}</p>
                            </IonText>
                          </div>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  );
                })}
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { NotificationPage };
