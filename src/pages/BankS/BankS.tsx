import React from "react";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { Translate } from "../../i18n/formatMessages";
import { useHistory } from "react-router-dom";
import { ButtonConmponent, HeaderComponent } from "../../components";
import "./BankS.scss";
import { useSelector } from "react-redux";
const BankS: React.FC = () => {
  const history = useHistory();
  const bankDetails = useSelector(
    (state: any) => state.bank.bankDetails.data.data
  );

  function handleSucess() {
    console.log("Handling registration");
    history.replace("/tabs/SuccessPage");
  }
  function goBack() {
    history.replace("/tabs/bank");
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
              <div className="bankDetails-container">
                <IonText className="bankDetails-text-area">
                  <Translate message="fund.bankTrasfer" />
                </IonText>
                <div className="bankDetails-wrapper">
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.destination" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.destination_bank}
                    </IonText>
                  </div>
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.holderName" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.account_holder_name}
                    </IonText>
                  </div>
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.number" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.account_number}
                    </IonText>
                  </div>
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.mobile" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.mobile_number}
                    </IonText>
                  </div>
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.amount" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.amount}
                    </IonText>
                  </div>
                  <IonText className="bankDetails-header-text">
                    <span className="bank_text">
                      <Translate message="bank.remark" />
                    </span>
                  </IonText>
                  <div className="bankDetails-message">
                    <IonText className="nameMessage">
                      {bankDetails.remarks}
                    </IonText>
                  </div>
                  <div className="bankDetails-button">
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

export { BankS };
