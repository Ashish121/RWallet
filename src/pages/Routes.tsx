import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/react';
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
  Bank,
  Agent,
  BankS,
  AgentS,
  ConfirmPage,
  CoOperativeS,
  CoOperative,
  MenuBarPage,
  SavingAccountPage,
  CurrentAccountPage,
  AnimatedSplash,
  NotificationPage,
  TransactionHistory ,
} from './index';
import './Routes.scss';

const Routes: React.FC = () => {
  const isTabView = true;
  return (
    <IonReactRouter>
      <IonApp>
        <IonPage>
          <IonRouterOutlet>
            <Route path="/register" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/otp" exact component={OtpPage} />
            <Route path="/mpin" exact component={MpinPage} />
            <Route path="/accountuser" exact component={AccountUser} />
            <Route path="/accountpage" exact component={AccountPage} />
            <Route path="/account/fixed" exact component={FixedAccountPage} />
            <Route path="/account/saving" exact component={SavingAccountPage} />
            <Route path="/account/current" exact component={CurrentAccountPage} />
            <Route
              path="/tabs"
              component={isTabView ? TabViewPage : TabViewPage}
            />
            <Route path="/splash" exact component={AnimatedSplash} />
            <Route path="/reset" exact component={ResetPassword} />
            <Route path="/pass" exact component={Reset} />
            {/* <Route path="/fundTransfer" component={Fund} /> */}
            <Route path="/bank" exact component={Bank} />
            <Route path="/cop" exact component={CoOperative} />
            <Route path="/agent" exact component={Agent} />
            <Route path="/bankS" exact component={BankS} />
            <Route path="/copS" exact component={CoOperativeS} />
            <Route path="/agentS" exact component={AgentS} />
            <Route path="/confirm" exact component={ConfirmPage} />

            <Route path="/menu" exact component={MenuBarPage} />

            <Redirect exact from="/" to="/register" />
            <Route path="/notification" exact component={NotificationPage} />
            <Route path="/transactionHistory" exact component={TransactionHistory} />
            <Redirect exact from="/" to="/splash" />
          </IonRouterOutlet>
        </IonPage>
      </IonApp>
    </IonReactRouter>
  );
};

export default Routes;
