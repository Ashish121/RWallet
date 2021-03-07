import React from 'react';
import { IonButton, IonIcon, IonToolbar, IonHeader } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import './BackButton.scss';

interface buttonProps {
  clickHandler?: Function;
}

const BackButton: React.FC<buttonProps> = ({ clickHandler }) => {
  function backButtonHandler() {
    clickHandler?.();
  }
  return (
    <div className="back-btn-wrapper">
      <IonHeader className="header-wrapper" style={{ backgroundImage: 'none' }}>
        <IonToolbar>
          <IonButton onClick={backButtonHandler}>
            <IonIcon
              style={{ color: '#ffffff' }}
              slot="icon-only"
              ios={chevronBackOutline}
              md={chevronBackOutline}
            />
          </IonButton>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default BackButton;
