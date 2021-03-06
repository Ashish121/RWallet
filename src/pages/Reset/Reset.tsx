import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';
import { requestForResetPassword } from '../../redux/actions';
import './Reset.scss';

const Reset: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mobileNo = 7283036997;
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  function updateNewPass(newPass: any) {
    setNewPass(newPass);
  }

  function updateConfirmPassword(confirmPass: any) {
    setConfirmPass(confirmPass);
  }

  function nextRoute() {
    history.replace('/login');
  }

  function handleVerifyReset() {
    dispatch(requestForResetPassword({ mobileNo, newPass }, nextRoute));
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="password-reset-container">
              <div className="page-header">
                <IonText>
                  <Translate message="reset.pageHeader" />
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message="rest.newpassword" />
                  </IonText>
                </div>
              </div>{' '}
              <div className="input-container">
                <InputText
                  inputType="text"
                  labelText="rest.new"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateNewPass}
                />
                <InputText
                  inputType="text"
                  labelText="rest.newConfirm"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateConfirmPassword}
                />
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="reset.continue"
                  size="block"
                  disabled={
                    newPass.trim() === confirmPass.trim() ? false : true
                  }
                  clickHandler={handleVerifyReset}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Reset };
