import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonText,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';

import { menuController } from '@ionic/core';
import { Translate } from '../../i18n/formatMessages';
import './Header.scss';
import { MenuComponent } from '../index';
import { SideMenuIcon, NotificationBell, CartIcon } from '../../assets/Icons';

interface headerProps {
  headerLable: any;
  menuHandler?: Function;
  notificationHandler?: any;
  showMenu?: boolean;
  showNotification?: boolean;
  showCart?: boolean;
  cartHandler?: any;
  handler?: Function;
  showBackButton?: boolean;
}

const HeaderComponent: React.FC<headerProps> = ({
  headerLable,
  showMenu,
  showNotification,
  notificationHandler,
  showCart,
  cartHandler,
  handler,
  showBackButton = false,
}) => {
  const toggleSideMenu = () => {
    menuController.toggle();
  };
  function backButtonHandler() {
    handler?.();
  }
  return (
    <>
      {showMenu && <MenuComponent />}

      <IonHeader className="header-wrapper" style={{ backgroundImage: 'none' }}>
        <IonToolbar className="header">
          {!showMenu && showBackButton && (
            <IonButtons slot="start">
              <IonButton color="secondary" onClick={backButtonHandler}>
                <IonIcon
                  style={{ color: '#ffffff' }}
                  slot="icon-only"
                  ios={chevronBackOutline}
                  md={chevronBackOutline}
                />
              </IonButton>
            </IonButtons>
          )}
          {showNotification && (
            <IonButtons
              slot="end"
              style={{ position: 'absolute', right: '15px' }}
              onClick={notificationHandler}
            >
              <NotificationBell width="20" height="20" />
            </IonButtons>
          )}
          {showCart && (
            <IonButtons
              slot="end"
              style={{ position: 'absolute', right: '15px' }}
              onClick={cartHandler}
            >
              <CartIcon width="20" height="20" />
            </IonButtons>
          )}
          {showMenu && (
            <IonButtons
              slot="start"
              onClick={toggleSideMenu}
              style={{ position: 'absolute', left: '15px' }}
            >
              <SideMenuIcon width="20" height="20" />
            </IonButtons>
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
