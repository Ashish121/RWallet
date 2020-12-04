import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp, IonIcon, IonGrid,IonRow,IonCol } from '@ionic/react';
import { eyeOffOutline } from 'ionicons/icons';
import   { Translate   } from '../../i18n/formatMessages';
// import LoaderComponent from '../../components/Spinner/Spinner';
import { InputText, ButtonConmponent, SelectMenu, CheckboxComponent } from '../../components';
import './SignUp.css';

const SignUpPage: React.FC = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [toggleEyeText, setToggleEyeText] = useState(false);
  // const [fullName, setFullName] = useState('');
  // const [gender, setGender] = useState('');
  // const [mobileNo, setMobileNo] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const inputIconRenderer = () => {
    return (<IonIcon icon={eyeOffOutline} color="light" style={{fontSize : '18px',marginTop:'35px'}} onClick={togglePassword} slot="end"/>);
  };
  // function setUserFullName(value: any) {
  //   setFullName(value);
  // }
  // function setUserGender(value: any) {
  //   setGender(value);
  // }
  // function setUserMobileNo(value: any) {
  //   setMobileNo(value);
  // }
  // function setUserPassword(value: any) {
  //   setPassword(value);
  // }
  // function setUserConfirmedPassword(value: any) {
  //   setConfirmPassword(value);
  // }
    
  function togglePassword(event: any) {
    event.preventDefault();
    const toggleStatus = !toggleEyeText ;
    setToggleEyeText(toggleStatus);
  }
  function handleRegistration() {
    console.log('Handling registration');
    history.push('/otp');
  }
  function onGenderSelect(gender:string) {
    console.log('Selected: ',gender);
  }
  function setToggleTerms(value: boolean) {
    console.log('value: ', value);
    
  }
  function navigateToLogin() {
    console.log('**');
    
    history.push('/login');
  }
  // setUserGender('male');

  return (
    <>
      {/* <LoaderComponent showLoading={isAuthenticating} loaderMessage={'Authenticating'} /> */}
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="container">
              <IonGrid className="header-grid">
                <IonRow>
                  <IonCol className="ion-text-center">
                    <div className="body-header-wrapper ion-margin-top">
                      <IonText className="body-header-text-wrapper"><span className="welcome_text"><Translate message='login.welcomeText'/></span><span className="header-bold ion-text-uppercase"><Translate message ='login.siginPageLabel'/></span></IonText>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <div className='page-wrapper'>
                <InputText inputType="text" labelText="signup.fullName" labelType="floating" color="light" labelColor="light"/>
                <div className="ion-margin-top">
                  <SelectMenu label='signup.gender' onSelect={onGenderSelect}/>
                </div>
                <InputText inputType="text" labelText="signup.mobileNo" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType={toggleEyeText ? 'text' : 'password'} labelText="signup.passwordLabel" labelType="floating" color="light" labelColor="light" ChildElem = {inputIconRenderer()}/>
                <InputText inputType={toggleEyeText ? 'text' : 'password'} labelText="signup.confirmPassword" labelType="floating" color="light" labelColor="light" ChildElem = {inputIconRenderer()}/>
                <div className="terms-select-wrapper">
                  <CheckboxComponent onCheckboxToggle={setToggleTerms} checkboxLabel='signup.checkboxTermsText'/>
                </div>
                <div style={{marginTop: '10px'}}>
                  <ButtonConmponent buttonLabel='signup.register' size='block' clickHandler={handleRegistration}/>
                </div>
                <div className="login-link-wrapper">
                  <span className="account-exists-text"><Translate message="signup.loginLinkText"/> <a ion-text="true" onClick={navigateToLogin} className="login-link-text"><Translate message="signup.loginTextLink"/></a> </span>
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
