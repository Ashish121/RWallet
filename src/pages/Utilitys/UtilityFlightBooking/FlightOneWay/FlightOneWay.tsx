import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { FlightIcon } from '../../../../assets/Icons';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  DatePickerComponent,
  SelectMenu,
} from '../../../../components';
import './FlightOneWay.scss';

const FlightOneWay: React.FC = () => {
  const history = useHistory();
  // const [date, setDate] = useState("");
  // const [classForFlight, setClass] = useState("");
  const [classDetails, setClassDetails] = useState([{}]);
  const [toggle, setToggle] = useState(false);

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

  function handleflightBook() {
    console.log('Handling registration');
    history.replace('/tabs/flightTwoWay');
  }
  function handleDate(date: any) {
    console.log('date: ', date);

    // setDate(date);
  }
  function onClassSelect(classForFlight: any) {
    console.log('Selected value: ', classForFlight);
    // setClass(classForFlight);
  }
  function goBack() {
    history.replace('/tabs/home');
  }

  function handleToggle(toggle: any) {
    toggle = !toggle;
    if (toggle == true) {
      history.replace('/tabs/flightTwoWay');
      setToggle(toggle);
    } else {
      setToggle(toggle);
    }
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
                <Translate message="UtilityFlightBooking" />
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
                    />
                  </div>
                </div>
                <div>
                  <div style={{ width: '50%' }} className="departure-area">
                    <DatePickerComponent
                      placeholder="UtilityDeparture"
                      handler={handleDate}
                    />

                    <InputText
                      inputType="text"
                      labelText="UtilityTravellers"
                      labelType="floating"
                      color="light"
                      labelColor="light"
                    />

                    <SelectMenu
                      label="UtilityClass"
                      onSelect={onClassSelect}
                      array={classDetails}
                    />
                  </div>
                </div>

                <div className="bookingButton">
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
