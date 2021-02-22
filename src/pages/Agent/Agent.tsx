import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
 
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent } from '../../components';
import './Agent.scss';

const Agent: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/tabs/agentS');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="agent-text-area">
                <Translate message="agent.text" />
              </IonText>
              <div className="agent-page-wrapper">
                <InputText
                  inputType="text"
                  labelText="agent.country"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.code"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.holderName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.number"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.mobile"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.amount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="bank.remark"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="agent-clear-button">
                  <ButtonConmponent
                    buttonLabel="bank.clear"
                    size="block"
                  />
                </div>
                <div className="agent-proceed-button">
                  <ButtonConmponent
                    buttonLabel="bank.proceed"
                    size="block"
                    clickHandler={handleproceed}
                  />
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Agent };
