import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const [nearestPOS, setNearestPOS] = useState({});
  const [map, setMapView] = useState(null);
  const [readyToPan, setReadyToPan] = useState(false);
  const accountNumber = localStorage.getItem('accountNumber');
  const paramsItem: any = location.state;

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
    history.replace('/tabs/shopping/cart');
  }

  function getNearestPOS(data: any) {
    setNearestPOS(data[0]);
    setReadyToPan(true);
  }

  function panMapToNearestPOS() {
    const posDetails: any = nearestPOS;

    if (map) {
      const view = map;
      // @ts-ignore: Object is possibly 'null'.
      view.flyTo([posDetails.data.latitude, posDetails.data.longitude], 10);
    }
  }

  // function updatePOSOption(event: any) {
  //   /*eslint-disable */
  //   console.log(
  //     "🚀 ~ file: PosPaymentPage.tsx ~ line 64 ~ updatePOSOption ~ event",
  //     event
  //   );
  // }

  function getMapInstance(map: any) {
    setMapView(map);
  }

  function confirmButtonHandler() {
    history.replace('/tabs/SuccessPage');
  }
  return (
    <React.Fragment>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable={'common.header'}
            showMenu={false}
            showNotification={false}
            showCart={false}
            cartHandler={navigateToCart}
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="pos-payment-page-wrapper">
              <div className="page-header-for-pos">
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
                <div className="pos-account-heading md hydrated">
                  <IonText>
                    <Translate message="pos.accountLabel" />
                  </IonText>
                </div>
                <IonText className="pos-account-number">
                  {accountNumber}
                </IonText>
              </div>

              <div className="PosSection-0">
                <div className="page-header-for-pos">
                  <IonText>
                    <Translate message="pos.radioLabel" />
                  </IonText>
                </div>
                <IonRadioGroup value="nearestPOS">
                  <div className="options-section1">
                    <RadioComponent
                      label="Pick up from nearest POS counter"
                      val="nearestPOS"
                      showRadioButton={true}
                      showColor={true}
                    />
                  </div>
                  <div className="options-section1">
                    <RadioComponent
                      label="Enter your desired location"
                      val="customAddress"
                      showRadioButton={true}
                      showColor={true}
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
                <IonText className="price-text">
                  Rs {paramsItem.cartTotal}
                </IonText>
              </div>
              <div className="checkout-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="pos.confirm"
                  clickHandler={confirmButtonHandler}
                />
              </div>
            </div>
          </IonFooter>
        </IonPage>
      </IonApp>
    </React.Fragment>
  );
};

export { PosPaymentPage };
