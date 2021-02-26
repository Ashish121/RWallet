import React from 'react';
import { IonToast, IonContent } from '@ionic/react';
import './Toast.css';

interface ToastProps {
  onDismissToast: Function;
  showToast: boolean;
  toastMessage: string;
  position?: any;
  duration?: any;
}

const ToastComponent: React.FC<ToastProps> = ({
  onDismissToast,
  showToast,
  toastMessage,
  position,
}) => {
  return (
    <IonContent>
      <IonToast
        isOpen={showToast}
        message={toastMessage}
        position={position}
        buttons={[
          {
            side: 'end',
            icon: 'close',
            handler: () => {
              onDismissToast();
            },
          },
        ]}
      />
    </IonContent>
  );
};

export default ToastComponent;
