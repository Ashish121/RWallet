import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';

import './Mpin.scss';

const MpinPage: React.FC = () => {
  const history = useHistory();

  function setMpin() {}
  function confirmMpin() {}
  function handleMpin() {
    history.push('/accountuser');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="mpin-container">
              <div className="page-header">
                <IonText>
                  <Translate message="mpin.pageHeader" />
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message="mpin.subHeader" />
                  </IonText>
                </div>
              </div>
              <div className="fields-container">
                <InputText
                  inputType="password"
                  labelText="mpin.mpinField"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={setMpin}
                />
                <InputText
                  inputType="password"
                  labelText="mpin.confirmMpin"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={confirmMpin}
                />
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="mpin.done"
                  size="block"
                  clickHandler={handleMpin}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { MpinPage };
