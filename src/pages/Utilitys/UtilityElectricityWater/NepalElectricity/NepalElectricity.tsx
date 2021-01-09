import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,

} from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent } from '../../../../components';
import './NepalElectricity.scss';

const NepalElectricity: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="nepal-electricity-text-area">
                <Translate message="UtilityNepalElectricityAuthority" />
              </IonText>
              <div className="nepal-electricity-authority-wrapper">
                <InputText
                  inputType="text"
                  labelText="UtilityNepalNEACounter"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilitySCnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCustomerId"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
            
                <div className="nepal-button-last">
                  <ButtonConmponent
                    buttonLabel="UtilityDiscard"
                    size="block"

                  />
                </div>
                <div className="last-nepal-submit">
                  <ButtonConmponent
                    buttonLabel="UtilitySubmit"
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

export { NepalElectricity };
