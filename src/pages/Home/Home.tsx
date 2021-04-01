import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CloseBarIcon } from '../../assets/Icons';

import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton,
  IonText,
  IonImg,
} from '@ionic/react';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import {
  HeaderComponent,
  SlidesComponent,
  ShoppingSection,
  LoanSection,
  UtilitiesSection,
  LoaderComponent,
} from '../../components';
import { requestForProfile } from '../../redux/actions/';
import './Home.scss';
import { Translate } from '../../i18n/formatMessages';

import { updateToast } from '../../redux/actions';

const HomePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [balance, setBalance] = useState('');
  const [expandOptions, setExpandOptions] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const { PushNotifications } = Plugins;

  function nextRoute(status: any) {
    if (status) {
      console.log('status: ', status);
      history.replace('/tabs/home');
    }
  }

  useEffect(() => {
    const user_id = 2;
    setBalance('22090.00');
    dispatch(requestForProfile({ user_id }, nextRoute));
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
    history.replace('/tabs/notification');
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
            <div className="section-1">
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
                    style={{
                      color: '#000000',
                      fontWeight: '500',
                      fontSize: '13px',
                    }}
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
                  <IonImg
                    style={{ width: '15px', marginRight: '10px' }}
                    src={require('../../assets/Icons/Rupay.svg')}
                  />
                  <IonText
                    className="balance-wrapper-text"
                    style={{ color: '#ffffff' }}
                  >
                    {balance}
                  </IonText>
                </div>
              </div>
              <SlidesComponent />
            </div>

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

                  <ShoppingSection expanded={expandOptions} />

                  <LoanSection expanded={expandOptions} />
                  <UtilitiesSection expanded={expandOptions} />
                  <div className="see-more-section">
                    <IonButton
                      onClick={toggleExpandOptions}
                      className="ion-padding"
                      style={{
                        width: '159px',
                        '--background': 'rgb(0, 71, 119)',
                        'font-size': '16px',
                        '--padding': '10px',
                      }}
                    >
                      <IonIcon
                        slot="end"
                        icon={expandOptions ? caretDownOutline : caretUpOutline}
                      />
                      {!expandOptions ? (
                        <Translate message="home.seeAll" />
                      ) : (
                        <Translate message="home.collapse" />
                      )}
                    </IonButton>
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

export { HomePage };
