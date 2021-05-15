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
import { HeaderComponent, SlidesComponent } from '../../components';
import {
  FavButtonDisabled,
  FavButtonEnabled,
  CloseBarIcon,
} from '../../assets/Icons';

import './ItemDetailsPage.scss';
import { Translate } from '../../i18n/formatMessages';
import { requestForAddItemToCart } from '../../redux/actions/';

const ItemDetailsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [expandOptions, setExpandOptions] = useState(false);
  const [favSelected, setFavSelected] = useState(false);
  const [color, setDeviceColor] = useState<string>();
  const [price, setPrice] = useState(Number);
  const [productName, setProductName] = useState(Number);
  const [count, setCount] = useState(Number);
  // const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const paramsItem: any = location.state;
    setPrice(paramsItem.price);
    setProductName(paramsItem.productName);
    setCount(paramsItem.count);
    // setImageUrl(paramsItem.imagePath);
  }, []);

  const toggleExpandOptions = () => {
    setExpandOptions(!expandOptions);
  };

  function toggleFav() {
    const selectedStatus = !favSelected;
    setFavSelected(selectedStatus);
  }

  function setColor(value: any) {
    setDeviceColor(value);
  }
  function addToCart() {
    const paramsItem: any = location.state;
    const configId = paramsItem.configId;
    const productId = paramsItem.productId;
    const quantity = paramsItem.quantity;

    dispatch(
      requestForAddItemToCart(
        { user_id, productId, configId, quantity },
        nextRoute
      )
    );
  }

  function nextRoute(status: any) {
    if (status) {
      history.replace('/tabs/shopping/cart');
    }
  }

  function showCartItems() {
    history.replace('/tabs/shopping/cart');
  }
  function goBack(id: any) {
    history.replace('/tabs/shopping', { id: id });
  }

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
          handler={() => goBack(1)}
          value={count}
        />
        <IonContent>
          <SlidesComponent />

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
                  {favSelected && (
                    <button
                      onClick={toggleFav}
                      style={{
                        backgroundColor: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        float: 'right',
                      }}
                    >
                      <FavButtonEnabled width="18" height="18" />
                    </button>
                  )}
                  {!favSelected && (
                    <button
                      style={{
                        backgroundColor: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        float: 'right',
                      }}
                      onClick={toggleFav}
                    >
                      <FavButtonDisabled width="18" height="18" />
                    </button>
                  )}
                </div>
                <div className="storage-details-wrapper">
                  <button className="btn-64gb">4GB RAM + 64GB Storage</button>
                  <button className="btn-128gb">4GB RAM + 128GB Storage</button>
                </div>
                <div className="item-color-wrapper">
                  <IonList>
                    <IonItem>
                      <IonLabel style={{ color: '#000000' }}>Color</IonLabel>
                      <IonSelect
                        value={color}
                        onIonChange={(e) => setColor(e.detail.value)}
                      >
                        <IonSelectOption value="female">
                          Product red
                        </IonSelectOption>
                        <IonSelectOption value="male">
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
