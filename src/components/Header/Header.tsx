import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonText,
  IonIcon,
  IonButton,
  IonBadge,
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
  value?: any;
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
  value,
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
            <IonButtons slot="start" style={{ position: 'absolute' }}>
              <IonButton color="secondary" onClick={backButtonHandler}>
                <IonIcon
                  style={{ color: '#ffffff', fontSize: '24px' }}
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
              style={{ position: 'absolute', right: '20px' }}
              onClick={notificationHandler}
            >
              <NotificationBell width="20" height="20" />
              {value > 0 ? (
                <IonBadge color="primary" className="notification-count-badge">
                  {value}
                </IonBadge>
              ) : (
                ''
              )}
            </IonButtons>
          )}
          {showCart && (
            <div>
              <IonButtons
                slot="end"
                style={{
                  position: 'absolute',
                  right: '15px',
                  marginTop: '10px',
                }}
                onClick={cartHandler}
              >
                <CartIcon width="20" height="20" />
              </IonButtons>
              <IonBadge color="primary" className="cart-count-badge">
                {value}
              </IonBadge>
            </div>
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
          <IonTitle size="small" class="ion-text-center" style={{ top: '5px' }}>
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
