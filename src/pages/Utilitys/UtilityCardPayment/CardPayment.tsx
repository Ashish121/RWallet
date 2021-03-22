import React from "react";
import { useHistory } from "react-router-dom";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { Translate } from "../../../i18n/formatMessages";
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
} from "../../../components";
import "./CardPayment.scss";

const CardPayment: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log("Handling registration");
    history.replace("/");
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="credit-card-text-area">
                <Translate message="UtilityInternetPayment" />
              </IonText>
              <div className="credit-card-wrapper">
                <InputText
                  inputType="text"
                  labelText="UtilityBankName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCardNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilityAmountPayment"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />

                <div className="card-button-last">
                  <ButtonConmponent
                    buttonLabel="UtilityCardClear"
                    size="block"
                  />
                </div>
                <div className="card-submit">
                  <ButtonConmponent
                    buttonLabel="UtilityConfirm"
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

export { CardPayment };
