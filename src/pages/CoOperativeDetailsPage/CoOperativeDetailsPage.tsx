import React, { useState } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
import { ButtonConmponent,  HeaderComponent} from '../../components';
import './CoOperativeDetailsPage.scss';
const CoOperativeDetailsPage: React.FC = () => {
  const history = useHistory();
  const province=useState('Province name');
  const district=useState('District name');
  const coOperativeName=useState('Name of the account');
  const accountHolderName=useState('XYZ');
  const accountNumber=useState('XYZ');
  const mobileNumber=useState('XYZ');
  const amount=useState('XYZ');
  const remarks=useState('XYZ');


  
  function handleSucess() {
    console.log('Handling registration');
    history.push('/sucessPage');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="coOperativeDetails-container">
              <IonText className="coOperativeDetails-text-area">
                <Translate  message="coOperative.text"/>
              </IonText>
              <div className='coOperativeDetails-wrapper'>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.province'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {province}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.district'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {district}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.name'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {coOperativeName}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.holder'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {accountHolderName}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.number'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {accountNumber}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.mob'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {mobileNumber}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.amount'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {amount}
                  </IonText>
                </div>
                <IonText className="coOperativeDetails-header-text"><span className="coOperative_text"><Translate message='coOperative.remark'/></span></IonText>
                <div className="coOperativeDetails-message">
                  <IonText className="nameMessage">
                    {remarks}
                  </IonText>
                </div>
                <div className="coOperativeDetails-button">
                  <div style={{marginTop: '13px'}}>
                    <ButtonConmponent buttonLabel='agent.conform' size='block' clickHandler={handleSucess} />
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CoOperativeDetailsPage };
