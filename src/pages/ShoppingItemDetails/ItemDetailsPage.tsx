import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonButton,
} from '@ionic/react';
import { HeaderComponent, SlidesComponent, Rating } from '../../components';
import { CloseBarIcon } from '../../assets/Icons';

import './ItemDetailsPage.scss';
import { Translate } from '../../i18n/formatMessages';
import { requestForAddItemToCart, loadCartDetails } from '../../redux/actions/';

const ItemDetailsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [expandOptions, setExpandOptions] = useState(false);
  const [color, setDeviceColor] = useState<string>();
  const [price, setPrice] = useState(Number);
  const [productName, setProductName] = useState(Number);
  const [count, setCount] = useState(Number);
  const [imageUrl, setImageUrl] = useState('');
  const [ramActivate, setRamActivate] = useState(false);
  const [configId, setConfigId] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ConfigProductList, setConfigProductList] = useState([]);

  const [productId, setProductId] = useState(Number);
  const paramsItem: any = location.state;
  useEffect(() => {
    setProductId(paramsItem.productId);
    setCategory(paramsItem.categoryName);
    setPrice(paramsItem.price);
    setProductName(paramsItem.productName);
    setCount(paramsItem.count);
    setImageUrl(paramsItem.imageUrl);
    setDescription(paramsItem.description);
    setConfigProductList(paramsItem.configProduct);
  }, []);

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/shopping');
  }, []);

  useEffect(() => {
    dispatch(loadCartDetails({ user_id }, ShowCartBadgeValue));
  }, []);

  function ShowCartBadgeValue(res: any) {
    const count = res.data.data.count;
    setCount(count);
  }

  const toggleExpandOptions = () => {
    setExpandOptions(!expandOptions);
  };

  const handleMobileMemory = (key: any, index: any) => {
    const newId = index + 1;
    const newparam: any = ConfigProductList[index];
    setConfigId(newId);
    switch (key) {
    case '4GB':
      setRamActivate(false);
      setPrice(newparam.price);
      break;
    case '6GB':
      setRamActivate(true);
      setPrice(newparam.price);
      break;
    default:
      break;
    }
  };

  function setColor(value: any) {
    setDeviceColor(value);
  }

  function addToCart() {
    const quantity = 1;
    dispatch(
      requestForAddItemToCart(
        { user_id, productId, configId, quantity },
        nextRoute
      )
    );
  }

  function nextRoute(status: any) {
    if (status) {
      dispatch(loadCartDetails({ user_id }, ShowCartBadgeValue));
    }
  }

  function showCartItems() {
    history.replace('/tabs/shopping/cart');
  }

  const goBack = (name: any) => {
    history.replace({
      pathname: '/tabs/shopping',
      state: {
        categoryName: name,
      },
    });
  };

  return (
    <IonApp className="item-details-wrapper">
      <IonPage>
        <HeaderComponent
          headerLable={'common.header'}
          showMenu={false}
          showNotification={false}
          showCart={true}
          cartHandler={showCartItems}
          showBackButton={true}
          handler={() => goBack(category)}
          value={count}
        />
        <IonContent>
          <SlidesComponent value={imageUrl} showSlider={false} />

          <div
            className={
              expandOptions
                ? 'services-options-wrapper fullHeight'
                : 'services-options-wrapper'
            }
          >
            <IonCard
              className="service-card-wrapper"
              style={
                expandOptions ? { overflow: 'scroll' } : { overflow: 'hidden' }
              }
            >
              <IonCardContent
                style={{ paddingBottom: '0px', paddingTop: '0px' }}
              >
                <div className="close-bar-icon">
                  <button onClick={toggleExpandOptions}>
                    <CloseBarIcon />
                  </button>
                </div>
                <div className="details-header-wrapper">
                  <IonText className="item-name-label">{productName}</IonText>
                </div>
                {ConfigProductList.length > 0 ? (
                  <div>
                    <div className="storage-details-wrapper">
                      <button
                        className="btn-64gb"
                        style={{
                          backgroundColor: ramActivate ? '' : '#004777',
                          color: ramActivate ? '' : 'white',
                        }}
                        onClick={() => handleMobileMemory('4GB', 0)}
                      >
                        {'4GB Ram ' + '32GB Storage '}
                      </button>
                      <button
                        className="btn-128gb"
                        style={{
                          backgroundColor: ramActivate ? '#004777' : '',
                          color: ramActivate ? 'white' : '',
                        }}
                        onClick={() => handleMobileMemory('6GB', 1)}
                      >
                        {'6GB Ram ' + '64GB Storage '}
                      </button>
                    </div>
                    <div className="item-color-wrapper">
                      <IonList>
                        <IonItem>
                          <IonLabel style={{ color: '#000000' }}>
                            Color
                          </IonLabel>
                          <IonSelect
                            value={color}
                            onIonChange={(e) => setColor(e.detail.value)}
                          >
                            <IonSelectOption value="red">
                              Product red
                            </IonSelectOption>
                            <IonSelectOption value="blue">
                              Pacific blue
                            </IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonList>
                    </div>
                    <div className="price-details-wrapper">
                      <IonText
                        style={{
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: '14px',
                          lineHeight: '17px',
                          color: '#000000',
                        }}
                      >
                        <Translate message="itemDetails.dealPrice" />
                      </IonText>

                      <IonText
                        style={{
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#000000',
                        }}
                      >
                        {price}
                      </IonText>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* <div className="storage-discription-wrapper"> */}
                    <div
                      className={
                        expandOptions
                          ? 'storage-discription-expand'
                          : 'storage-discription-wrapper'
                      }
                    >
                      {description}
                    </div>
                    <div className="item-color-wrapper">
                      <IonList>
                        <IonItem>
                          <IonLabel style={{ color: '#000000' }}>
                            Color
                          </IonLabel>
                          <IonSelect
                            value={color}
                            onIonChange={(e) => setColor(e.detail.value)}
                          >
                            <IonSelectOption value="red">
                              Product red
                            </IonSelectOption>
                            <IonSelectOption value="blue">
                              Product blue
                            </IonSelectOption>
                          </IonSelect>
                        </IonItem>
                      </IonList>
                    </div>
                    <div className="price-details-wrapper">
                      <IonText
                        style={{
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: '14px',
                          lineHeight: '17px',
                          color: '#000000',
                        }}
                      >
                        <Translate message="itemDetails.dealPrice" />
                      </IonText>
                      <IonText
                        style={{
                          fontStyle: 'normal',
                          fontWeight: '600',
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#000000',
                        }}
                      >
                        {price}
                      </IonText>
                    </div>
                  </div>
                )}

                {expandOptions && (
                  <div className="features-wapper">
                    <IonText className="features-label">
                      <Translate message="itemDetails.feature" />
                    </IonText>
                    <div className="features-text-wrapper">
                      <IonText className="features-text">
                        Country Of Origin - India, China 48MP rear camera with
                        ultra-wide, super macro, portrait, night mode, 960fps
                        slowmotion, AI scene recognition, pro color, HDR, pro
                        mode | 16MP facing camera. 16.9418 centimeters
                        (6.67-inch) FHD+ full screen dot display LCD multi-touch
                        capacitive touchscreen with 2400 x 1080 pixels
                        resolution, 400 ppi pixel density and 20:9 aspect ratio
                        | 2.5D curved glass The all-new Interstellar Black
                        colour combines different hues of grey and blue together
                        to deliver a shade that mesmerizes you.
                      </IonText>
                    </div>
                  </div>
                )}
                <div>
                  <Rating productId={productId} ratings={paramsItem.ratings} />
                </div>

                <div className="add-to-cart-button-wrapper">
                  <IonButton
                    className="add-cart-button"
                    expand="block"
                    onClick={addToCart}
                  >
                    <Translate message="itemDetails.addToCart" />
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export { ItemDetailsPage };
