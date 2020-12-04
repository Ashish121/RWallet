import React  from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import {
  homeOutline,
  cashOutline,
  mapOutline,
  timerOutline,
} from 'ionicons/icons';
import { HomePage } from '../index';
import './TabView.scss';

const TabViewPage: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        <Route path="/tabs/home" render={() => <HomePage />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="transfer" disabled={true}>
          <IonIcon icon={cashOutline} />
          <IonLabel>Transfer</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map" disabled={true}>
          <IonIcon icon={mapOutline} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" disabled={true}>
          <IonIcon icon={timerOutline} />
          <IonLabel>History</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { TabViewPage };
