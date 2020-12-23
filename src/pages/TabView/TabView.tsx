import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import {
  MapActive,
  MapInactive,
  TransferActive,
  TransferInactive,
  HomeActive,
  HomeInactive,
  HistoryActive,
  HistoryInactive,
} from '../../assets/Icons';
import { HomePage, Fund } from '../index';
import './TabView.scss';

const TabViewPage: React.FC = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [transferActive, setTransferActive] = useState(false);
  const [mapActive, setMapActive] = useState(false);
  const [hisotryActive, setHistoryActive] = useState(false);
  function handleTabClick(event: any) {
    console.log('Tab clocled', event);
    const tabName = event.detail.tab;
    switch (tabName) {
    case 'home':
      setHomeActive(true);
      setTransferActive(false);
      setMapActive(false);
      setHistoryActive(false);
      break;
    case 'transfer':
      setHomeActive(false);
      setTransferActive(true);
      setMapActive(false);
      setHistoryActive(false);

      break;
    case 'map':
      setHomeActive(false);
      setTransferActive(false);
      setMapActive(true);
      setHistoryActive(false);
      break;
    case 'history':
      setHomeActive(false);
      setTransferActive(false);
      setMapActive(false);
      setHistoryActive(true);
      break;

    default:
      break;
    }
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
          {homeActive && <HomeActive width="20" height="20" />}
          {!homeActive && <HomeInactive width="20" height="20" />}

          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="transfer" href="/tabs/transfer">
          {transferActive && <TransferActive width="20" height="20" />}
          {!transferActive && <TransferInactive width="20" height="20" />}

          <IonLabel>Transfer</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          {mapActive && <MapActive width="20" height="20" />}
          {!mapActive && <MapInactive width="20" height="20" />}

          <IonLabel>Map</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history">
          {!hisotryActive && <HistoryInactive width="20" height="20" />}
          {hisotryActive && <HistoryActive width="20" height="20" />}

          <IonLabel>History</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { TabViewPage };
