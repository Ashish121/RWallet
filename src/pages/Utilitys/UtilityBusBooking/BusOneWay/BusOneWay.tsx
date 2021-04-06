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
  LoaderComponent,
  SegmentButtonComponentForBus,
} from '../../../../components';
import './BusOneWay.scss';
import { useDispatch } from 'react-redux';
import { requestForFlightOneWayPage } from '../../../../redux/actions';

const BusOneWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [sourceCity, setSourceCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  // const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState('');
  const [travellersDetails, setTravellersDetails] = useState([{}]);

  function updateSourceCity(sourceCity: any) {
    console.log('sourceCity: ', sourceCity);
    setSourceCity(sourceCity);
  }

  function updateDestinationCity(destCity: any) {
    console.log('destCity: ', destCity);
    setDestCity(destCity);
  }

  function handleDepartureDate(departureDate: any) {
    console.log('departureDate: ', departureDate);
    setDepartureDate(departureDate);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      return;
    }
  }

  function handleBusBooking() {
    const user_id = 2;
    const returnDate = 'empty';
    const roundTrip = '0';
    const travelType = 'Bus';
    const classForFlight = 'empty';
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForFlightOneWayPage(
        {
          user_id,
          returnDate,
          roundTrip,
          travelType,
          sourceCity,
          destCity,
          departureDate,
          travelers,
          classForFlight,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }
  function onTravellerSelect(travellers: any) {
    console.log('Selected value: ', travellers);
    setTravelers(travellers);
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
    ];

    setTravellersDetails(array);
  }, []);

  function goBack() {
    history.replace('/tabs/home');
  }

  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />
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
                <SegmentButtonComponentForBus />
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
                      onChange={updateSourceCity}
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
                      onChange={updateDestinationCity}
                    />
                  </div>
                </div>
                <div
                  className="departure-area"
                  style={{ width: '45%', marginTop: '5%' }}
                >
                  <DatePickerComponent
                    placeholder="UtilityDeparture"
                    handler={handleDepartureDate}
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
