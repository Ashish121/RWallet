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
import {
  HomePage,
  Fund,
  MapView,
  NotificationPage,
  ShoppingPage,
  ItemDetailsPage,
  Bank,
  BankS,
  CoOperative,
  CoOperativeS,
  Agent,
  AgentS,
  ApplyPage,
  EmiCalculater,
  FlightOneWay,
  BusOneWay,
  TopUpRecharge,
  TvPayment,
  InternetPayment,
  ElectricityWater,
  NepalElectricity,
  Khanepani,
  CardPayment,
  PosPaymentPage,
  InsuranceFinancePage,
  RoyalityFinancialServices,
  RoyalitySavingCredit,
  Antivirus,
  AntivirusPayment,
  SuccessPage,
  CartPage,
  TransactionHistory,
} from '../index';
import './TabView.scss';
import { LoanType } from '../LoanSection/LoanType/LoanType';

const TabViewPage: React.FC = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [transferActive, setTransferActive] = useState(false);
  const [mapActive, setMapActive] = useState(false);
  const [hisotryActive, setHistoryActive] = useState(false);
  function handleTabClick(event: any) {
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
          <Route path="/tabs/mapview" component={MapView} exact />
          <Route path="/tabs/notification" exact component={NotificationPage} />
          <Route path="/tabs/shopping" exact component={ShoppingPage} />
          <Route path="/tabs/bank" exact component={Bank} />
          <Route path="/tabs/banks" exact component={BankS} />
          <Route path="/tabs/agent" exact component={Agent} />
          <Route path="/tabs/agents" exact component={AgentS} />
          <Route path="/tabs/cop" exact component={CoOperative} />
          <Route path="/tabs/cops" exact component={CoOperativeS} />
          <Route path="/tabs/emiCalculater" exact component={EmiCalculater} />
          <Route path="/tabs/applyPage" exact component={ApplyPage} />
          <Route path="/tabs/loanType" exact component={LoanType} />
          <Route path="/tabs/flightOneWay" exact component={FlightOneWay} />
          <Route path="/tabs/busOneWay" exact component={BusOneWay} />
          <Route path="/tabs/topUpRecharge" exact component={TopUpRecharge} />
          <Route
            path="/tabs/electricityWater"
            exact
            component={ElectricityWater}
          />
          <Route
            path="/tabs/nepalElectricity"
            exact
            component={NepalElectricity}
          />
          <Route path="/tabs/khanepani" exact component={Khanepani} />
          <Route path="/tabs/tvPayment" exact component={TvPayment} />
          <Route
            path="/tabs/internetPayment"
            exact
            component={InternetPayment}
          />
          <Route path="/tabs/cardPayment" exact component={CardPayment} />
          <Route path="/tabs/posPayment" exact component={PosPaymentPage} />
          <Route
            path="/tabs/insuranceFinancePage"
            exact
            component={InsuranceFinancePage}
          />
          <Route
            path="/tabs/royalityFinancialServices"
            exact
            component={RoyalityFinancialServices}
          />
          <Route
            path="/tabs/royalitySavingCredit"
            exact
            component={RoyalitySavingCredit}
          />
          <Route path="/tabs/antivirus" exact component={Antivirus} />
          <Route
            path="/tabs/antivirusPayment"
            exact
            component={AntivirusPayment}
          />
          <Route path="/tabs/successPage" exact component={SuccessPage} />

          <Route
            path="/tabs/shopping/itemdetails"
            exact
            component={ItemDetailsPage}
          />
          <Route path="/tabs/history" exact component={TransactionHistory} />
          <Route path="/tabs/shopping/cart" exact component={CartPage} />

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

        <IonTabButton tab="map" href="/tabs/mapview">
          {mapActive && <MapActive width="20" height="20" />}
          {!mapActive && <MapInactive width="20" height="20" />}

          <IonLabel>POS</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" href="/tabs/history">
          {!hisotryActive && <HistoryInactive width="20" height="20" />}
          {hisotryActive && <HistoryActive width="20" height="20" />}

          <IonLabel>History</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export { TabViewPage };
