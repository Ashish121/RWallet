import React from 'react';
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonRouterOutlet,
  IonText,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { ProfilePictureIcon, CloseIcon, MenuCamera } from '../../assets/Icons';
import './SideMenu.scss';
import { Translate } from '../../i18n/formatMessages';

const MenuComponent: React.FC<any> = () => {
  const history = useHistory();
  const closeMenu = () => {
    menuController.toggle();
  };
  function logOut() {
    history.replace('/login');
    localStorage.clear();
  }
  return (
    <>
      <IonMenu side="start" menuId="menu" contentId="menu">
        <IonHeader>
          <button
            style={{
              backgroundColor: 'white',
              float: 'right',
              marginTop: '50px',
              marginRight: '20px;',
            }}
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </IonHeader>
        <IonContent className="ion-content-wrapper">
          <div className="menu-content-wrapper">
            <div className="profile-icon-wrapper">
              <div className="camera-icon-wrapper">
                <MenuCamera width="50px" height="50" className="camera-icon" />
              </div>

              <ProfilePictureIcon width="140" height="140" />
            </div>
            <div className="page-header-text">
              <IonText>
                <Translate message="profile.text" />
              </IonText>
            </div>
            <div className="fields-wrapper">
              <IonText className="label-text">
                <Translate message="profile.fullName" />
              </IonText>
              <IonText className="label-value">Ashish Kumar</IonText>
            </div>
            <div className="fields-wrapper">
              <IonText className="label-text">
                <Translate message="profile.accountNumber" />
              </IonText>
              <IonText className="label-value">12345678</IonText>
            </div>
            <div className="fields-wrapper">
              <IonText className="label-text">
                <Translate message="profile.accountType" />
              </IonText>
              <IonText className="label-value">Savings</IonText>
            </div>
            <div className="fields-wrapper">
              <IonText className="label-text">
                <Translate message="profile.accountCurrency" />
              </IonText>
              <IonText className="label-value">NRP</IonText>
            </div>
            <div className="fields-wrapper">
              <IonText className="label-text">
                <Translate message="profile.accountInterest" />
              </IonText>
              <IonText className="label-value">4.5%</IonText>
            </div>
            <hr />
            <div className="action-items-wrapper">
              <button className="action-button">
                <IonText>
                  <Translate message="profile.changeLanguage" />
                </IonText>
              </button>
              <button className="action-button">
                <IonText>
                  <Translate message="profile.changeMPIN" />
                </IonText>
              </button>
              <button className="action-button">
                <IonText>
                  <Translate message="profile.changePassword" />
                </IonText>
              </button>
              <button className="action-button" onClick={logOut}>
                <IonText>
                  <Translate message="profile.logout" />
                </IonText>
              </button>
            </div>
            <hr />
            <div className="footer-wrapper">
              <button className="action-button">
                <IonText>
                  <Translate message="profile.privacy" />
                </IonText>
              </button>
              <div className="version-wrapper" style={{ display: 'grid' }}>
                <IonText className="label-text">
                  <Translate message="profile.version" />
                </IonText>
                <IonText className="label-value">v1.01.02</IonText>
              </div>
            </div>
          </div>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="menu"></IonRouterOutlet>
    </>
  );
};
export default MenuComponent;
