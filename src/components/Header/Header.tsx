import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonText,
} from '@ionic/react';
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
}

const HeaderComponent: React.FC<headerProps> = ({
  headerLable,
  showMenu,
  showNotification,
  notificationHandler,
  showCart,
  cartHandler,
}) => {
  const toggleSideMenu = () => {
    menuController.toggle();
  };
  return (
    <>
      {showMenu && <MenuComponent />}

      <IonHeader className="header-wrapper" style={{ backgroundImage: 'none' }}>
        <IonToolbar className="header">
          {!showMenu && (
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" text="" />
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
