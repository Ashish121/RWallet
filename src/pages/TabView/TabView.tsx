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
import { HomePage, Fund, MapView,LoanType } from '../index';
import './TabView.scss';
import { ApplyPage } from '../LoanSection/ApplyPage/ApplyPage';
import { EmiCalculater } from '../LoanSection/EmiCalculater/EmiCalculater';
import { FlightOneWay } from '../Utilitys/UtilityFlightBooking/FlightOneWay/FlightOneWay';
import { FlightTwoWay } from '../Utilitys/UtilityFlightBooking/FlightTwoWay/FlightTwoWay';
import { BusOneWay } from '../Utilitys/UtilityBusBooking/BusOneWay/BusOneWay';
import { BusTwoWay } from '../Utilitys/UtilityBusBooking/BusTwoWay/BusTwoWay';
import { TopUpRecharge } from '../Utilitys/UtilityTopUpRecharge/TopUpRecharge';
import { TvPayment } from '../Utilitys/UtilityTvPayment/TvPayment';
import { InternetPayment } from '../Utilitys/InternetPayment/InternetPayment';
import { ElectricityWater } from '../Utilitys/UtilityElectricityWater/ElectricityWater/ElectricityWater';
import { NepalElectricity } from '../Utilitys/UtilityElectricityWater/NepalElectricity/NepalElectricity';
import { Khanepani } from '../Utilitys/UtilityElectricityWater/Khanepani/Khanepani';
import { CardPayment } from '../Utilitys/UtilityCardPayment/CardPayment';
import { InsuranceFinancePage } from '../Utilitys/UtilityInsuranceFinanceEmi/InsuranceFinancePage/InsuranceFinancePage';
import { RoyalityFinancialServices } from '../Utilitys/UtilityInsuranceFinanceEmi/RoyalityFinancialService/RoyalityFinancialServices';
import { RoyalitySavingCredit } from '../Utilitys/UtilityInsuranceFinanceEmi/RoyalitySavingCredit/RoyalitySavingCredit';
import { Antivirus } from '../Utilitys/UtilityAntivirus/Antivirus/Antivirus';
import { AntivirusPayment } from '../Utilitys/UtilityAntivirus/AntivirusPayment/AntivirusPayment';


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
          <Route path="/tabs/mapview" component={MapView} exact />
          <Route path="/tabs/loanType" component={LoanType} exact />
          <Route path="/tabs/applyPage" component={ApplyPage} exact />
          <Route path="/tabs/emiCalculater" component={EmiCalculater} exact />
          <Route path="/tabs/flightOneWay" component={FlightOneWay} exact />
          <Route path="/tabs/flightTwoWay" component={FlightTwoWay} exact />
          <Route path="/tabs/busOneWay" component={BusOneWay} exact />
          <Route path="/tabs/busTwoWay" component={BusTwoWay} exact />
          <Route path="/tabs/topUpRecharge" component={TopUpRecharge} exact />
          <Route path="/tabs/tvPayment" component={TvPayment} exact />
          <Route path="/tabs/internetPayment" component={InternetPayment} exact />
          <Route path="/tabs/electricityWater" component={ElectricityWater} exact />
          <Route path="/tabs/nepalElectricity" component={NepalElectricity} exact />
          <Route path="/tabs/khanepani" component={Khanepani} exact />
          <Route path="/tabs/CardPayment" component={CardPayment} exact />
          <Route path="/tabs/khanepani" component={Khanepani} exact />
          <Route path="/tabs/insuranceFinancePage" component={InsuranceFinancePage} exact />
          <Route path="/tabs/royalityFinancialServices" component={RoyalityFinancialServices} exact />
          <Route path="/tabs/royalitySavingCredit" component={RoyalitySavingCredit} exact />
          <Route path="/tabs/antivirus" component={Antivirus} exact />
          <Route path="/tabs/antivirusPayment" component={AntivirusPayment} exact />
            

            
       
        
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
