import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useHistory, useLocation } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, LoaderComponent } from '../../components';
import { requestForResetPassword } from '../../redux/actions';

import './Reset.scss';

const Reset: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    const params: any = location.state;
    setContact(params.mobileNo);
  }, []);
  function updateNewPass(newPass: any) {
    setNewPass(newPass);
  }

  function updateConfirmPassword(confirmPass: any) {
    setConfirmPass(confirmPass);
  }

  function nextRoute(status: any) {
    setIsLoading(false);
    setLoaderMessage('');
    if (status) {
      console.log('status: ', status);
      console.log('History: ', history);
      history.replace('/login');
    }
  }

  function handleVerifyReset() {
    console.log('location', location);

    setIsLoading(true);
    setLoaderMessage('Updating...');
    dispatch(
      requestForResetPassword({ mobileNo: contact, newPass }, nextRoute)
    );
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="password-container">
              <div className="page-header">
                <IonText>
                  <Translate message="reset.pageHeader" />
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message="reset.newpassword" />
                  </IonText>
                </div>
              </div>

              <div className="input-container">
                <InputText
                  inputType="password"
                  labelText="rest.new"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateNewPass}
                  showPasswordMode={true}
                />
                <InputText
                  inputType="password"
                  labelText="rest.newConfirm"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateConfirmPassword}
                  showPasswordMode={true}
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
