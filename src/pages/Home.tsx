import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { LoginPage, DashboardPage, SignUpPage, OtpPage, MpinPage, ResetPassword } from './index';
import './Home.css';

const Home: React.FC = () => {
  const isAuthed = false ;
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register" component={isAuthed ? DashboardPage : SignUpPage} />
        <Redirect exact from="/" to="/register"/>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/resetpassword" component={ResetPassword}/>
        <Route path="/otp" component={OtpPage} />
        <Route path="/mpin" component={MpinPage}/>
        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Home;
