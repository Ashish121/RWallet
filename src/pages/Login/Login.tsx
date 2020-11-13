import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import LoginComponent from '../../components/Login/Login';
import LoaderComponent from '../../components/Spinner/Spinner';
import { requestForLogin, loginSuccess } from '../../redux/actions';

const LoginPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticating = useSelector((state : any) => state.login.isAuthenticating);
  function handleLogin() {
    dispatch(requestForLogin());
    let timeout = setTimeout(() => {
      dispatch(loginSuccess());
      clearTimeout(timeout);
      history.push('/dashboard');
    }, 4000);
  }
  return (
    <>
      <LoaderComponent showLoading={isAuthenticating} loaderMessage={'Authenticating'} />
      <IonApp>
        <IonPage>
          <IonContent>

            <div className="loginContainer">
              <div className="logoContainer">
                <IonText className="logo">SIGN IN</IonText>
              </div>
              <div className='loginPageWrapper'>
                <LoginComponent
                  onSubmitForm={handleLogin} />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { LoginPage };
