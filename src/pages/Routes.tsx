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
  Bank,
  Agent,
  BankS,
  AgentS,
  CoOperativeS,
  ConfirmPage,
} from './index';
import './Routes.scss';
import { CoOperative } from './CoOperative/CoOperative';

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
          {/* <Route path="/fundTransfer" component={Fund} /> */}
          <Route path="/bank" exact component={Bank} />
          <Route path="/cop" exact component={CoOperative} />
          <Route path="/agent" exact component={Agent} />
          <Route path="/bankS" exact component={BankS} />
          <Route path="/copS" exact component={CoOperativeS} />
          <Route path="/agentS" exact component={AgentS} />
          <Route path="/confirm" exact component={ConfirmPage} />
        </Switch>

        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;
