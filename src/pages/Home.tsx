import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { LoginPage } from './Login';
import { DashboardPage }  from './Dashboard';
import './Home.css';

const Home: React.FC = () => {
  const isAuthed = false ;
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={isAuthed ? DashboardPage : LoginPage} />
        <Redirect exact from="/" to="/login" />
        <Route path="/dashboard" component={DashboardPage} />
        {/* <Redirect exact from="/login" to="/dashboard" /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Home;
