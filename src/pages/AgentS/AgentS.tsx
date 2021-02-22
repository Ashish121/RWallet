import React, { useState } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
import { ButtonConmponent, HeaderComponent} from '../../components';
import './AgentS.scss';
const AgentS: React.FC = () => {
  const history = useHistory();
  const countrySelected=useState('XYZ');
  const agentCode=useState('XYZ');
  const accountHolderName=useState('Name of the account');
  const accountNumber=useState('XYZ');
  const mobileNumber=useState('XYZ');
  const amount=useState('XYZ');
  const remarks=useState('XYZ');

   
  function handleSucess() {
    console.log('Handling registration');
    history.push('/tabs/confirm');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="agentDetails-container">
              <IonText className="agentDetails-text-area">
                <Translate  message="agent.text"/>
              </IonText>
              <div className='agentDetails-wrapper'>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.country'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {countrySelected}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.code'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {agentCode}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.holder'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {accountHolderName}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.number'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {accountNumber}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.mob'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {mobileNumber}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.amount'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {amount}
                  </IonText>
                </div>
                <IonText className="agentDetails-header-text"><span className="agent_text"><Translate message='agent.remark'/></span></IonText>
                <div className="agentDetails-message">
                  <IonText className="nameMessage">
                    {remarks}
                  </IonText>
                </div>
                <div className="agentDetails-button">
                  <div style={{marginTop: '13px'}}>
                    <ButtonConmponent buttonLabel='agent.conform' size='block'  clickHandler={handleSucess}/>
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

export { AgentS };
