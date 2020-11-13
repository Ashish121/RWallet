import React from 'react';
import './Dashboard.css';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';



const DashboardPage: React.FC = () => {
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <IonText>Dashboard</IonText>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { DashboardPage, };
