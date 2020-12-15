import React,{useState}  from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp,IonIcon } from '@ionic/react';
import { eyeOffOutline,eyeOutline, } from 'ionicons/icons';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';

import './Mpin.css';




const MpinPage: React.FC = () => {
  const history = useHistory();
  const [toggleEyeText, setToggleEyeText] = useState(false);
  
  function togglePassword(event: any) {
    event.preventDefault();
    const toggleStatus = !toggleEyeText ;
    setToggleEyeText(toggleStatus);
  }

  const inputIconRenderer = () => {
    return (<IonIcon icon={eyeOffOutline} color="light" style={{fontSize : '18px',marginTop:'35px'}} onClick={togglePassword} slot="end"/>);
  };
  
  const inputIconRenderers = () => {
    return (<IonIcon icon={eyeOutline} color="light" style={{fontSize : '18px',marginTop:'35px'}} onClick={togglePassword} slot="end"/>);
  };
  
  function setMpin() {}
  function confirmMpin(){}
  function handleMpin(){
    history.push('/accountuser');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="container">
              <div className="page-header">
                <IonText>
                  <Translate message='mpin.pageHeader'/>
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message='mpin.subHeader'/>
                  </IonText>
                </div>
                   
              </div>
              <div style={{padding:'25px'}}>
                <InputText inputType={toggleEyeText ? 'text' : 'password'} labelText="mpin.mpinField" labelType="floating" color="light" labelColor="light" ChildElem = {inputIconRenderers()} onChange={setMpin}/>
                <InputText inputType={toggleEyeText ? 'text' : 'password'} labelText="mpin.confirmMpin" labelType="floating" color="light" labelColor="light" ChildElem = {inputIconRenderer()} onChange={confirmMpin}/>
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent buttonLabel="mpin.done" size="block" clickHandler={handleMpin}/>
              </div>
               
            </div>
            
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { MpinPage };
