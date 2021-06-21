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

const HomePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [expandOptions, setExpandOptions] = useState(false);
  const [showHomePage, setShowHomePage] = useState(true);
  const [slider, setSlider] = useState([]);
  const balance = localStorage.getItem('balance');
  //if we click back button on device it will reach login page
  useEffect(() => {
    localStorage.setItem('previousRoute', '/');
  }, []);

  function nextRoute(status: any, data: any) {
    const imgUrl = data?.user?.slider_detail;
    setSlider(imgUrl);

    const getAccountType = localStorage.getItem('createdAccountType');
    if (status) {
      if (getAccountType === 'Fixed') {
        setShowHomePage(false);
        return;
      } else {
        history.replace('/tabs/home');
        return;
      }
    }
  }

  useEffect(() => {
    const user_id = localStorage.getItem('userId');
    dispatch(requestForProfile({ user_id }, nextRoute));
  }, []);

  const toggleExpandOptions = () => {
    setExpandOptions(!expandOptions);
  };

  const showNotifications = () => {
    history.push('/tabs/notification');
  };

  return (
    <>
      <LoaderComponent showLoading={false} loaderMessage={'Preparing...'} />
      <IonApp className='home-wrapper'>
        <IonPage>
          <HeaderComponent
            headerLable={'common.header'}
            showMenu={true}
            showNotification={true}
            notificationHandler={showNotifications}
          />
          {showHomePage ? (
            <IonContent className='home-wrapper'>
              <div className='section-1'>
                <div className='balance-check-section'>
                  <div
                    className='common-ion-text'
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '7px 0px 0px 7px',
                    }}
                  >
                    <IonText
                      className='balance-wrapper-text'
                      style={{
                        color: '#000000',
                        fontWeight: '500',
                        fontSize: '13px',
                      }}
                    >
                      <Translate message='home.balanceLabel' />
                    </IonText>
                  </div>
                  <div className='arrow_box'></div>
                  <div
                    className='common-ion-text'
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
                      className='balance-wrapper-text'
                      style={{ color: '#ffffff' }}
                    >
                      {balance}
                    </IonText>
                  </div>
                </div>
                {slider?.length > 0 && (
                  <SlidesComponent value={slider} showSlider={true} />
                )}
              </div>

              <div
                className={
                  expandOptions
                    ? 'services-options-wrapper fullHeight'
                    : 'services-options-wrapper'
                }
              >
                <IonCard
                  className='service-card-wrapper'
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
                      <div className='close-bar-icon'>
                        <button onClick={toggleExpandOptions}>
                          <CloseBarIcon />
                        </button>
                      </div>
                    )}

                    <ShoppingSection expanded={expandOptions} />

                    <LoanSection expanded={expandOptions} />
                    <UtilitiesSection expanded={expandOptions} />
                    <div className='see-more-section'>
                      <IonButton
                        onClick={toggleExpandOptions}
                        className='ion-padding'
                        style={{
                          width: '220px',
                          '--background': 'rgb(0, 71, 119)',
                          'font-size': '16px',
                          paddingBottom: '26px',
                        }}
                      >
                        <IonIcon
                          slot='end'
                          icon={
                            expandOptions ? caretDownOutline : caretUpOutline
                          }
                        />
                        {!expandOptions ? (
                          <Translate message='home.seeAll' />
                        ) : (
                          <Translate message='home.collapse' />
                        )}
                      </IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonContent>
          ) : (
            <IonContent>
              <IonCard style={{ marginTop: '30px' }}>
                <IonCardContent>
                  <div className='cart-ristricted-section'>
                    <IonText className='ristricted-cart'>
                      <Translate message='fixedAccount.type' />
                    </IonText>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonContent>
          )}
        </IonPage>
      </IonApp>
    </>
  );
};

export { HomePage };
