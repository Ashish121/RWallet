import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';
import {
  HeaderComponent,
  SlidesComponent,
  ShoppingSection,
  LoanSection,
  UtilitiesSection,
} from '../../components';

import './Home.scss';
import { Translate } from '../../i18n/formatMessages';

const HomePage: React.FC = () => {
  const [expandOptions, setExpandOptions] = useState(false);
  const toggleExpandOptions = () => {
    console.log('Hello');

    setExpandOptions(!expandOptions);
  };
  return (
    <IonApp className="page-wrapper">
      <IonPage>
        <HeaderComponent
          headerLable={'common.header'}
          showMenu={true}
          showNotification={true}
        />
        <IonContent>
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
                <IonGrid>
                  <ShoppingSection expanded={expandOptions} />
                  <hr />
                  <LoanSection expanded={expandOptions} />
                  <hr />
                  <UtilitiesSection expanded={expandOptions} />
                  <div className="see-more-section">
                    <IonRow>
                      <IonCol>
                        <IonButton onClick={toggleExpandOptions}>
                          <IonIcon slot="end" icon={caretDownOutline} />
                          {!expandOptions ? (
                            <Translate message="home.seeAll" />
                          ) : (
                            <Translate message="home.collapse" />
                          )}
                        </IonButton>
                      </IonCol>
                    </IonRow>
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
