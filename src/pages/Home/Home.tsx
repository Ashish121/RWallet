import React from 'react';
import { IonPage,IonContent,IonApp } from '@ionic/react';
import { HeaderComponent } from '../../components';

import './Home.scss';

const HomePage: React.FC = () => {
  return (
    <IonApp>
      <IonPage>
        <HeaderComponent headerLable={'common.header'} showMenu={true} showNotification={true}/>
        <IonContent>
          <h1>Home page</h1>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export { HomePage };
