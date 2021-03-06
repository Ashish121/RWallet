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
  Fund,
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
  TransactionHistory,
  ElectricityWater,
  NepalElectricity,
  Khanepani,
  CardPayment,
  InsuranceFinancePage,
  RoyalityFinancialServices,
  RoyalitySavingCredit,
  AntivirusPayment,
  ApplyPage,
  EmiCalculater,
  FlightOneWay,
  FlightTwoWay,
  BusOneWay,
  BusTwoWay,
  LoanType,
  TvPayment,
  TopUpRecharge,
  InternetPayment,
  Antivirus,
} from './index';
import './Routes.scss';

const Routes: React.FC = () => {
  const isTabView = true;
  const loggedInUser: any = localStorage.getItem('loginDetails');
  console.log('loggedInUser: ', JSON.parse(loggedInUser)?.type);

  const token = JSON.parse(loggedInUser)?.data?.token;
  console.log(token);
  const isUserFormCompleted = localStorage.getItem('userFilledAccountDetails')
    ? true
    : false;
  const userId = localStorage.getItem('registeredUserId');
  const userCreatedAccount = localStorage.getItem('userCreatedAccount');
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

            <Route path="/fund" component={Fund} />
            <Route path="/bank" exact component={Bank} />
            <Route path="/cop" exact component={CoOperative} />
            <Route path="/agent" exact component={Agent} />

            {/* Summary Details Page  */}
            <Route path="/bankS" exact component={BankS} />
            <Route path="/copS" exact component={CoOperativeS} />
            <Route path="/agentS" exact component={AgentS} />

            {/* Sucess Page */}
            <Route path="/confirm" exact component={ConfirmPage} />

            {/* Header Component  MenuBar Or Notification  */}
            <Route path="/menu" exact component={MenuBarPage} />
            <Route
              path="/transactionHistory"
              exact
              component={TransactionHistory}
            />

            {/* Loan Section */}

            <Route path="/applyPage" exact component={ApplyPage} />
            <Route path="/emiCalculater" exact component={EmiCalculater} />
            <Route path="/loanType" exact component={LoanType} />

            {/* Utility FlightBooking Section */}

            <Route path="/flightOneWay" exact component={FlightOneWay} />
            <Route path="/flightTwoWay" exact component={FlightTwoWay} />

            {/* Utility Bus Booking Section */}
            <Route path="/busOneWay" exact component={BusOneWay} />
            <Route path="/busTwoWay" exact component={BusTwoWay} />

            {/* Utility ToUpRecharge Section */}
            <Route path="/topUpRecharge" exact component={TopUpRecharge} />
            <Route path="/tvPayment" exact component={TvPayment} />

            {/* Utility Internet Payment Section */}

            <Route path="/internetPayment" exact component={InternetPayment} />

            {/* Utility Electricity Section */}
            <Route
              path="/electricityWater"
              exact
              component={ElectricityWater}
            />
            <Route
              path="/nepalElectricity"
              exact
              component={NepalElectricity}
            />
            <Route path="/khanepani" exact component={Khanepani} />

            <Route path="/CardPayment" exact component={CardPayment} />

            <Route
              path="/insuranceFinancePage"
              exact
              component={InsuranceFinancePage}
            />
            <Route
              path="/royalityFinancialServices"
              exact
              component={RoyalityFinancialServices}
            />
            <Route
              path="/royalitySavingCredit"
              exact
              component={RoyalitySavingCredit}
            />

            <Route
              path="/antivirusPayment"
              exact
              component={AntivirusPayment}
            />
            {/* Utility Antivirus Section */}
            <Route
              path="/antivirusPayment"
              exact
              component={AntivirusPayment}
            />
            <Route path="/antivirus" exact component={Antivirus} />
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
          </IonRouterOutlet>
        </IonPage>
      </IonApp>
    </IonReactRouter>
  );
};

export default Routes;
