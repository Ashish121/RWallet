import React, {useState} from 'react';

import { IonPage, IonContent, IonText, IonApp} from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { ProfilePictureIcon,CloseIcon} from '../../assets/Icons';
import './MenuBarPage.scss';

const MenuBarPage: React.FC = () => {

  const nameMessage = useState('Sumit');
  const accountNumber = useState('0761402991');
  const accountType = useState('Current');
  const accountCurency= useState('NRP');
  const accuredInterest = useState('4.5%');
  const phoneVersion = useState('v.1.2.3');
  
  return (
    <>
      <IonApp>
        <IonPage>
          <IonContent>
            <div className="profilePage-container">
              <IonText className="close-icon-wrapper">
                <CloseIcon width="30" height="30" />
              </IonText>
              <div className="profilePage-text-area">
                <IonText>
                  <Translate  message="profile.text"/>
                </IonText>
              </div>
              <div className="profile-icon-section">
                <IonText className="profile-icon-wrapper">
                  <ProfilePictureIcon width="160" height="160" />
                  {/* <MenuCamera  width="50px" height="50" style={"margin-top:10px;"}/>   */}
                </IonText>
              </div>
              <div className="profile-page-wrapper">
                <IonText className="profile-header-text"><span className="profileFullName_text"><Translate message='profile.fullName'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    {nameMessage}
                  </IonText>
                </div>
                <IonText className="profile-header-text"><span className="profileAccountNumber_text"><Translate message='profile.accountNumber'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    {accountNumber}
                  </IonText>
                </div>
                <IonText className="profile-header-text"><span className="ProfileAccountType_text"><Translate message='profile.accountType'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    { accountType}
                  </IonText>
                </div>
                <IonText className="profile-header-text"><span className="profileAccountCurrency_text"><Translate message='profile.accountCurrency'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    { accountCurency}
                  </IonText>
                </div>
                <IonText className="profile-header-text"><span className="profileAccountInterest_text"><Translate message='profile.accountInterest'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    { accuredInterest}
                  </IonText>
                </div>
                <hr className="Profile-Line"/>
                <IonText className="profile-header-text"><span className="profileChangeLanguage_text"><Translate message='profile.changeLanguage'/></span></IonText>
                <IonText className="profile-header-text"><span className="profileChangePassword_text"><Translate message='profile.changeMPIN'/></span></IonText>
                <IonText className="profile-header-text"><span className="profileChangePassword_text"><Translate message='profile.changePassword'/></span></IonText>
                <IonText className="profile-header-text"><span className="profileLogout_text"><Translate message='profile.logout'/></span></IonText>
                <hr className="Profile-Line"/>
                <IonText className="profile-header-text"><span className="ProfilePrivacy_text"><Translate message='profile.privacy'/></span></IonText>
                <IonText className="profile-header-text"><span className="ProfileVersion_text"><Translate message='profile.Version'/></span></IonText>
                <div className="name-message">
                  <IonText className="nameMessage">
                    { phoneVersion}
                  </IonText>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { MenuBarPage };
