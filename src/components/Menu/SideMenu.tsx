import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  IonAlert,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { Plugins, CameraResultType } from '@capacitor/core';

import { ProfilePictureIcon, CloseIcon, MenuCamera } from '../../assets/Icons';
import './SideMenu.scss';
import { Translate } from '../../i18n/formatMessages';
import { requestForLogout } from '../../redux/actions';

const MenuComponent: React.FC<any> = () => {
  const [imagePicked, setImagePicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const { Camera } = Plugins;
  const history = useHistory();
  const dispatch = useDispatch();

  const profileFields = useSelector(
    (state: any) => state.profile.profileDetails
  );
  const closeMenu = () => {
    menuController.toggle();
  };

  function nextRoute() {
    history.replace('/login');
    localStorage.clear();
  }

  function logOut() {
    setShowAlert(true);
  }
  function confirmLogout() {
    dispatch(requestForLogout(nextRoute));
  }
  async function takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    const imageUrl: any = image.webPath;

    setSelectedImage(imageUrl);
    setImagePicked(true);
  }

  const requestForChangeMpin = () => {
    const userDetails: any = localStorage.getItem('loginDetails')
      ? localStorage.getItem('loginDetails')
      : '';
    closeMenu();

    const parsedRes = JSON.parse(userDetails);
    const isMpinCreated: any = localStorage.getItem('isMpinCreated')
      ? localStorage.getItem('isMpinCreated')
      : false;

    history.replace('/otp', {
      updateMode: isMpinCreated === 'false' ? false : true,
      nextroute: '/mpin',
      backNavigation: '/tabs',
      mobileNo: parsedRes.data.user.mobile_number,
    });
  };

  return (
    <>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        subHeader={'Are you sure ?'}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'light',
            handler: () => {},
          },
          {
            text: 'Ok',
            handler: () => {
              confirmLogout();
            },
          },
        ]}
      />
      <IonMenu side="start" menuId="menu" contentId="menu">
        <IonHeader>
          <IonToolbar className="side-menu-toobar">
            <IonButtons
              slot="end"
              style={{ right: '20px', position: 'absolute' }}
            >
              <IonButton
                onClick={closeMenu}
                style={{ position: 'absolute', width: '100%' }}
              />
              <CloseIcon />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-content-wrapper">
          <div
            className="pageheader"
            style={{ marginLeft: '7%', fontWeight: 600, fontSize: '20px' }}
          >
            <IonText>
              <Translate message="profile.text" />
            </IonText>
          </div>
          <div className="menu-content-wrapper">
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
                  <IonText className="label-value">
                    {profileFields.full_name}
                  </IonText>
                </div>
                <div className="fields-wrapper">
                  <IonText className="label-text">
                    <Translate message="profile.accountNumber" />
                  </IonText>
                  <IonText className="label-value">
                    {profileFields.account_number}
                  </IonText>
                </div>
                <div className="fields-wrapper">
                  <IonText className="label-text">
                    <Translate message="profile.accountType" />
                  </IonText>
                  <IonText className="label-value">
                    {profileFields.account_type}
                  </IonText>
                </div>
                <div className="fields-wrapper">
                  <IonText className="label-text">
                    <Translate message="profile.accountCurrency" />
                  </IonText>
                  <IonText className="label-value">
                    {profileFields.account_currency}
                  </IonText>
                </div>
                <div className="fields-wrapper">
                  <IonText className="label-text">
                    <Translate message="profile.accountInterest" />
                  </IonText>
                  <IonText className="label-value">
                    {profileFields.account_interest}
                  </IonText>
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
                <button
                  className="action-button"
                  onClick={requestForChangeMpin}
                >
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
