import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonGrid,
  IonCol,
  IonRow,
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent } from '../../components';
import './CoOperative.scss';

const CoOperative: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/cops');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="header-text-area">
                <Translate message="coOperative.text" />
              </IonText>
              <div className="cop-wrapper">
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
                <div className="clear-button">
                  <IonGrid className="header-grid">
                    <IonRow>
                      <IonCol className="ion-button">
                        <div
                          className="button-line"
                          style={{ marginTop: '10px' }}
                        >
                          <ButtonConmponent
                            buttonLabel="bank.clear"
                            size="block"
                          />
                        </div>
                        <div
                          className="button-line"
                          style={{ marginTop: '10px' }}
                        >
                          <ButtonConmponent
                            buttonLabel="bank.proceed"
                            size="block"
                            clickHandler={handleproceed}
                          />
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
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
