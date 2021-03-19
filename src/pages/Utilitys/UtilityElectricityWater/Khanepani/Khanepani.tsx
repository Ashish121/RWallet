import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
} from '../../../../components';
import './Khanepani.scss';

const Khanepani: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.replace('/');
  }
  function goBack() {
    history.replace('/tabs/electricityWater');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="khanepani-text-area">
                <Translate message="UtilityKhanepani" />
              </IonText>
              <div className="khanepani-wrapper">
                <InputText
                  inputType="text"
                  labelText="UtilityKhanepaniName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCustomerIdKhanepani"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />

                <div className="buttonElementforKhanepani">
                  <div className="discardButton">
                    <ButtonConmponent
                      buttonLabel="UtilityDiscard"
                      size="block"
                    />
                  </div>
                  <div className="submitButton">
                    <ButtonConmponent
                      buttonLabel="UtilitySubmit"
                      size="block"
                      clickHandler={handleproceed}
                    />
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

export { Khanepani };
