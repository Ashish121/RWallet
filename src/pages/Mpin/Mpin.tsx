import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, LoaderComponent } from '../../components';
import { useDispatch } from 'react-redux';
import { requestForMpin } from '../../redux/actions';

import './Mpin.scss';

const MpinPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [mpin, setMpin] = useState('');
  const [confirmMpin, setConfirmMpin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');

  function updateMpin(mpin: any) {
    let newMpin = mpin;
    if (!Number(mpin)) {
      return;
    }
    setMpin(newMpin);
  }

  function updateConfirmMpin(confirmMpin: any) {
    setConfirmMpin(confirmMpin);
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/accountuser');
    } else {
      setIsLoading(false);
      setLoaderMessage('');
    }
  }
  function handleMpin() {
    setIsLoading(true);
    setLoaderMessage('Updating...');
    const user_id = localStorage.getItem('registeredUserId');
    dispatch(requestForMpin({ user_id, mpin }, nextRoute));
    console.log('Handling registration');
  }

  function skipStep() {
    nextRoute(true);
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <div className="skip-toolbar">
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="end">
                  <IonButton className="btn-skip" onClick={skipStep}>
                    <IonText style={{ color: '#ffffff' }}>
                      <Translate message="common.skip" />
                    </IonText>
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
          </div>
          <IonContent>
            <div className="skip_btn_container"></div>
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
                  onChange={updateMpin}
                />
                <InputText
                  inputType="password"
                  labelText="mpin.confirmMpin"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={updateConfirmMpin}
                />
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="mpin.done"
                  size="block"
                  disabled={mpin === confirmMpin ? false : true}
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
