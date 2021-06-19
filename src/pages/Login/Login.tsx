import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import LoaderComponent from '../../components/Spinner/Spinner';
import { requestForLogin } from '../../redux/actions';
import './Login.scss';
import { InputText, ButtonConmponent } from '../../components';
import { useHardwareAction } from '../../hooks/HardwareAction';

const LoginPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [contactNo, setContactNo] = useState('');
  const [password, setUserPassword] = useState('');
  const isAuthenticating = useSelector(
    (state: any) => state.login.isAuthenticating
  );
  useEffect(() => {
    localStorage.setItem('previousRoute', '/login');
  }, []);
  useEffect(() => {
    localStorage.clear();
  }, []);

  //checking flag condition............
  function nextRoute() {
    const getAccountType = localStorage.getItem('accountType');
    const getUser = localStorage.getItem('userDetail');

    if (getUser === 'false') {
      history.replace('/accountuser');
    } else if (getAccountType === 'false') {
      history.replace('/accountpage');
    } else {
      history.replace('/tabs/home');
    }
  }

  function loginHandler() {
    dispatch(requestForLogin({ contactNo, password }, nextRoute));
  }
  const updateContactNo = (contactNo: any) => {
    setContactNo(contactNo);
  };

  function updatePassword(password: any) {
    setUserPassword(password);
  }

  function navigateToResetPassword() {
    history.replace('/reset');
  }
  function navigateToRegister() {
    history.replace('/register');
  }
  let actionHook = useHardwareAction();
  actionHook.registerBackHandler();

  return (
    <>
      <LoaderComponent
        showLoading={isAuthenticating}
        loaderMessage={'Authenticating'}
      />

      <IonPage>
        <IonContent>
          <div className='loginContainer'>
            <div className='body-header-wrapper ion-margin-top'>
              <IonText className='body-header-text-wrapper'>
                <span className='welcome_text'>
                  <Translate message='login.welcomeText' />
                </span>
                <span
                  style={{ marginLeft: '5px' }}
                  className='header-bold ion-text-uppercase'
                >
                  <Translate message='login.siginPageLabel' />
                </span>
              </IonText>
            </div>
            <div className='loginPageWrapper'>
              <InputText
                inputType='number'
                labelText='login.mobileText'
                labelType='floating'
                color='light'
                labelColor='light'
                onChange={updateContactNo}
              />
              <InputText
                inputType='password'
                labelText='MPIN/Password'
                labelType='floating'
                color='light'
                labelColor='light'
                showPasswordMode={true}
                onChange={updatePassword}
              />
              <div className='ion-padding-top' style={{ marginTop: '40px' }}>
                <ButtonConmponent
                  buttonLabel='login.signInLabel'
                  size='block'
                  disabled={
                    contactNo?.trim() && password?.trim() ? false : true
                  }
                  clickHandler={loginHandler}
                />
              </div>
              <div className='link-text-wrapper'>
                <a
                  ion-text='true'
                  color='light'
                  onClick={navigateToRegister}
                  className='linkText'
                >
                  <Translate message='login.linkTextRegister' />
                </a>
                <a
                  ion-text='true'
                  color='light'
                  onClick={navigateToResetPassword}
                  className='linkText'
                >
                  <Translate message='login.linkText' />
                </a>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { LoginPage };
