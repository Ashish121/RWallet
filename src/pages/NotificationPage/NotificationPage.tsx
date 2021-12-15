import React, { useState, useEffect } from 'react';
import { HeaderComponent } from '../../components';
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
import {requestForNotification} from '../../redux/actions/';

const NotificationPage: React.FC = () => {
 
  const dispatch = useDispatch();
 
  
  const user_id = localStorage.getItem('userId');
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    dispatch(requestForNotification({ user_id }, showNotificationList));
  }, []);

  function showNotificationList(res: any) {
    setNotificationList(res.data.data.reverse());
  }

  function historyUpdatedDate(item: Date) {
    var d = new Date(item);
    return d.toDateString();
  }

  function getBackgroundColor(status:any) {
    if (status === 'Approved') {
      return 'green';
    }
    else if (status === 'pending') {
      return 'black';
    } else {
      return 'red';
    }
  }

  return (
    <>
      
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="transaction-wrapper">
              {notificationList.length > 0 && (
                <React.Fragment>
                  <IonText className="transaction-text-area">
                    <Translate message="NotificationPage.text" />
                  </IonText>
                
                  {notificationList.map((item: any) => {
                        
                    return (
                      <IonCard>
                        <IonCardContent style={{ width: '100%' }}>
                          <div
                            className="card-body-wrapper"
                            style={{'borderLeftColor': getBackgroundColor(item.status) }}
                          >
                            <div className="card-inner-header">
                              <IonText className="transaction-type">
                                {item.subject}
                              </IonText>

                              <div
                                className="common-ion-text"
                                style={{
                                  borderRadius: '0px 7px 7px 0px',
                                  backgroundColor: '#ffffff',
                                  color: '#222428',
                                }}
                              >
                                
                              </div>
                            </div>
                            <div className="card-inner-body">
                              <IonText className="transaction-type">
                                {item.body}
                              </IonText>
                           
                            </div>
                            <div className="card-inner-body">
                              <IonText className="transaction-type">
                          
                              </IonText>
                              <IonText
                                className="transaction-type"
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
