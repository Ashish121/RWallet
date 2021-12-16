import React, { useState, useEffect } from 'react';
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
  IonProgressBar,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { menuController } from '@ionic/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { AppVersion } from '@ionic-native/app-version';

import { ProfilePictureIcon, CloseIcon, MenuCamera } from '../../assets/Icons';
import './SideMenu.scss';
import { Translate } from '../../i18n/formatMessages';
import { requestForLogout, reuestUpload } from '../../redux/actions';

const MenuComponent: React.FC<any> = () => {
  const [imagePicked, setImagePicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [currentUploadStatus, setCurrentUploadStatus] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [appVersion, setAppVersion] = useState('');
  const { Camera } = Plugins;
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');

  const profileFields = useSelector(
    (state: any) => state.profile.profileDetails
  );

  useEffect(() => {
    getCurrentAppVersion();
  }, []);

  useEffect(() => {
    setSelectedImage(profileFields.profile_image);
    if (selectedImage) setImagePicked(!imagePicked);
  }, [profileFields]);
  const closeMenu = () => {
    menuController.toggle();
  };

  async function getCurrentAppVersion() {
    const version = await AppVersion.getVersionNumber();
    setAppVersion(version);
  }

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

  function handleUploadProgress(event: any) {
    const { loaded, total } = event;
    let percent = Math.floor((loaded * 100) / total);
    setShowProgress(percent === 100 ? false : true);
    setCurrentUploadStatus(percent / 100);
  }
  async function takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });
    const imageUrl: any = image.webPath;
    setSelectedImage(imageUrl);
    setImagePicked(true);
    dispatch(reuestUpload(userId, imageUrl, handleUploadProgress));
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

  const requestForChangePassword = () => {
    history.replace('/changePassword', {
      nextroute: '/login',
      backNavigation: '/tabs',
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

      <IonMenu side='start' menuId='menu' contentId='menu'>
        <IonHeader>
          <IonToolbar className='side-menu-toobar'>
            <IonButtons
              slot='end'
              style={{ right: '20px', position: 'absolute' }}
            >
              <IonButton
                onClick={closeMenu}
                style={{ position: 'absolute', width: '100%' }}
              />
              <CloseIcon iconColor='black' />
            </IonButtons>
            {showProgress && (
              <IonProgressBar value={currentUploadStatus}></IonProgressBar>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-content-wrapper'>
          <div
            className='pageheader'
            style={{ marginLeft: '7%', fontWeight: 600, fontSize: '20px' }}
          >
            <IonText style={{ fontSize: '20px', fontWeight: 600 }}>
              <Translate message='profile.text' />
            </IonText>
          </div>
          <div className='menu-content-wrapper'>
            <div className='page-wrapper'>
              <div className='profile-icon-wrapper'>
                {selectedImage && (
                  <IonAvatar>
                    <img src={selectedImage} />
                  </IonAvatar>
                )}
                <div className='camera-icon-wrapper'>
                  <IonButton onClick={takePicture} className='camera-btn'>
                    <MenuCamera
                      width='50px'
                      height='50'
                      className='camera-icon'
                    />
                  </IonButton>
                </div>

                {!selectedImage && (
                  <ProfilePictureIcon width='140' height='140' />
                )}
              </div>
              <div className='field-wrapper-outer'>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.fullName' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.full_name}
                  </IonText>
                </div>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.gender' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.gender}
                  </IonText>
                </div>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.accountNumber' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.account_number}
                  </IonText>
                </div>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.accountType' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.account_type}
                  </IonText>
                </div>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.accountCurrency' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.account_currency}
                  </IonText>
                </div>
                <div className='fields-wrapper'>
                  <IonText className='label-text'>
                    <Translate message='profile.accountInterest' />
                  </IonText>
                  <IonText className='label-value'>
                    {profileFields.account_interest}
                  </IonText>
                </div>
              </div>
            </div>

            <div className='bottom-wrapper'>
              <hr />
              <div className='action-items-wrapper'>
                <button className='action-button'>
                  <IonText>
                    <Translate message='profile.changeLanguage' />
                  </IonText>
                </button>
                <button
                  className='action-button'
                  onClick={requestForChangeMpin}
                >
                  <IonText>
                    <Translate message='profile.changeMPIN' />
                  </IonText>
                </button>
                <button
                  className='action-button'
                  onClick={requestForChangePassword}
                >
                  <IonText>
                    <Translate message='profile.changePassword' />
                  </IonText>
                </button>
                <button className='action-button' onClick={logOut}>
                  <IonText>
                    <Translate message='profile.logout' />
                  </IonText>
                </button>
              </div>
              <hr />
              <div className='footer-wrapper'>
                <button className='action-button'>
                  <IonText>
                    <a
                      href='https://policy.royalitywallet.com/'
                      target='_blank'
                    >
                      <Translate message='profile.privacy' />
                    </a>
                  </IonText>
                </button>
                <div className='version-wrapper' style={{ display: 'grid' }}>
                  <IonText className='label-text'>
                    <Translate message='profile.version' />
                  </IonText>
                  <IonText className='label-value'>v{appVersion}</IonText>
                </div>
              </div>
            </div>
          </div>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id='menu'></IonRouterOutlet>
    </>
  );
};
export default MenuComponent;
