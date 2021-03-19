import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { BusBookingIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
} from '../../../../components';
import './BusTwoWay.scss';

const BusTwoWay: React.FC = () => {
  const history = useHistory();
  // const [date, setDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  // const [travellers, setTravellers] = useState("");
  const [travellersDetails, setTravellersDetails] = useState([{}]);
  const [toggle, setToggle] = useState(false);

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

  function handletopUp() {
    console.log('Handling registration');
    history.replace('/');
  }
  function handleDepartureDate(date: any) {
    console.log('date: ', date);
    //setDate(date);
  }
  function handleReturnDate(returnDate: any) {
    console.log('returnDate: ', returnDate);
    // setReturnDate(returnDate);
  }
  function onTravellerSelect(travellers: any) {
    console.log('Selected value: ', travellers);
    // setTravellers(travellers);
  }
  function handleToggle(toggle: any) {
    toggle = !toggle;
    setToggle(toggle);
    history.replace('/tabs/busOneWay');
  }
  function goBack() {
    history.replace('/tabs/busOneWay');
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
              <IonText className="booking-twoWay-text-area">
                <Translate message="UtilityBusBooking" />
              </IonText>

              <div
                className="toggelButton"
                style={{ width: '60%', display: 'flex', marginTop: '5%' }}
              >
                <ButtonConmponent
                  buttonLabel="One Way"
                  size="large"
                  color={!toggle ? 'light' : ''}
                  clickHandler={handleToggle}
                  style={{ fontSize: '16px', width: '118% ', height: '2rem' }}
                />
                <ButtonConmponent
                  buttonLabel=" Two Way"
                  size="large"
                  style={{
                    position: 'fixed',
                    color: 'white',
                    fontSize: '16px',
                    width: '50%',
                    height: '2.2rem',
                  }}
                  color={toggle ? 'light' : ''}
                />
              </div>

              <div
                className="booking-twoWay-wrapper"
                style={{ marginTop: '15px' }}
              >
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
                <div style={{ display: 'flex', marginTop: '5%' }}>
                  <div className="flight-departure" style={{ width: '45%' }}>
                    <DatePickerComponent
                      placeholder="UtilityDeparture"
                      handler={handleDepartureDate}
                    />
                  </div>
                  <div
                    className="flight-return"
                    style={{ width: '45%', marginLeft: '40px' }}
                  >
                    <DatePickerComponent
                      placeholder="UtilityReturn"
                      handler={handleReturnDate}
                    />
                  </div>{' '}
                </div>

                <div
                  className="departure-twoWay-area"
                  style={{ width: '45%', marginTop: '5%' }}
                >
                  <SelectMenu
                    label="UtilityTravellers"
                    onSelect={onTravellerSelect}
                    array={travellersDetails}
                  />
                </div>
                <div className="flightTwoWayButton">
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
