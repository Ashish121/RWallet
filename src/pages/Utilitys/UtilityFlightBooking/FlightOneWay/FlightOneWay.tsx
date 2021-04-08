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
  SegmentButtonComponent,
} from '../../../../components';
import './FlightOneWay.scss';
import { requestForFlightOneWayPage } from '../../../../redux/actions';

const FlightOneWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sourceCity, setSourceCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const [classForFlight, setClass] = useState('');
  const [classDetails, setClassDetails] = useState([{}]);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const [showOneWaySection, setShowOneWaySection] = useState(true);
  const [showTwoWaySection, setShowTwoWaySection] = useState(false);
  const [roundTrip, setRoundTrip] = useState('0');

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
    setSourceCity(sourceCity);
  }

  function updateDestCity(destCity: any) {
    setDestCity(destCity);
  }

  function handleDate(departureDate: any) {
    setDepartureDate(departureDate);
  }
  function handleReturnDate(returnDate: any) {
    setReturnDate(returnDate);
  }
  function onClassSelect(classForFlight: any) {
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
    setTravelers(travelers);
  }

  function getReachargeDetails(data: any) {
    const value = data.value;
    if (value === 'one_way') {
      setRoundTrip('0');
      setShowOneWaySection(true);
      setShowTwoWaySection(false);
    } else {
      setRoundTrip('1');
      setShowOneWaySection(false);
      setShowTwoWaySection(true);
    }
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
                style={{ width: '60%', display: 'flex', marginTop: '8%' }}
              >
                <SegmentButtonComponent handler={getReachargeDetails} />
              </div>
              {showOneWaySection && (
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
              )}
              {showTwoWaySection && (
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
                        onChange={updateSourceCity}
                      />
                    </div>
                    <div className="flight-twoWay-icon">
                      <IonText className="profile-icon-wrapper">
                        <FlightIcon width="140" height="140" />
                      </IonText>
                    </div>
                    <div className="booking-twoWay-to">
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

                  <div style={{ display: 'flex' }}>
                    <div className="flight-departure" style={{ width: '45%' }}>
                      <DatePickerComponent
                        placeholder="UtilityDeparture"
                        handler={handleDate}
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
                    style={{ width: '45%' }}
                  >
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
                  <div className="bookingButtonForFlightTwoWay">
                    <ButtonConmponent
                      buttonLabel="UtilityBookFlight"
                      size="block"
                      clickHandler={handleflightBook}
                    />
                  </div>
                </div>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { FlightOneWay };
