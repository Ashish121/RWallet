import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { FlightIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../../components';
import './FlightTwoWay.scss';
import { useDispatch } from 'react-redux';
import { requestForFlightOneWayPage } from '../../../../redux/actions';

const FlightTwoWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [sourceCity, setSourceCity] = useState('');
  const [destCity, setDestCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const [classForFlight, setClass] = useState('');
  const [classDetails, setClassDetails] = useState([{}]);
  const [toggle, setToggle] = useState(false);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  // const [date, setDate] = useState("");
  // const [returnDate, setReturnDate] = useState("");
  //const [toggle, setToggle] = useState(false);
  // const [classForFlight, setClass] = useState("");
  // const [classDetails, setClassDetails] = useState([{}]);

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

  function updateTravelers(travelers: any) {
    console.log('travelers: ', travelers);
    setTravelers(travelers);
  }

  function handleDepartureDate(departureDate: any) {
    console.log('departureDate: ', departureDate);
    setDepartureDate(departureDate);
  }
  function onClassSelect(classForFlight: any) {
    console.log('Selected class: ', classForFlight);
    setClass(classForFlight);
  }

  function handleReturnDate(returnDate: any) {
    console.log('returnDate: ', returnDate);
    setReturnDate(returnDate);
  }

  function handleBusBooking() {
    const user_id = 2;
    const roundTrip = '1';
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
          travelers,
          classForFlight,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      //history.replace('/busOneWay');
      return;
    }
  }

  function handleToggle(toggle: any) {
    toggle = !toggle;
    setToggle(toggle);
    history.replace('/tabs/flightOneWay');
  }

  function goBack() {
    history.replace('/tabs/flightOneWay');
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
              <IonText className="booking-twoWay-text-area">
                <Translate message="UtilityFlightBooking" />
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

                <div className="departure-twoWay-area" style={{ width: '45%' }}>
                  <InputText
                    inputType="text"
                    labelText="UtilityTravellers"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateTravelers}
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

export { FlightTwoWay };
