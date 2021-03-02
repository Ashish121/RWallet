import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
// import LoaderComponent from '../../components/Spinner/Spinner';
import { requestForRegistration } from '../../redux/actions/Registration';
import {
  InputText,
  ButtonConmponent,
  SelectMenu,
  CheckboxComponent,
} from '../../components';
import './SignUp.scss';

const SignUpPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [genderDetails, setGenderDetails] = useState([{}]);
  const [confirmPassword, setConfirmPassword] = useState('');
  // const isAuthenticating = useSelector(
  //   (state: any) => state.login.isAuthenticating
  // );

  useEffect(() => {
    const array = [
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
    ];
    setGenderDetails(array);
  }, []);
  function nextRoute() {
    history.push('/otp');
  }

  function handleRegistration() {
    dispatch(
      requestForRegistration(
        { fullName, gender, mobileNo, password },
        nextRoute
      )
    );
    console.log('Handling registration');
    // history.push('/otp');
  }

  function updateFullName(fullName: any) {
    console.log('fullName: ', fullName);
    setFullName(fullName);
  }

  function onGenderSelect(gender: any) {
    console.log('Selected value: ', gender);
    setGender(gender);
  }

  function updateMobileNo(mobileNo: any) {
    console.log('MobileNumber: ', mobileNo);
    setMobileNo(mobileNo);
  }

  function updatePassword(password: any) {
    console.log('updatePassword -> password', password);
    setPassword(password);
  }

  function updateConfirmPassword(confirmPassword: any) {
    console.log('confirmPassword', confirmPassword);
    setConfirmPassword(confirmPassword);
  }

  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
  }

  function navigateToLogin() {
    history.push('/login');
  }

  return (
    <>
      {/* <LoaderComponent
        showLoading={isAuthenticating}
        loaderMessage={'Authenticating'}
      /> */}
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
                  onChange={updateFullName}
                />
                <div>
                  <SelectMenu
                    label="signup.gender"
                    onSelect={onGenderSelect}
                    array={genderDetails}
                  />
                </div>
                <InputText
                  inputType="text"
                  labelText="signup.mobileNo"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMobileNo}
                />
                <InputText
                  inputType="password"
                  labelText="signup.passwordLabel"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={updatePassword}
                />
                <InputText
                  inputType="password"
                  labelText="signup.confirmPassword"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  showPasswordMode={true}
                  onChange={updateConfirmPassword}
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
                    disabled={
                      fullName.trim() &&
                      mobileNo.trim() &&
                      password.trim() &&
                      gender.length > 0 &&
                      confirmPassword.trim() &&
                      password.trim() === confirmPassword.trim()
                        ? false
                        : true
                    }
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
