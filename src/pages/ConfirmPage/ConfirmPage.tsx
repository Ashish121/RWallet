import React, { useState } from 'react';
import { ButtonConmponent, HeaderComponent } from '../../components';
import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,
  IonFooter,
  IonToolbar,
} from '@ionic/react';
import './ConfirmPage.scss';
import { OrderConfirmIcon } from '../../assets/Icons';
import { Translate } from '../../i18n/formatMessages';

const ConfirmPage: React.FC = () => {
  const generatedAccountNo = useState('07601202001');
  // const [generatedAccountNo, setGeneratedAccountNo] = useState("07601202001");
  function navigateToHome() {
    alert(
      'This feature is not available.You can expect this in future release'
    );
    // history.push("/tabs");
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div
              className="confirm-page-wrapper"
              style={{ backgroundColor: '#3182b9', height: '100%' }}
            >
              <div className="card-wrapper">
                <IonCard>
                  <IonCardContent>
                    <div className="icon-wrapper">
                      <OrderConfirmIcon width="200" height="200" />
                    </div>

                    <IonFooter className="ion-no-border">
                      <IonToolbar>
                        <div
                          className="successText"
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#ffffff',
                            fontSize: '18px',
                            marginTop: '10px',
                          }}
                        >
                          <IonText>
                            <Translate message="account.successText" />
                          </IonText>
                        </div>
                        <div
                          className="account-generated-text"
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#ffffff',
                            fontSize: '18px',
                            marginTop: '15px',
                          }}
                        >
                          <IonText>
                            <Translate message="account.accountNoText" />{' '}
                            {generatedAccountNo}
                          </IonText>
                        </div>
                      </IonToolbar>
                    </IonFooter>
                  </IonCardContent>
                </IonCard>
              </div>
              <div className="continue-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="account.continue"
                  clickHandler={navigateToHome}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { ConfirmPage };
