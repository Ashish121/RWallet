import React, { useState } from 'react';
import {
  IonMenu,
  IonHeader,
  IonContent,
  IonRouterOutlet,
  IonText,
  IonToolbar,
  IonButtons,
  IonButton,
  IonAvatar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { Plugins, CameraResultType } from '@capacitor/core';

import { ProfilePictureIcon, CloseIcon, MenuCamera } from '../../assets/Icons';
import './SideMenu.scss';
import { Translate } from '../../i18n/formatMessages';

const MenuComponent: React.FC<any> = () => {
  const [imagePicked, setImagePicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const { Camera } = Plugins;
  const history = useHistory();
  const closeMenu = () => {
    menuController.toggle();
  };
  function logOut() {
    history.replace('/login');
    localStorage.clear();
  }
  async function takePicture() {
    console.log('Taking picture now');

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    const imageUrl: any = image.webPath;
    console.log('imageUrl: ', imageUrl);
    setSelectedImage(imageUrl);
    setImagePicked(true);
  }

  return (
    <>
      <IonMenu side="start" menuId="menu" contentId="menu">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton
                onClick={closeMenu}
                style={{ position: 'absolute', width: '100%' }}
              />
              <CloseIcon />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-content-wrapper">
          <div className="menu-content-wrapper">
            <div className="page-header-text">
              <IonText>
                <Translate message="profile.text" />
              </IonText>
            </div>
            <div className="page-wrapper">
              <div className="profile-icon-wrapper">
                {imagePicked && (
                  <IonAvatar>
                    <img src={selectedImage} />
                  </IonAvatar>
                )}
                <div className="camera-icon-wrapper">
                  <IonButton onClick={takePicture} className="camera-btn">
                    <MenuCamera
                      width="50px"
                      height="50"
                      className="camera-icon"
                    />
                  </IonButton>
                </div>

                {!imagePicked && (
                  <ProfilePictureIcon width="140" height="140" />
                )}
              </div>
              <div className="field-wrapper-outer">
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
              </div>
            </div>

            <div className="bottom-wrapper">
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
          </div>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="menu"></IonRouterOutlet>
    </>
  );
};
export default MenuComponent;
