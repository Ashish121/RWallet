import React from 'react';
import { IonToast, IonContent } from '@ionic/react';
import './Toast.css';

interface ToastProps {
    OnDismissToast: Function,
    showToast: boolean,
    toastMessage: string
}

const ToastComponent: React.FC<ToastProps> = ({ OnDismissToast , showToast, toastMessage}) => {
  return (
    <IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => OnDismissToast}
        message={toastMessage}
        duration={500}
      />
    </IonContent>
  );
};

export default ToastComponent;
