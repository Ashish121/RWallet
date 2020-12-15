import React from 'react';
import { Redirect, Route } from 'react-router-dom';
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
  Bank,
  Agent,
  BankS,
  AgentS,
  CoOperativeS,
  ConfirmPage

} from './index';
import './Routes.scss';
import { CoOperative } from './CoOperative/CoOperative';



const Routes: React.FC = () => {
  const isTabView = true;
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/otp" component={OtpPage} />
        <Route path="/mpin" component={MpinPage} />
        <Route path="/accountuser" component={AccountUser}/>
        <Route path="/accountpage" component={AccountPage}/>
        <Route path="/account/fixed" component={FixedAccountPage} />
        <Route path="/tabs" component={isTabView ? TabViewPage : TabViewPage} />
        <Redirect exact from="/" to="/register" />
        <Route path="/reset" component={ResetPassword}/>
        <Route path="/pass" component={Reset}/>
        <Route path="/fund" component={Fund}/>
        <Route path="/bank" component={Bank}/>
        <Route path="/cop" component={CoOperative}/>
        <Route path="/agent" component={Agent}/>
        <Route path="/bankS" component={BankS}/>
        <Route path="/copS" component={CoOperativeS}/>
        <Route path="/agentS" component={AgentS}/>
        <Route path="/confirm" component={ConfirmPage}/>

        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
