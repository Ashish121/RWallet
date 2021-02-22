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
import './CoOperative.scss';

const CoOperative: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/tabs/cops');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="coperative-text-area">
                <Translate message="coOperative.text" />
              </IonText>
              <div className="coperative-wrapper">
                <InputText
                  inputType="text"
                  labelText="coOperative.province"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.district"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.province"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.name"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.holder"
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
                  labelText="coOperative.amount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.remark"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="coperative-clear-button">
                  <ButtonConmponent
                    buttonLabel="bank.clear"
                    size="block"
                  />
                </div>
                <div className="coperative-proceed-button">
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

export { CoOperative };
