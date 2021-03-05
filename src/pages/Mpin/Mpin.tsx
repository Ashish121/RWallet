import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';
import { useDispatch } from 'react-redux';
import { requestForMpin } from '../../redux/actions';
import './Mpin.scss';
const MpinPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [mpin, setMpin] = useState('');
  const [confirmMpin, setConfirmMpin] = useState('');

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

  function nextRoute() {
    history.push('/accountuser');
  }
  function handleMpin() {
    dispatch(requestForMpin({ user_id, mpin }, nextRoute));
    console.log('Handling registration');
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
                  inputType="number"
                  labelText="mpin.mpinField"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={updateMpin}
                />
                <InputText
                  inputType="number"
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
