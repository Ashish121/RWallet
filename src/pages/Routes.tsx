import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
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
  MenuBarPage,
  SavingAccountPage,
  CurrentAccountPage,
  AnimatedSplash,
  TransactionHistory,
  ConfirmPage,
  ChangePassword,
  Policy,
} from './index';
import './Routes.scss';

const Routes: React.FC = () => {
  const isTabView = true;
  const loggedInUser: any = localStorage.getItem('loginDetails');

  const token = JSON.parse(loggedInUser)?.data?.token;

  const isUserFormCompleted = localStorage.getItem('userFilledAccountDetails')
    ? true
    : false;
  const userId = localStorage.getItem('userId');
  const userCreatedAccount = localStorage.getItem('userCreatedAccount');
  return (
    <IonApp>
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
            <Route path="/account/saving" exact component={SavingAccountPage} />
            <Route path="/confirm" exact component={ConfirmPage} />
            <Route path="/changePassword" exact component={ChangePassword} />
            <Route path="/policy" exact component={Policy} />

            <Route
              path="/account/current"
              exact
              component={CurrentAccountPage}
            />
            <Route
              path="/tabs"
              component={isTabView ? TabViewPage : TabViewPage}
            />
            <Route path="/splash" exact component={AnimatedSplash} />
            <Route path="/reset" exact component={ResetPassword} />
            <Route path="/passReset" exact component={Reset} />

            {/* Header Component  MenuBar Or Notification  */}
            <Route path="/menu" exact component={MenuBarPage} />
            <Route
              path="/transactionHistory"
              exact
              component={TransactionHistory}
            />

            <Redirect
              exact
              from="/"
              to={
                token
                  ? '/tabs'
                  : !userId
                    ? '/login'
                    : !isUserFormCompleted
                      ? '/accountuser'
                      : userCreatedAccount
                        ? '/login'
                        : 'accountpage'
              }
            />
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default Routes;
