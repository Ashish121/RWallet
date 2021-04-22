import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import debounce from 'lodash.debounce';
import { useHistory } from 'react-router-dom';
import { BusBookingIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import { useDispatch } from 'react-redux';
import {
  ButtonConmponent,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
  LoaderComponent,
  SegmentButtonComponent,
} from '../../../../components';
import './BusOneWay.scss';
import {
  requestForFlightOneWayPage,
  loadCityNameForBus,
} from '../../../../redux/actions';

const BusOneWay: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');

  const [travelersDetails, setTravelersDetails] = useState([{}]);

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

  const [showOneWaySection, setShowOneWaySection] = useState(true);
  const [showTwoWaySection, setShowTwoWaySection] = useState(false);
  const [roundTrip, setRoundTrip] = useState('0');

  const [destinationCity, setDestinationCity] = useState([{}]);
  const [selectedSourceCity, setSelectedSourceCity] = useState('');
  const [selectedDestinationPlace, setSelectedDestinationPlace] = useState('');

  useEffect(() => {
    dispatch(loadCityNameForBus(setDestinationCityList));
  }, []);

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

    setTravelersDetails(array);
  }, []);

  function handleDate(departureDate: any) {
    setDepartureDate(departureDate);
  }
  function handleReturnDate(returnDate: any) {
    setReturnDate(returnDate);
  }
  function OnTravelersSelect(travelers: any) {
    setTravelers(travelers);
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
    const user_id = localStorage.getItem('userId');
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
          sourceCity: selectedSourceCity,
          destCity: selectedDestinationPlace,
          departureDate,
          travelers,
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

  function handleBusTripDetails(event: any) {
    console.log('event', event.target.value);
    const value = event.target.value;
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

  //for selected source  and destination list ................

  function setDestinationCityList(res: any) {
    console.log('setting data: ', res);
    const destinationCitys = res.data.data;
    configureCityList(destinationCitys);
  }
  function configureCityList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateCityList(finalArray);
  }

  function updateCityList(array: any) {
    setDestinationCity(array);
  }
  const handleSourceCity = debounce((val: any) => {
    console.log('Selected source city: ', val);
    setSelectedSourceCity(val);
  }, 300);

  const handleDestinationCity = debounce((val: any) => {
    console.log('Selected destination city: ', val);
    setSelectedDestinationPlace(val);
  }, 300);

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
            <div className="bus-booking-container">
              <IonText className="bus-booking-oneWay-text-area ">
                <Translate message="UtilityBusBooking" />
              </IonText>
              <div className="toggle-button">
                <SegmentButtonComponent handler={handleBusTripDetails} />
              </div>

              {showOneWaySection && (
                <div className="bus-booking-oneWay-wrapper">
                  <div className="bus-booking-section">
                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightFrom"
                        array={destinationCity}
                        onSelect={handleSourceCity}
                      />
                    </div>

                    <div className="bus-Booking-icon">
                      <IonText className="profile-icon-wrapper">
                        <BusBookingIcon width="140" height="140" />
                      </IonText>
                    </div>

                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightTo"
                        array={destinationCity}
                        onSelect={handleDestinationCity}
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ width: '45%' }}>
                      <DatePickerComponent
                        placeholder="UtilityDeparture"
                        handler={handleDate}
                      />

                      <SelectMenu
                        label="UtilityTravellers"
                        onSelect={OnTravelersSelect}
                        array={travelersDetails}
                      />
                    </div>
                  </div>

                  <div className="bus-one-way-button">
                    <ButtonConmponent
                      buttonLabel="UtilityBus"
                      size="block"
                      clickHandler={handleBusBooking}
                    />
                  </div>
                </div>
              )}
              {showTwoWaySection && (
                <div className="bus-booking-TwoWay-wrapper">
                  <div className="bus-booking-twoWay-section">
                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightFrom"
                        array={destinationCity}
                        onSelect={handleSourceCity}
                      />
                    </div>
                    <div className="bus-twoWay-icon">
                      <IonText>
                        <BusBookingIcon width="140" height="140" />
                      </IonText>
                    </div>

                    <div style={{ width: '45%', marginLeft: '0px' }}>
                      <SelectMenu
                        label="UtilityFlightTo"
                        array={destinationCity}
                        onSelect={handleDestinationCity}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '45%' }}>
                      <DatePickerComponent
                        placeholder="UtilityDeparture"
                        handler={handleDate}
                      />
                    </div>
                    <div style={{ width: '45%', marginLeft: '40px' }}>
                      <DatePickerComponent
                        placeholder="UtilityReturn"
                        handler={handleReturnDate}
                      />
                    </div>{' '}
                  </div>

                  <div style={{ width: '45%' }}>
                    <SelectMenu
                      label="UtilityTravellers"
                      onSelect={OnTravelersSelect}
                      array={travelersDetails}
                    />
                  </div>
                  <div className="bus-two-way-button">
                    <ButtonConmponent
                      buttonLabel="UtilityBus"
                      size="block"
                      clickHandler={handleBusBooking}
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

export { BusOneWay };
