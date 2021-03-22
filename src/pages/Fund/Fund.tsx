import React from "react";
import { useHistory } from "react-router-dom";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { Translate } from "../../i18n/formatMessages";
import { ButtonConmponent, HeaderComponent } from "../../components";
import "./Fund.scss";

const Fund: React.FC = () => {
  const history = useHistory();

  function handleBank() {
    console.log("Handling registration");
    history.replace("/tabs/bank");
  }

  function handleCoperative() {
    console.log("Handling registration");
    history.replace("/tabs/cop");
  }

  function handleAgent() {
    console.log("Handling registration");
    history.replace("/tabs/agent");
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="fund-text-area">
                <Translate message="fund.fundpage" />
              </IonText>
              <div className="fund-wrapper">
                <div style={{ marginTop: "13px" }}>
                  <ButtonConmponent
                    buttonLabel="fund.bankTrasfer"
                    size="block"
                    clickHandler={handleBank}
                  />
                </div>
                <div style={{ marginTop: "13px" }}>
                  <ButtonConmponent
                    buttonLabel="fund.coTransfer"
                    size="block"
                    clickHandler={handleCoperative}
                  />
                </div>
                <div style={{ marginTop: "13px" }}>
                  <ButtonConmponent
                    buttonLabel="fund.agent"
                    size="block"
                    clickHandler={handleAgent}
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

export { Fund };
