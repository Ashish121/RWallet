import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ButtonConmponent,
  HeaderComponent,
  RadioComponent,
} from '../../components';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
  IonFooter,
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './PosPaymentPage.scss';
import { MapView } from '../Map/MapView';

const PosPaymentPage: React.FC = () => {
  const history = useHistory();

  const [nearestPOS, setNearestPOS] = useState({});
  const [map, setMapView] = useState(null);
  const [readyToPan, setReadyToPan] = useState(false);

  useEffect(() => {
    panMapToNearestPOS();
    return () => {
      setReadyToPan(false);
    };
  }, [readyToPan && map]);
  //   const [order, setOrder] = useState("");

  //   function updateOrderType(event: any) {
  //     const order = event.target.value;
  //     setOrder(order);
  //   }

  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }

  function goBack() {
    history.replace('/tabs');
  }

  function getNearestPOS(data: any) {
    console.log('Nearest POS is ,', data[0]);
    setNearestPOS(data[0]);
    setReadyToPan(true);
  }

  function panMapToNearestPOS() {
    console.log('map before: ', map);
    const posDetails: any = nearestPOS;
    console.log('nearestPOS: ', nearestPOS);
    if (map) {
      const view = map;
      // @ts-ignore: Object is possibly 'null'.
      view.flyTo([posDetails.data.latitude, posDetails.data.longitude], 10);
    }
  }

  function updatePOSOption(event: any) {
    console.log('selected: ', event.target.value);
    console.log(map);
  }

  function getMapInstance(map: any) {
    console.log('map instance received: ', map);
    setMapView(map);
  }
  return (
    <React.Fragment>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable={'common.header'}
            showMenu={false}
            showNotification={false}
            showCart={true}
            cartHandler={navigateToCart}
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="cart-page-wrapper">
              <div className="page-header">
                <IonText>
                  <Translate message="pos.pageLabel" />
                </IonText>
              </div>

              <div
                style={{
                  border: '1px solid white',
                  borderRadius: '8px',
                  margin: '10px',
                  padding: '10px',
                  marginLeft: '5%',
                  marginRight: '10%',
                }}
              >
                <div className="accountHeading md hydrated">
                  <IonText>
                    <Translate message="pos.accountLabel" />
                  </IonText>
                </div>
                <IonText className="accountNumber">
                  <Translate message="pos.accountNumber" />
                </IonText>
              </div>

              <div className="PosSection-0">
                <div className="page-header">
                  <IonText>
                    <Translate message="pos.radioLabel" />
                  </IonText>
                </div>
                <IonRadioGroup value="nearestPOS" onIonChange={updatePOSOption}>
                  <div className="options-section1">
                    <RadioComponent
                      label="Pick up from nearest POS counter"
                      val="nearestPOS"
                      showRadioButton={true}
                    />
                  </div>
                  <div className="options-section1">
                    <RadioComponent
                      label="Enter your desired location"
                      val="customAddress"
                      showRadioButton={true}
                    />
                  </div>
                </IonRadioGroup>
              </div>
              <div className="map_view_container">
                <MapView
                  detailsView={false}
                  handleDistance={getNearestPOS}
                  calculateDistance={true}
                  handleInstance={getMapInstance}
                />
              </div>
            </div>
          </IonContent>
          <IonFooter style={{ height: '60px', paddingTop: '10px' }}>
            <div className="footer-wrapper">
              <div className="price-section">
                <IonText className="price-label">
                  <Translate message="cart.total" />
                </IonText>
                <IonText className="price-text">Rs 129445.00</IonText>
              </div>
              <div className="checkout-btn-wrapper">
                <ButtonConmponent buttonLabel="pos.confirm" />
              </div>
            </div>
          </IonFooter>
        </IonPage>
      </IonApp>
    </React.Fragment>
  );
};

export { PosPaymentPage };
