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
  const [backNavigationPage, setBackNavigation] = useState(null);

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs');
  }, []);

  useEffect(() => {
    // const isMpinCreated: any = localStorage.getItem("isMpinCreated")
    //   ? localStorage.getItem("isMpinCreated")
    //   : false;
    // setIsMpinCreated(isMpinCreated);
    const updateMode: any = history.location?.state?.data.updateMode || false;
    const backNavigation: any =
      history.location?.state?.data.backNavigation || null;

    setBackNavigation(backNavigation);
    setUpdateMode(updateMode);
  }, []);

  function updateOldMpin(currentMpin: any) {
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
      if (updateMode || backNavigationPage) {
        history.replace('/tabs/home', { message: 'Mpin updated successfully' });
        return;
      }
      history.replace('/accountuser');
    }
  }
  function handleMpin() {
    // setIsLoading(true);
    // setLoaderMessage("Updating...");s
    let user_id = localStorage.getItem('userId');
    if (!updateMode) {
      dispatch(requestForMpin({ user_id, mpin }, nextRoute));
    } else {
      dispatch(
        requestForChangeMpin(
          { user_id, new_mpin: mpin, current_mpin: oldMpin },
          nextRoute
        )
      );
    }
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
          {backNavigationPage && <BackButton clickHandler={goBack} />}
          {!backNavigationPage && (
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
                {updateMode && (
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
