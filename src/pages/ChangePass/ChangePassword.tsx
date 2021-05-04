import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import {
  BackButton,
  ButtonConmponent,
  InputText,
  LoaderComponent,
} from '../../components';

import { requestFoChangePassword } from '../../redux/actions/';

import './ChangePassword.scss';

const ChangePassword: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');
  const user_id = localStorage.getItem('userId');

  function updateNewPass(currentPassword: any) {
    setCurrentPassword(currentPassword);
  }

  function updateConfirmPassword(newPass: any) {
    setNewPass(newPass);
  }

  function nextRoute(status: any) {
    setIsLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/login');
    }
  }

  function handleVerifyReset() {
    setIsLoading(true);
    setLoaderMessage('Updating...');
    dispatch(
      requestFoChangePassword({ user_id, currentPassword, newPass }, nextRoute)
    );
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />

      <IonPage>
        <BackButton clickHandler={() => history.replace('/tabs/home')} />
        <IonContent>
          <div className="ConfirmPassword-container">
            <div className="page-header">
              <IonText>
                <Translate message="changePassword.pageHeader" />
              </IonText>
            </div>
            <div className="page-sub-header">
              <div className="innercontainer">
                <IonText>
                  <Translate message="changePassword.newpassword" />
                </IonText>
              </div>
            </div>

            <div className="input-container">
              <InputText
                inputType="password"
                labelText="changePassword.current"
                labelType="floating"
                color="light"
                labelColor="light"
                onChange={updateNewPass}
                showPasswordMode={true}
              />
              <InputText
                inputType="password"
                labelText="changePassword.new"
                labelType="floating"
                color="light"
                labelColor="light"
                onChange={updateConfirmPassword}
                showPasswordMode={true}
              />
            </div>
            <div className="continue-btn-wrapper-for-changePassword">
              <ButtonConmponent
                buttonLabel="changePassword.proceed"
                size="block"
                disabled={
                  currentPassword.trim() && newPass.trim() ? false : true
                }
                clickHandler={handleVerifyReset}
              />
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { ChangePassword };
