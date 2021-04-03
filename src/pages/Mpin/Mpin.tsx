import React, { useState, useEffect } from 'react';
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
import { BackButton, ButtonConmponent, InputText } from '../../components';
import { useDispatch } from 'react-redux';
import { requestForMpin, requestForChangeMpin } from '../../redux/actions';

import './Mpin.scss';

const MpinPage: React.FC = () => {
  const history: any = useHistory();
  const dispatch = useDispatch();

  const [mpin, setMpin] = useState('');
  const [confirmMpin, setConfirmMpin] = useState('');
  const [updateMode, setUpdateMode] = useState(false);
  const [oldMpin, setOldMpin] = useState('');
  const [isMpinCreated, setIsMpinCreated] = useState(false);
  useEffect(() => {
    console.log('History: ', history);
    const isMpinCreated: any = localStorage.getItem('isMpinCreated')
      ? localStorage.getItem('isMpinCreated')
      : false;
    setIsMpinCreated(isMpinCreated);
    const updateMode: any = history.location?.state?.updateMode ? true : false;
    if (updateMode && !isMpinCreated) {
      console.log('Update mode');
      setUpdateMode(true);
    }
  }, []);

  function updateOldMpin(currentMpin: any) {
    console.log('currentMpin: ', currentMpin);
    setOldMpin(currentMpin);
  }
  function updateMpin(mpin: any) {
    let newMpin = mpin;
    setMpin(newMpin);
  }

  function updateConfirmMpin(confirmMpin: any) {
    setConfirmMpin(confirmMpin);
  }

  function nextRoute(status: any) {
    if (status) {
      console.log('status******', status, '****updateMode*****', updateMode);

      if (updateMode) {
        history.replace('/tabs/home', { message: 'Mpin updated successfully' });
        return;
      }
      history.replace('/accountuser');
    }
  }
  function handleMpin() {
    // setIsLoading(true);
    // setLoaderMessage("Updating...");
    let user_id = localStorage.getItem('userId');
    if (!updateMode && !isMpinCreated) {
      dispatch(requestForMpin({ user_id, mpin }, nextRoute));
    } else {
      console.log('oldMpin: ', oldMpin);

      dispatch(
        requestForChangeMpin(
          { user_id, new_mpin: mpin, current_mpin: oldMpin },
          nextRoute
        )
      );
    }

    console.log('Handling registration');
  }

  function skipStep() {
    nextRoute(true);
  }
  function goBack() {
    history.replace('/tabs');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          {updateMode && <BackButton clickHandler={goBack} />}
          {!updateMode && !isMpinCreated && (
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
          )}
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
                {updateMode && isMpinCreated && (
                  <InputText
                    inputType="password"
                    labelText="mpin.oldMpin"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    showPasswordMode={true}
                    onChange={updateOldMpin}
                  />
                )}
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
