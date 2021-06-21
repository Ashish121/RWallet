import { useHistory } from 'react-router-dom';
import { Plugins, Capacitor } from '@capacitor/core';
const { App } = Plugins;

function useHardwareAction() {
  let currentRoute = '/login';
  const history = useHistory();
  function registerBackHandler() {
    if (Capacitor.getPlatform() === 'android') {
      document.addEventListener('ionBackButton', (ev: any) => {
        ev.detail.register(10, () => {
          currentRoute = localStorage.getItem('previousRoute') || '/login';
          handleRoute();
        });
      });
    }
  }
  function handleRoute() {
    if (currentRoute == '/' || currentRoute == '/tabs/home') {
      App.exitApp();
    } else {
      history.replace(currentRoute);
    }
  }

  return {
    registerBackHandler,
  };
}

export { useHardwareAction };
