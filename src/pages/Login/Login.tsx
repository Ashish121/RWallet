import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp, IonIcon, IonGrid,IonRow,IonCol } from '@ionic/react';
import { eyeOffOutline } from 'ionicons/icons';
import   { Translate   } from '../../i18n/formatMessages';
import LoaderComponent from '../../components/Spinner/Spinner';
import { requestForLogin, loginSuccess } from '../../redux/actions';
import './Login.css';
import { InputText, ButtonConmponent } from '../../components';


const LoginPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticating = useSelector((state : any) => state.login.isAuthenticating);
  // const [userEmail, setUserEmail] = useState('');
  // const [password, setUserPassword] = useState('');
  const [toggleEyeText, setToggleEyeText] = useState(false);
  
  function loginHandler() {
    dispatch(requestForLogin());
    let timeout = setTimeout(() => {
      dispatch(loginSuccess());
      clearTimeout(timeout);
      history.push('/dashboard');
    }, 4000);
  }
  const updateEmail = (emailText :any) => {
    console.log('updateEmail -> emailText', emailText);
    // setUserEmail(emailText);
  };
  
  function updatePassword(password: any) {
    console.log('updatePassword -> password', password);
    // setUserPassword(password);
  }
  function togglePassword(event: any) {
    event.preventDefault();
    const toggleStatus = !toggleEyeText ;
    setToggleEyeText(toggleStatus);
  }
  function navigateToRegister() {
    console.log('Navigating to registration');
    history.push('/register');
  }
  const inputIconRenderer = () => {
    return (<IonIcon icon={eyeOffOutline} color="light" style={{fontSize : '18px',marginTop:'35px'}} onClick={togglePassword} slot="end"/>);
  };
  return (
    
    <>
      <LoaderComponent showLoading={isAuthenticating} loaderMessage={'Authenticating'} />
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="loginContainer">
              <IonGrid className="header-grid">
                <IonRow>
                  <IonCol className="ion-text-center">
                    <div className="body-header-wrapper ion-margin-top">
                      <IonText className="body-header-text-wrapper"><span className="welcome_text"><Translate message='login.welcomeText'/></span><span className="header-bold ion-text-uppercase"><Translate message ='login.siginPageLabel'/></span></IonText>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <div className='loginPageWrapper'>
                <InputText inputType="email" labelText="login.emailLabel" labelType="floating" color="light" labelColor="light" onChange={updateEmail}/>
                <InputText inputType={toggleEyeText ? 'text' : 'password'} labelText="MPIN/Password" labelType="floating" color="light" labelColor="light" ChildElem = {inputIconRenderer()} onChange={updatePassword}/>
                <div  className='ion-padding-top' style={{marginTop: '40px'}}>
                  <ButtonConmponent buttonLabel='login.signInLabel' size='block' clickHandler={loginHandler}/>
                </div>
                <a ion-text="true" color="light" onClick={navigateToRegister} className='linkText'><Translate message='login.linkText'/></a>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { LoginPage };
