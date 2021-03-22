import React from "react";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { Translate } from "../../i18n/formatMessages";
import { useHistory } from "react-router-dom";
import { ButtonConmponent, HeaderComponent } from "../../components";
import { useSelector } from "react-redux";
import "./AgentS.scss";
const AgentS: React.FC = () => {
  const history = useHistory();
  const agentsDetails = useSelector(
    (state: any) => state.agent.agentDetails.data.data
  );

  function handleSucess() {
    console.log("Handling registration");
    history.replace("/tabs/SuccessPage");
  }
  function goBack() {
    history.replace("/tabs/Agent");
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <>
            <HeaderComponent
              headerLable="common.header"
              showBackButton={true}
              handler={goBack}
            />
            <IonContent>
              <div className="agentDetails-container">
                <IonText className="agentDetails-text-area">
                  <Translate message="agent.text" />
                </IonText>
                <div className="agentDetails-wrapper">
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.country" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.country}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.code" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.agent_code}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.holder" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.account_holder_name}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.number" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.account_number}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.mob" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.mobile_number}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.amount" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.amount}
                    </IonText>
                  </div>
                  <IonText className="agentDetails-header-text">
                    <span className="agent_text">
                      <Translate message="agent.remark" />
                    </span>
                  </IonText>
                  <div className="agentDetails-message">
                    <IonText className="nameMessage">
                      {agentsDetails.remarks}
                    </IonText>
                  </div>
                  <div className="agentDetails-button">
                    <div style={{ marginTop: "13px" }}>
                      <ButtonConmponent
                        buttonLabel="agent.conform"
                        size="block"
                        clickHandler={handleSucess}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </IonContent>
          </>
        </IonPage>
      </IonApp>
    </>
  );
};

export { AgentS };
