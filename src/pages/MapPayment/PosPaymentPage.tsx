import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { Translate } from '../../i18n/formatMessages';
import './PosPaymentPage.scss';
import { MapView } from '../Map/MapView';
import { requestForPosOrder } from '../../redux/actions/';
import {
  ButtonConmponent,
  HeaderComponent,
  RadioComponent,
  SelectMenu,
  InputText,
} from '../../components';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonRadioGroup,
  IonFooter,
} from '@ionic/react';
import { loadProvince, fetchdistrictByProvince } from '../../redux/actions';

const PosPaymentPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [nearestPOS, setNearestPOS] = useState({});
  const [map, setMapView] = useState(null);
  const [readyToPan, setReadyToPan] = useState(false);
  const [houseNo, setHouseNo] = useState('');
  const [province, setProvince] = useState([{}]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCountry, setCountry] = useState('');
  const [district, setDistricts] = useState([{}]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [clearValueDistrict, setClearValueDistrict] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [showDesiredLocation, setShowDesiredLocation] = useState(false);
  const accountNumber = localStorage.getItem('accountNumber');
  const paramsItem: any = location.state;
  const country = 'Nepal';

  useEffect(() => {
    panMapToNearestPOS();
    return () => {
      setReadyToPan(false);
    };
  }, [readyToPan && map]);

  useEffect(() => {
    dispatch(loadProvince(setProvinceList));
  }, []);

  function setProvinceList(res: any) {
    const provinces = res.data.data;
    configureProvince(provinces);
  }

  function updateProvince(array: any) {
    setProvince(array);
  }
  function configureProvince(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateProvince(finalArray);
  }

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

  function getMapInstance(map: any) {
    setMapView(map);
  }

  function confirmButtonHandler() {
    const paramsItem: any = location.state;
    dispatch(
      requestForPosOrder(
        {
          user_id,
          cartId: paramsItem.cartId,
          posId: null,
          country: selectedCountry,
          province: selectedProvince,
          district: selectedDistrict,
          houseNo,
        },
        nextRoute
      )
    );
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/tabs/SuccessPage');
    }
  }

  function updateHouseNo(val: string) {
    setHouseNo(val);
  }

  const handleDistrict = debounce((val: any) => {
    setSelectedDistrict(val);
  }, 300);

  function handleCountry(country: any) {
    setCountry(country);
  }
  const handleProvince = debounce((val: any) => {
    setSelectedProvince(val);
    setDistricts([{}]);
    setSelectedDistrict('');
    setClearValueDistrict(true);
    dispatch(fetchdistrictByProvince(loadDistrict, val));
  }, 300);

  function loadDistrict(res: any) {
    const districts = res.data.data;
    let finalArray: any = [];
    districts.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    setClearValueDistrict(false);
    setDistricts(finalArray);
  }

  function updatedPosLocation(event: any) {
    const locationType = event.target.value;
    if (locationType === 'nearestPOS') {
      setShowMap(true);
      setShowDesiredLocation(false);
    } else {
      setShowMap(false);
      setShowDesiredLocation(true);
    }
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
                <IonRadioGroup
                  // value="nearestPOS"
                  onIonChange={updatedPosLocation}
                >
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
              {showMap && showDesiredLocation === false ? (
                <div className="map_view_container">
                  <MapView
                    detailsView={false}
                    handleDistance={getNearestPOS}
                    calculateDistance={true}
                    handleInstance={getMapInstance}
                  />
                </div>
              ) : (
                <div className="user-details-container ">
                  <div>
                    <SelectMenu
                      label="account.country"
                      array={[
                        {
                          value: country,
                          label: country,
                        },
                      ]}
                      onSelect={handleCountry}
                    />
                  </div>
                  <SelectMenu
                    label="account.province"
                    array={province}
                    onSelect={handleProvince}
                  />
                  <div>
                    <SelectMenu
                      label="account.district"
                      array={district}
                      selectedVal={clearValueDistrict}
                      onSelect={handleDistrict}
                    />
                  </div>

                  <InputText
                    inputType="text"
                    labelText="account.houseNo"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateHouseNo}
                  />
                </div>
              )}
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
                  disabled={
                    houseNo.trim() &&
                    selectedProvince.trim() &&
                    country &&
                    selectedDistrict.trim()
                      ? false
                      : true
                  }
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
