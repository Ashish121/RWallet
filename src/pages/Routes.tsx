import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  LoginPage,
  SignUpPage,
  OtpPage,
  MpinPage,
  FixedAccountPage,
  TabViewPage,
  ResetPassword,
  AccountUser,
  AccountPage,
  Reset,
  Fund,
  BankTransferPage,
  BankDetails,
  AgentTransferPage,
  AgentDetailsPage,
  SucessPage,
  CoOperativeDetailsPage,
  CoOperativeTransferPage,
  NotificationPage,
  ProfilePage,

} from './index';
import './Routes.scss';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const Routes: React.FC = () => {
  const isTabView = true;
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route path="/register" exact component={SignUpPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/otp" exact component={OtpPage} />
          <Route path="/mpin" exact component={MpinPage} />
          <Route path="/accountuser" exact component={AccountUser} />
          <Route path="/accountpage" exact component={AccountPage} />
          <Route path="/account/fixed" exact component={FixedAccountPage} />
          <Route
            path="/tabs"
            component={isTabView ? TabViewPage : TabViewPage}
          />
          <Redirect exact from="/" to="/register" />
          <Route path="/reset" exact component={ResetPassword} />
          <Route path="/pass" exact component={Reset} />
          <Route path="/fund" component={Fund} />
          <Route path="/bankTransferPage" exact component={BankTransferPage} />
          <Route path="/bankDetails" exact component={BankDetails} />
          <Route path="/coOperativeTransferPage" exact component={CoOperativeTransferPage} />
          <Route path="/coOperativeDetails" exact component={CoOperativeDetailsPage} />
          <Route path="/agentTransferPage" exact component={AgentTransferPage} />
          <Route path="/agentDetails" exact component={AgentDetailsPage} />
          <Route path="/sucessPage" exact component={SucessPage} />
          <Route path="/notification" exact component={NotificationPage} />
          <Route path="/profilePage" exact component={ProfilePage} />
          <Route path="/transactionHistory" exact component={TransactionHistory} />
        </Switch>

        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
