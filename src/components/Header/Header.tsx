import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonText,
  IonMenuButton,
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Header.scss';
import { MenuComponent } from '../index';

interface headerProps {
  headerLable: any;
  menuHandler?: Function;
  notificationHandler?: any;
  showMenu?: boolean;
  showNotification?: boolean;
  enableBackNavigation?: boolean;
}

const HeaderComponent: React.FC<headerProps> = ({
  headerLable,
  showMenu,
  enableBackNavigation = false,
}) => {
  return (
    <>
      {showMenu && <MenuComponent />}

      <IonHeader className="header-wrapper">
        <IonToolbar className="header">
          {enableBackNavigation && (
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
          )}
          {showMenu && (
            <IonMenuButton
              autoHide={false}
              slot="start"
              color="light"
              type="button"
              menu="menu"
            />
          )}
          <IonTitle>
            <IonText>
              <Translate message={headerLable} />
            </IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default HeaderComponent;
