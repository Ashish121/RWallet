import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { BusBookingIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
  DatePickerComponent,
} from '../../../../components';
import './BusOneWay.scss';

const BusOneWay: React.FC = () => {
  const history = useHistory();
  // const [date, setDate] = useState("");
  // const [travellers, setTravellers] = useState("");
  const [travellersDetails, setTravellersDetails] = useState([{}]);
  const [toggle, setToggle] = useState(false);

  function handleBusBooking() {
    console.log('Handling registration');
    history.replace('/tabs/busTwoWay');
  }
  function onTravellerSelect(travellers: any) {
    console.log('Selected value: ', travellers);
    // setTravellers(travellers);
  }

  useEffect(() => {
    const array = [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
      {
        value: '5',
        label: '5',
      },
    ];

    setTravellersDetails(array);
  }, []);

  function handleDate(date: any) {
    console.log('date: ', date);

    // setDate(date);
  }

  function handleToggle(toggle: any) {
    toggle = !toggle;
    if (toggle == true) {
      history.replace('/tabs/busTwoWay');
      setToggle(toggle);
    } else {
      setToggle(toggle);
    }
  }

  function goBack() {
    history.replace('/tabs/home');
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
              <IonText className="booking-oneWay-text-area">
                <Translate message="UtilityBusBooking" />
              </IonText>

              <div
                className="toggelButton"
                style={{ width: '60%', display: 'flex', marginTop: '5%' }}
              >
                <ButtonConmponent
                  buttonLabel=" Two Way"
                  size="large"
                  style={{
                    marginLeft: '135px',
                    position: 'fixed',
                    color: 'black',
                    fontSize: '16px',
                    width: '49%',
                    height: '2rem',
                    fontfamily: 'Montserrat',
                  }}
                  color={toggle ? '' : 'light'}
                  clickHandler={handleToggle}
                />
                <ButtonConmponent
                  buttonLabel=" One Way"
                  size="large"
                  color={!toggle ? '' : 'light'}
                  style={{
                    fontSize: '16px',
                    width: '123%',
                    height: '2.2rem',
                    fontfamily: 'Montserrat',
                  }}
                />
              </div>

              <div
                className="booking-oneWay-wrapper"
                style={{ marginTop: '15px' }}
              >
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
                <div
                  className="departure-area"
                  style={{ width: '45%', marginTop: '5%' }}
                >
                  <DatePickerComponent
                    placeholder="UtilityDeparture"
                    handler={handleDate}
                  />
                  <div style={{ marginTop: '5%' }}>
                    <SelectMenu
                      label="UtilityTravellers"
                      onSelect={onTravellerSelect}
                      array={travellersDetails}
                    />
                  </div>
                </div>

                <div className="bookingButton">
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
