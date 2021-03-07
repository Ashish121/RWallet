import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import firebase from 'firebase/app';
import Routes from './pages/Routes';

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
import 'leaflet/dist/leaflet.css';

/* Theme variables */
// import './theme/variables.css';

import { IntlProvider } from 'react-intl';
import { English } from './i18n/languages';
import { ToastComponent } from './components';

let lang: any = English;
const App: React.FC = () => {
  const { StatusBar, SplashScreen } = Plugins;
  const dispatch = useDispatch();
  const showToast = useSelector((state: any) => state.toast.showToast);
  const message = useSelector((state: any) => state.toast.toastMessage);
  StatusBar.setStyle({ style: StatusBarStyle.Dark });
  // Show the splash for two seconds and then auto hide:
  SplashScreen.hide();
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDJ7MJd0QIHefCPHw5TWGYp_q38lfT8xqw',
      authDomain: 'royality-wallet-ac0bc.firebaseapp.com',
      projectId: 'royality-wallet-ac0bc',
      storageBucket: 'royality-wallet-ac0bc.appspot.com',
      messagingSenderId: '361032041804',
      appId: '1:361032041804:web:9768c4b02697f18eb1bbe9',
      measurementId: 'G-KYXG3H44DT',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);
  function closeToast() {
    dispatch({ type: 'RESET_TOAST' });
  }
  return (
    <IntlProvider locale="en" messages={lang}>
      <ToastComponent
        showToast={showToast}
        toastMessage={message}
        onDismissToast={closeToast}
        position="top"
        duration="10000"
      />
      <Routes />
    </IntlProvider>
  );
};

export default App;
