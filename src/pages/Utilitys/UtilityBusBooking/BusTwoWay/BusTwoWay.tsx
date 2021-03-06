import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,

} from '@ionic/react';
import {BusBookingIcon} from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent } from '../../../../components';
import './BusTwoWay.scss';

const BusTwoWay: React.FC = () => {
  const history = useHistory();

  function handletopUp() {
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
              <IonText className="booking-twoWay-text-area">
                <Translate message="UtilityBusBooking" />
              </IonText>
              <div className="booking-twoWay-wrapper">
                <div className="booking-twoWay-section">
                  <div className="booking-twoWay-from">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightFrom"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                  <div className="flight-twoWay-icon">
                    <IonText className="profile-icon-wrapper">
                      <BusBookingIcon width="140" height="140" />
                    </IonText>
                  </div>
                  <div className="booking-twoWay-to">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightTo"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                </div>
                <div className="flight-Return">
                  <div className="flight-departure">
                    <InputText
                      inputType="text"
                      labelText="UtilityDeparture"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                  <div className="flight-return">
                    <InputText
                      inputType="text"
                      labelText="UtilityReturn"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />
                  </div>
                  
                </div>
               
                <div  className="departure-twoWay-area">
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
                <div className="flight-twoWay-button">
                  <ButtonConmponent
                    buttonLabel="UtilityBus"
                    size="block"
                    clickHandler={handletopUp}
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

export { BusTwoWay };