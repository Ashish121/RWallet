import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import { HomePage, Fund } from '../index';
import './TabView.scss';

const TabViewPage: React.FC = () => {
  function handleTabClick(event: any) {
    console.log('Tab clocled', event);
  }

  return (
    <IonTabs onIonTabsDidChange={handleTabClick}>
      <IonRouterOutlet>
        <Switch>
          <Route path="/tabs/home" component={HomePage} exact />
          <Route path="/tabs/transfer" component={Fund} exact />
          <Route
            path="/tabs"
            render={() => <Redirect to="/tabs/home" />}
            exact
          />
        </Switch>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="transfer" href="/tabs/transfer">
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
