import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import LoaderComponent from '../../components/Spinner/Spinner';
import { requestForLogin, loginSuccess } from '../../redux/actions';
import './Login.scss';
import { InputText, ButtonConmponent } from '../../components';

const LoginPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticating = useSelector(
    (state: any) => state.login.isAuthenticating
  );

  function loginHandler() {
    dispatch(requestForLogin());
    let timeout = setTimeout(() => {
      dispatch(loginSuccess());
      clearTimeout(timeout);
      history.push('/tabs');
    }, 4000);
  }
  const updateEmail = (emailText: any) => {
    console.log('updateEmail -> emailText', emailText);
    // setUserEmail(emailText);
  };

  function updatePassword(password: any) {
    console.log('updatePassword -> password', password);
    // setUserPassword(password);
  }

  function navigateToRegister() {
    console.log('Navigating to registration');
    history.push('/reset');
  }
  return (
    <>
      <LoaderComponent
        showLoading={isAuthenticating}
        loaderMessage={'Authenticating'}
      />
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="loginContainer">
              <div className="body-header-wrapper ion-margin-top">
                <IonText className="body-header-text-wrapper">
                  <span className="welcome_text">
                    <Translate message="login.welcomeText" />
                  </span>
                  <span
                    style={{ marginLeft: '5px' }}
                    className="header-bold ion-text-uppercase"
                  >
                    <Translate message="login.siginPageLabel" />
                  </span>
                </IonText>
              </div>
              <div className="loginPageWrapper">
                <InputText
                  inputType="email"
                  labelText="login.emailLabel"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateEmail}
                />
                <InputText
                  inputType="password"
                  labelText="MPIN/Password"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={updatePassword}
                />
                <div className="ion-padding-top" style={{ marginTop: '40px' }}>
                  <ButtonConmponent
                    buttonLabel="login.signInLabel"
                    size="block"
                    clickHandler={loginHandler}
                  />
                </div>
                <div className="link-text-wrapper">
                  <a
                    ion-text="true"
                    color="light"
                    onClick={navigateToRegister}
                    className="linkText"
                  >
                    <Translate message="login.linkText" />
                  </a>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { LoginPage };
