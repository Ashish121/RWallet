import React, { useState } from 'react';
import './Login.css';
import { IonItem, IonInput, IonLabel, IonButton, IonList } from '@ionic/react';

interface LoginProps  {
    onSubmitForm: Function,
}

const LoginComponent: React.FC<LoginProps> = ({onSubmitForm})=> {
  const [userEmail, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');
  const handleLoginPress = () => {
    onSubmitForm(userEmail, password);
  };
  function updateEmail(email : any) {
    setUserEmail(email);
  }
  function updatePassword(password: any) {
    setUserPassword(password);
  }
  return (
    <div>
      <IonList>
        <IonItem class="ion-no-padding">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="text" onIonChange={(e) => updateEmail(e.detail.value)}/>
        </IonItem>
        <IonItem class="ion-no-padding">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" onIonChange={(e) => {updatePassword(e.detail.value);}}/>
        </IonItem>
      </IonList>
      <div className="btnWrapper">
        <IonButton onClick={handleLoginPress} expand="full" color="secondary">SIGN IN</IonButton>
      </div>
    </div>
  );
};

export default LoginComponent;
