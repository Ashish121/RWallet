import React  from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText } from '../../components';
import './Reset.scss';

const Reset: React.FC = () => {
  const history = useHistory();
  
  function handleVerifyReset() {
    history.push('/otp');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="container">
              <div className="page-header">
                <IonText>
                  <Translate message='reset.pageHeader'/>
                </IonText>
              </div>
              <div className="page-sub-header">
                <div className="innercontainer">
                  <IonText>
                    <Translate message='rest.newpassword'/>
                  </IonText>
                </div>
              </div>
              <div className="input-container">
                <InputText inputType="text" labelText="rest.new" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="rest.newConfirm" labelType="floating" color="light" labelColor="light"/>
              </div>
              <div className="confirm-btn-wrapper">
                <ButtonConmponent buttonLabel="reset.continue" size="block"  clickHandler={handleVerifyReset}/>
              </div>
               
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};




export {Reset};
