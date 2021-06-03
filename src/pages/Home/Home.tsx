import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CloseBarIcon } from "../../assets/Icons";

import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonIcon,
  IonButton,
  IonText,
  IonImg,
} from "@ionic/react";

import { caretDownOutline, caretUpOutline } from "ionicons/icons";
import {
  HeaderComponent,
  SlidesComponent,
  ShoppingSection,
  LoanSection,
  UtilitiesSection,
  LoaderComponent,
} from "../../components";
import { requestForProfile, requestForImageSlider } from "../../redux/actions/";
import "./Home.scss";
import { Translate } from "../../i18n/formatMessages";

const HomePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [expandOptions, setExpandOptions] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const [slider, setSlider] = useState([]);
  const profileInfo = useSelector((state: any) => state.profile.profileDetails);

  function nextRoute(status: any) {
    if (status) {
      history.replace("/tabs/home");
    }
  }

  useEffect(() => {
    dispatch(requestForImageSlider(showImageSliderList));
  }, []);

  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    dispatch(requestForProfile({ user_id }, nextRoute));
  }, []);

  const toggleExpandOptions = () => {
    setExpandOptions(!expandOptions);
  };

  const showNotifications = () => {
    history.replace("/tabs/notification");
  };

  function showImageSliderList(res: any) {
    const imgUrl = res.data.data;
    setSlider(imgUrl);
  }

  return (
    <>
      <LoaderComponent
        showLoading={initializing}
        loaderMessage={"Preparing..."}
      />
      <IonApp className="home-wrapper">
        <IonPage>
          <HeaderComponent
            headerLable={"common.header"}
            showMenu={true}
            showNotification={true}
            notificationHandler={showNotifications}
          />
          <IonContent className="home-wrapper">
            <div className="section-1">
              <div className="balance-check-section">
                <div
                  className="common-ion-text"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "7px 0px 0px 7px",
                  }}
                >
                  <IonText
                    className="balance-wrapper-text"
                    style={{
                      color: "#000000",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    <Translate message="home.balanceLabel" />
                  </IonText>
                </div>
                <div className="arrow_box"></div>
                <div
                  className="common-ion-text"
                  style={{
                    backgroundColor: "#004777",
                    borderRadius: "0px 7px 7px 0px",
                  }}
                >
                  <IonImg
                    style={{ width: "15px", marginRight: "10px" }}
                    src={require("../../assets/Icons/Rupay.svg")}
                  />
                  <IonText
                    className="balance-wrapper-text"
                    style={{ color: "#ffffff" }}
                  >
                    {profileInfo.balance}
                  </IonText>
                </div>
              </div>
              {slider.length > 0 && (
                <SlidesComponent value={slider} showSlider={true} />
              )}
            </div>

            <div
              className={
                expandOptions
                  ? "services-options-wrapper fullHeight"
                  : "services-options-wrapper"
              }
            >
              <IonCard
                className="service-card-wrapper"
                style={
                  expandOptions
                    ? { overflow: "scroll" }
                    : { overflow: "hidden" }
                }
              >
                <IonCardContent
                  style={{ paddingBottom: "0px", paddingTop: "0px" }}
                >
                  {expandOptions && (
                    <div className="close-bar-icon">
                      <button onClick={toggleExpandOptions}>
                        <CloseBarIcon />
                      </button>
                    </div>
                  )}

                  <ShoppingSection expanded={expandOptions} />

                  <LoanSection expanded={expandOptions} />
                  <UtilitiesSection expanded={expandOptions} />
                  <div className="see-more-section">
                    <IonButton
                      onClick={toggleExpandOptions}
                      className="ion-padding"
                      style={{
                        width: "220px",
                        "--background": "rgb(0, 71, 119)",
                        "font-size": "16px",
                        paddingBottom: "26px",
                      }}
                    >
                      <IonIcon
                        slot="end"
                        icon={expandOptions ? caretDownOutline : caretUpOutline}
                      />
                      {!expandOptions ? (
                        <Translate message="home.seeAll" />
                      ) : (
                        <Translate message="home.collapse" />
                      )}
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { HomePage };
