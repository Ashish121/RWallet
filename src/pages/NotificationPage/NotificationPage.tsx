import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { HeaderComponent, LoaderComponent } from '../../components';
import { useDispatch } from 'react-redux';

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
import { requestForNotification } from '../../redux/actions/';
import { CloseIcon } from '../../assets/Icons';

const NotificationPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem('userId');
  const [notificationList, setNotificationList] = useState([]);
  const [message, setLoaderMessage] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setLoaderMessage('Loading notifications...');
    dispatch(requestForNotification({ user_id }, showNotificationList));
  }, []);

  function showNotificationList(res: any) {
    setIsLoading(false);
    setNotificationList(res.data.data.reverse());
  }

  function historyUpdatedDate(item: Date) {
    var d = new Date(item);
    return d.toDateString();
  }

  function getBackgroundColor(status: any) {
    if (status === 'Approved') {
      return 'green';
    } else if (status === 'pending') {
      return 'black';
    } else {
      return 'red';
    }
  }

  const closeNotificationPanel = () => {
    history.replace('/tabs');
  };

  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable='common.header' />

          <IonContent>
            <div className='notification-wrapper'>
              {/* <IonButton
                slot='end'
                onClick={closeNotificationPanel}
                style={{ position: "absolute", width: "100%" }}
              /> */}
              {!isLoading && notificationList.length == 0 && (
                <>
                  <div className='close-btn-wrapper'>
                    <button onClick={closeNotificationPanel}>
                      <CloseIcon iconColor='white' />
                    </button>
                  </div>
                  <div
                    className='no_data_text'
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <IonText>
                      <Translate
                        message='common.noData'
                        value={{ title: 'Notification' }}
                      />
                      .
                    </IonText>
                  </div>
                </>
              )}
              {notificationList.length > 0 && (
                <React.Fragment>
                  <div className='close-btn-wrapper'>
                    <button onClick={closeNotificationPanel}>
                      <CloseIcon iconColor='white' />
                    </button>
                  </div>
                  <IonText className='transaction-text-area'>
                    <Translate message='NotificationPage.text' />
                  </IonText>

                  {notificationList.map((item: any) => {
                    return (
                      <IonCard>
                        <IonCardContent style={{ width: '100%' }}>
                          <div
                            className='card-body-wrapper'
                            style={{
                              borderLeftColor: getBackgroundColor(item.status),
                            }}
                          >
                            <div className='card-inner-header'>
                              <IonText className='transaction-type'>
                                {item.subject}
                              </IonText>

                              <div
                                className='common-ion-text'
                                style={{
                                  borderRadius: '0px 7px 7px 0px',
                                  backgroundColor: '#ffffff',
                                  color: '#222428',
                                }}
                              ></div>
                            </div>
                            <div className='card-inner-body'>
                              <IonText className='transaction-type'>
                                {item.body}
                              </IonText>
                            </div>
                            <div className='card-inner-body'>
                              <IonText className='transaction-type'></IonText>
                              <IonText
                                className='transaction-type'
                                style={{ fontSize: '10px' }}
                              >
                                {historyUpdatedDate(item.updated_at)}
                              </IonText>
                            </div>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    );
                  })}
                </React.Fragment>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { NotificationPage };
