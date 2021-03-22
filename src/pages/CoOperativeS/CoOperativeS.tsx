import React from "react";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { Translate } from "../../i18n/formatMessages";
import { useHistory } from "react-router-dom";
import { ButtonConmponent, HeaderComponent } from "../../components";
import "./CoOperativeS.scss";
import { useSelector } from "react-redux";
const CoOperativeS: React.FC = () => {
  const history = useHistory();
  const coOperativeDetails = useSelector(
    (state: any) => state.co_operative.coOperativeDetails.data.data
  );

  function handleSucess() {
    console.log("Handling registration");
    history.replace("/tabs/SuccessPage");
  }
  function goBack() {
    history.replace("/tabs/cop");
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
              <div className="coOperativeDetails-container">
                <IonText className="coOperativeDetails-text-area">
                  <Translate message="coOperative.text" />
                </IonText>
                <div className="coOperativeDetails-wrapper">
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.province" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.province}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.district" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.district}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.name" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.cooperative_name}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.holder" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.account_holder_name}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.number" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.account_number}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.mob" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.mobile_number}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.amount" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.amount}
                    </IonText>
                  </div>
                  <IonText className="coOperativeDetails-header-text">
                    <span className="coOperative_text">
                      <Translate message="coOperative.remark" />
                    </span>
                  </IonText>
                  <div className="coOperativeDetails-message">
                    <IonText className="nameMessage">
                      {coOperativeDetails.remarks}
                    </IonText>
                  </div>
                  <div className="coOperativeDetails-button">
                    <div>
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

export { CoOperativeS };
