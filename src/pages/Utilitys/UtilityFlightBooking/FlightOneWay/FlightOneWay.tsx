import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';

import { useHistory } from 'react-router-dom';
import { FlightIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import { useDispatch } from 'react-redux';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
  LoaderComponent,
  SegmentButtonComponentForFlight,
} from '../../../../components';
import './FlightOneWay.scss';
import { requestForFlightOneWayPage } from '../../../../redux/actions';

const FlightOneWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [sourceCity, setSourceCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const [classForFlight, setClass] = useState('');
  const [classDetails, setClassDetails] = useState([{}]);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  useEffect(() => {
    const array = [
      {
        value: 'first',
        label: 'First Class',
      },
      {
        value: 'business',
        label: 'Business Class',
      },
      {
        value: 'economy',
        label: 'Economy Class',
      },
    ];

    setClassDetails(array);
  }, []);

  function updateSourceCity(sourceCity: any) {
    console.log('sourceCity: ', sourceCity);
    setSourceCity(sourceCity);
  }

  function updateDestCity(destCity: any) {
    console.log('destCity: ', destCity);
    setDestCity(destCity);
  }

  function handleDate(departureDate: any) {
    console.log('departureDate: ', departureDate);
    setDepartureDate(departureDate);
  }
  function onClassSelect(classForFlight: any) {
    console.log('Selected class: ', classForFlight);
    setClass(classForFlight);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      return;
    }
  }

  function handleflightBook() {
    const user_id = localStorage.getItem('userId');
    const returnDate = '';
    const roundTrip = '0';
    const travelType = 'flight';

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
          travelers: travelers,
          classForFlight,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }

  function goBack() {
    history.replace('/tabs/home');
  }

  function handleTravelersValue(travelers: any) {
    console.log('travelers', travelers);
    setTravelers(travelers);
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
                <Translate message="UtilityFlightBooking" />
              </IonText>

              <div
                className="toggelButton"
                style={{ width: '60%', display: 'flex', marginTop: '5%' }}
              >
                <SegmentButtonComponentForFlight />
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
                      <FlightIcon width="140" height="140" />
                    </IonText>
                  </div>
                  <div className="booking-to">
                    <InputText
                      inputType="text"
                      labelText="UtilityFlightTo"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                      onChange={updateDestCity}
                    />
                  </div>
                </div>
                <div>
                  <div style={{ width: '50%' }} className="departure-area">
                    <DatePickerComponent
                      placeholder="UtilityDeparture"
                      handler={handleDate}
                    />

                    <SelectMenu
                      label="UtilityTravellers"
                      array={[
                        {
                          value: '1',
                          label: 1,
                        },
                        {
                          value: '2',
                          label: 2,
                        },
                      ]}
                      onSelect={handleTravelersValue}
                    />

                    <SelectMenu
                      label="UtilityClass"
                      onSelect={onClassSelect}
                      array={classDetails}
                    />
                  </div>
                </div>

                <div className="bookingButtonForFlight">
                  <ButtonConmponent
                    buttonLabel="UtilityBookFlight"
                    size="block"
                    clickHandler={handleflightBook}
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

export { FlightOneWay };
