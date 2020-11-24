import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { LoginPage } from './Login';
import { DashboardPage }  from './Dashboard';
import { SignUpPage } from './SignUp/SignUp';
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
        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Home;
