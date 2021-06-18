import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from '@capacitor/core';
import { useHistory } from 'react-router-dom';

function useNotificationService() {
  const { PushNotifications, LocalNotifications } = Plugins;
  const history = useHistory();
  const askPushPermission = (callback: Function) => {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // setInitializing(true);
        PushNotifications.register();
        registerListener(callback);
      }
    });
  };

  const registerListener = (callback: Function) => {
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        //pass token to notification token API
        callback?.(JSON.stringify(token));
      }
    );
    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      // eslint-disable-next-line no-console
      console.log(error);
      alert('Notification registration is failed');
    });
    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        scheduleLocalNotification(notification);
      }
    );
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        // eslint-disable-next-line no-console
        console.log(notification);
        history.replace('/tabs/notification');
      }
    );
  };

  async function scheduleLocalNotification(notification: any) {
    const data = notification.data?.aps.alert;
    await LocalNotifications.schedule({
      notifications: [
        {
          title: data.title,
          body: data.body,
          id: 1,
          extra: null,
        },
      ],
    });
  }
  return {
    askPushPermission,
    registerListener,
  };
}

export { useNotificationService };
