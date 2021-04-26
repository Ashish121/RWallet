import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
//import { eyeOffOutline } from 'ionicons/icons';
import { Translate } from '../../i18n/formatMessages';
// import LoaderComponent from '../../components/Spinner/Spinner';
import { ButtonConmponent, HeaderComponent } from '../../components';
import './AccountPage.scss';

const AccountPage: React.FC = () => {
  const history = useHistory();

  function handleSaving() {
    history.replace('/account/saving');
  }

  function handleFixed() {
    history.replace('/account/fixed');
  }

  function handleCurrent() {
    history.replace('/account/current');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" showBackButton={false} />
          <IonContent>
            <div className="account-type-page-container">
              <IonText className="header-text-area">
                <Translate message="account.lableTexttop" />
              </IonText>
              <div className="page-wrapper">
                <ButtonConmponent
                  //disabled={true}
                  buttonLabel="account.saving"
                  size="block"
                  clickHandler={handleSaving}
                />

                <div className="button-gap">
                  <ButtonConmponent
                    buttonLabel="account.fixed"
                    size="block"
                    clickHandler={handleFixed}
                  />
                </div>
                <div className="button-gap">
                  <ButtonConmponent
                    buttonLabel="account.current"
                    size="block"
                    clickHandler={handleCurrent}
                  />
                </div>
                <IonText className="header-text-bottom">
                  <Translate message="account.labelmore" />
                </IonText>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { AccountPage };
