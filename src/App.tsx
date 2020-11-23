import React from 'react';
import { IonApp } from '@ionic/react';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/variables.css';

import { IntlProvider } from 'react-intl';
import { English } from './i18n/languages';

let lang: any = English;
const App: React.FC = () => {
  const { StatusBar, SplashScreen } = Plugins;
  StatusBar.setStyle({ style: StatusBarStyle.Dark });
  // Show the splash for two seconds and then auto hide:
  SplashScreen.show({
    showDuration: 5000,
    autoHide: true
  });
  return  <IntlProvider locale="en" messages={lang}>
    <IonApp>
      <Home/>
    </IonApp>
  </IntlProvider>;
};
 


export default App;
