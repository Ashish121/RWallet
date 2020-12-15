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
import { SideMenuIcon } from '../../assets/Icons';

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
  const toggleSideMenu = () => {
    menuController.toggle();
  };
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
            <button
              className="iconButtons"
              style={{ backgroundColor: 'transparent' }}
              onClick={toggleSideMenu}
            >
              <SideMenuIcon width="20" height="20" />
            </button>
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
