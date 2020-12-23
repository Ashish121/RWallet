import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
// import LoaderComponent from '../../components/Spinner/Spinner';
import {
  InputText,
  ButtonConmponent,
  SelectMenu,
  CheckboxComponent,
} from '../../components';
import './SignUp.scss';

const SignUpPage: React.FC = () => {
  const history = useHistory();

  function handleRegistration() {
    console.log('Handling registration');
    history.push('/otp');
  }
  function onGenderSelect(gender: string) {
    console.log('Selected: ', gender);
  }
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }
  function navigateToLogin() {
    console.log('**');

    history.push('/login');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="signup-container">
              <div className="royality-text-header">
                <IonText className="body-header-text-wrapper">
                  <Translate message="login.welcomeText" />
                </IonText>
                <IonText className="body-header-text-wrapper header-bold">
                  <Translate message="login.siginPageLabel" />
                </IonText>
              </div>
              <div className="page-wrapper">
                <InputText
                  inputType="text"
                  labelText="signup.fullName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div>
                  <SelectMenu label="signup.gender" onSelect={onGenderSelect} />
                </div>
                <InputText
                  inputType="text"
                  labelText="signup.mobileNo"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="password"
                  labelText="signup.passwordLabel"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                />
                <InputText
                  inputType="password"
                  labelText="signup.confirmPassword"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                />
                <div className="terms-select-wrapper">
                  <CheckboxComponent
                    onCheckboxToggle={setToggleTerms}
                    checkboxLabel="signup.checkboxTermsText"
                  />
                </div>
                <div style={{ marginTop: '10px' }}>
                  <ButtonConmponent
                    buttonLabel="signup.register"
                    size="block"
                    clickHandler={handleRegistration}
                  />
                </div>
                <div className="login-link-wrapper">
                  <span className="account-exists-text">
                    <Translate message="signup.loginLinkText" />{' '}
                    <a
                      ion-text="true"
                      onClick={navigateToLogin}
                      className="login-link-text"
                    >
                      <Translate message="signup.loginTextLink" />
                    </a>{' '}
                  </span>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { SignUpPage };
