import React from "react";
import { useHistory } from "react-router-dom";
import { IonPage, IonContent, IonText, IonApp } from "@ionic/react";
import { BusBookingIcon } from "../../../../assets/Icons";
import { Translate } from "../../../../i18n/formatMessages";
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
} from "../../../../components";
import "./BusOneWay.scss";

const BusOneWay: React.FC = () => {
  const history = useHistory();

  function handleBusBooking() {
    console.log("Handling registration");
    history.replace("/tabs/busTwoWay");
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="booking-oneWay-text-area">
                <Translate message="UtilityBusBooking" />
              </IonText>
              <div className="booking-oneWay-wrapper">
                <div className="booking-section">
                  <div className="booking-from">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightFrom"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                  <div className="flight-icon">
                    <IonText className="profile-icon-wrapper">
                      <BusBookingIcon width="140" height="140" />
                    </IonText>
                  </div>
                  <div className="booking-to">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightTo"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                </div>
                <div className="departure-area">
                  <InputText
                    inputType="text"
                    labelText="UtilityDeparture"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                  <InputText
                    inputType="text"
                    labelText="UtilityTravellers"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                  <InputText
                    inputType="text"
                    labelText="UtilityClass"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                  />
                </div>

                <div className="booking-button">
                  <ButtonConmponent
                    buttonLabel="UtilityBus"
                    size="block"
                    clickHandler={handleBusBooking}
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

export { BusOneWay };
