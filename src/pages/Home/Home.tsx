import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';
import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonGrid,
  IonIcon,
  IonButton,
  IonText,
} from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import {
  HeaderComponent,
  SlidesComponent,
  ShoppingSection,
  LoanSection,
  UtilitiesSection,
  LoaderComponent,
} from '../../components';

import './Home.scss';
import { Translate } from '../../i18n/formatMessages';
import { CloseBarIcon } from '../../assets/Icons';
import { updateToast } from '../../redux/actions';

const HomePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);
  const [expandOptions, setExpandOptions] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const { PushNotifications } = Plugins;
  useEffect(() => {
    setBalance(22090);
    askPushPermission();
  }, []);

  const askPushPermission = () => {
    console.log('Asking for permission for push notification');
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        console.log('User accepted the permission');
        setInitializing(true);
        PushNotifications.register();
        registerListener();
      } else {
        const data = {
          showToast: true,
          toastMessage: 'Push notification registration failed',
          position: 'top',
          duration: '10000',
        };
        dispatch(updateToast(data));
        console.log('Declined the permission');
      }
    });
  };

  const registerListener = () => {
    console.log('Registering listner for status of registration');
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('Push registration success, token: ', token.value);
      }
    );
    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ', JSON.stringify(error));
    });
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        console.log('Push received: ', JSON.stringify(notification));
      }
    );
    // Method called when tapping on a notification
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        console.log('Push action performed: ', JSON.stringify(notification));
      }
    );
    setInitializing(false);
  };

  const toggleExpandOptions = () => {
    console.log('Hello');
    setExpandOptions(!expandOptions);
  };

  const showNotifications = () => {
    history.push('/tabs/notification');
  };

  return (
    <>
      <LoaderComponent
        showLoading={initializing}
        loaderMessage={'Preparing...'}
      />
      <IonApp className="home-wrapper">
        <IonPage>
          <HeaderComponent
            headerLable={'common.header'}
            showMenu={true}
            showNotification={true}
            notificationHandler={showNotifications}
          />

          <IonContent className="home-wrapper">
            <div className="balance-check-section">
              <div
                className="common-ion-text"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '7px 0px 0px 7px',
                }}
              >
                <IonText
                  className="balance-wrapper-text"
                  style={{ color: '#000000' }}
                >
                  <Translate message="home.balanceLabel" />
                </IonText>
              </div>
              <div className="arrow_box"></div>
              <div
                className="common-ion-text"
                style={{
                  backgroundColor: '#004777',
                  borderRadius: '0px 7px 7px 0px',
                }}
              >
                <IonText
                  className="balance-wrapper-text"
                  style={{ color: '#ffffff' }}
                >
                  {balance}
                </IonText>
              </div>
            </div>
            <SlidesComponent />

            <div
              className={
                expandOptions
                  ? 'services-options-wrapper fullHeight'
                  : 'services-options-wrapper'
              }
            >
              <IonCard
                className="service-card-wrapper"
                style={
                  expandOptions
                    ? { overflow: 'scroll' }
                    : { overflow: 'hidden' }
                }
              >
                <IonCardContent
                  style={{ paddingBottom: '0px', paddingTop: '0px' }}
                >
                  {expandOptions && (
                    <div className="close-bar-icon">
                      <button onClick={toggleExpandOptions}>
                        <CloseBarIcon />
                      </button>
                    </div>
                  )}

                  <IonGrid>
                    <ShoppingSection expanded={expandOptions} />

                    <LoanSection expanded={expandOptions} />
                    <UtilitiesSection expanded={expandOptions} />
                    <div className="see-more-section">
                      <IonButton onClick={toggleExpandOptions}>
                        <IonIcon
                          slot="end"
                          icon={
                            expandOptions ? caretUpOutline : caretDownOutline
                          }
                        />
                        {!expandOptions ? (
                          <Translate message="home.seeAll" />
                        ) : (
                          <Translate message="home.collapse" />
                        )}
                      </IonButton>
                    </div>
                  </IonGrid>
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { HomePage };
