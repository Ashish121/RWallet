import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonButtons,
  IonButton,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { CloseIcon } from "../../assets/Icons";
import { ButtonConmponent } from "../../components";
import { requestForPrivacyAndPolicy } from "../../redux/actions/";
import "./Policy.scss";

const Policy: React.FC<{ closeHandler: Function }> = ({ closeHandler }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPrivacy, setShowPrivacy] = useState(true);
  const [policyData, setPolicyData] = useState([]);
  const [refundPolicy, setRefundPolicy] = useState(true);
  const [subType, setSubType] = useState(false);

  useEffect(() => {
    dispatch(requestForPrivacyAndPolicy(showImageSliderList));
  }, []);

  function showImageSliderList(res: any) {
    const policy = res.data.data;
    setPolicyData(policy);
  }

  function closeMenu(status: any) {
    if (status) {
      history.replace("/tabs/home");
    }
  }

  const termAndCondition = () => {
    setShowPrivacy(false);
    setSubType(false);
  };

  const privacyAndPolicy = () => {
    setShowPrivacy(true);
  };

  const refundPolicyButton = () => {
    setRefundPolicy(true);
    setSubType(false);
  };

  const returnPolicyButton = () => {
    setRefundPolicy(false);
    setSubType(false);
  };

  const confidentialityButton = () => {
    setSubType(true);
  };
  return (
    <>
      <IonPage class="policy_wrapper">
        <div style={{ width: "100%", textAlign: "end", background: "white" }}>
          <IonButton
            class="close-btn"
            onClick={() => closeHandler}
            className="close-icons"
            style={{
              background: "transparent",
              outline: "none",
              border: "none",
            }}
          >
            <CloseIcon />
          </IonButton>
        </div>
        <div>
          <IonSegment
            onIonChange={(e) => console.log("Segment selected", e.detail.value)}
          >
            <IonSegmentButton value="friends">
              <IonLabel>Privacy policy</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="enemies">
              <IonLabel>Terms and Conditions</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </div>

        {/* <IonTabBar slot="bottom">
          <IonTabButton
            tab="home"
            href="#"
            onClick={privacyAndPolicy}
            style={{ color: showPrivacy ? "" : "#747272" }}
          >
            <IonLabel>Privacy policy</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="transfer"
            href="/termAndCondition"
            onClick={termAndCondition}
            style={{ color: showPrivacy ? "#747272" : "" }}
          >
            <IonLabel>Terms and Conditions</IonLabel>
          </IonTabButton>
        </IonTabBar> */}

        <IonContent>
          <div className="policy-container">
            {showPrivacy && policyData.length > 0 ? (
              <>
                <div className="subnav-button">
                  <ButtonConmponent
                    buttonLabel="policy.refund"
                    clickHandler={refundPolicyButton}
                  />
                  <ButtonConmponent
                    buttonLabel="policy.return"
                    clickHandler={returnPolicyButton}
                  />
                </div>
                <ButtonConmponent
                  buttonLabel="policy.confidential"
                  clickHandler={confidentialityButton}
                />

                {subType ? (
                  <>
                    {" "}
                    {policyData.map((element: any) => {
                      return (
                        <>
                          {element.class ===
                          "Privacy policy and Confidentiality" ? (
                            <>
                              <div className="page-title">{element.class}</div>
                              <p className="page-paragraph">
                                {element.description}
                              </p>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {refundPolicy ? (
                      <>
                        {policyData.map((element: any) => {
                          return (
                            <>
                              {element.class === "Refund Policy" ? (
                                <>
                                  <div className="page-title">
                                    {element.class}
                                  </div>
                                  <p className="page-paragraph">
                                    {element.description}
                                  </p>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        {policyData.map((element: any) => {
                          return (
                            <>
                              {element.class === "Return & Exchange Policy" ? (
                                <>
                                  <div className="page-title">
                                    {element.class}
                                  </div>
                                  <p className="page-paragraph">
                                    {element.description}
                                  </p>
                                </>
                              ) : (
                                <></>
                              )}
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export { Policy };
