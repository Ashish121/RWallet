import React, { useState, useEffect } from 'react';
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
} from '../../components';

import './Home.scss';
import { Translate } from '../../i18n/formatMessages';
import { CloseBarIcon } from '../../assets/Icons';

const HomePage: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [expandOptions, setExpandOptions] = useState(false);

  useEffect(() => {
    setBalance(22090);
  }, []);
  const toggleExpandOptions = () => {
    console.log('Hello');
    setExpandOptions(!expandOptions);
  };

  return (
    <IonApp className="home-wrapper">
      <IonPage>
        <HeaderComponent
          headerLable={'common.header'}
          showMenu={true}
          showNotification={true}
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
                expandOptions ? { overflow: 'scroll' } : { overflow: 'hidden' }
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
                        icon={expandOptions ? caretUpOutline : caretDownOutline}
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
  );
};

export { HomePage };
