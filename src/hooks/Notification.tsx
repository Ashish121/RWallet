import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
} from "@capacitor/core";
import { updateToast } from "../redux/actions";

function useNotificationService() {
  const { PushNotifications } = Plugins;
  const dispatch = useDispatch();
  const askPushPermission = () => {
    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermission().then((result) => {
      if (result.granted) {
        // setInitializing(true);
        PushNotifications.register();
        registerListener();
      } else {
        const data = {
          showToast: true,
          toastMessage: "Access deneid",
          position: "top",
          duration: "10000",
        };
        dispatch(updateToast(data));
      }
    });
  };

  const registerListener = () => {
    // On success, we should be able to receive notifications
    PushNotifications.addListener(
      "registration",
      (token: PushNotificationToken) => {
        //pass token to notification token API

        // eslint-disable-next-line no-console
        console.log(
          "🚀 ~ file: Home.tsx ~ line 84 ~ registerListener ~ token",
          token
        );
      }
    );
    // Some issue with our setup and push will not work
    PushNotifications.addListener("registrationError", (error: any) => {
      // eslint-disable-next-line no-console
      console.log(
        "🚀 ~ file: Home.tsx ~ line 95 ~ PushNotifications.addListener ~ error",
        error
      );
    });
    PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotification) => {
        // eslint-disable-next-line no-console
        console.log(
          "🚀 ~ file: Home.tsx ~ line 101 ~ registerListener ~ notification",
          notification
        );
      }
    );
    PushNotifications.addListener(
      "pushNotificationActionPerformed",
      (notification: PushNotificationActionPerformed) => {
        // eslint-disable-next-line no-console
        console.log(
          "🚀 ~ file: Home.tsx ~ line 108 ~ registerListener ~ notification",
          notification
        );
      }
    );
    // setInitializing(false);
  };
  return {
    askPushPermission,
    registerListener,
  };
}

export { useNotificationService };
