import React, { useState, useEffect } from 'react';
import { ButtonConmponent, HeaderComponent } from '../../components';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import {
  IonCard,
  IonCardContent,
  IonPage,
  IonContent,
  IonApp,
  IonText,
  IonFooter,
  IonIcon,
  IonFabButton,
  IonImg,
  IonAlert,
} from '@ionic/react';
import { addOutline, removeOutline } from 'ionicons/icons';
import './CartPage.scss';
import { Translate } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
import {
  loadCartDetails,
  requestForUpdateCartItem,
  requestForRemoveCartItem,
} from '../../redux/actions/';

const CartPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [cardItemList, setCardItemList] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [cartItemIdToDelete, setCartItemIdToDelete] = useState(0);

  useEffect(() => {
    dispatch(loadCartDetails({ user_id }, ShowProductList));
  }, []);

  function ShowProductList(res: any) {
    const cardItemList = res.data.data.cart_items;
    // console.log("cardItem list :", cardItemList);
    setCardItemList(cardItemList);
    const cartTotal = res.data.data.cart_total;
    // console.log("cartTotal  :", cartTotal);
    setCartTotal(cartTotal);
  }

  const increaseCount = debounce((id: Number, quantity: Number) => {
    if (quantity > 0) {
      dispatch(requestForUpdateCartItem({ cartItemID: id, quantity }));
    }
  }, 200);

  const deleteCartItem = (cartItemID: any) => {
    dispatch(requestForRemoveCartItem({ cartItemID }));
  };

  const decreaseCount = debounce((id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(requestForUpdateCartItem({ cartItemID: id, quantity }));
      return;
    }
    setDeleteStatus(true);
    setCartItemIdToDelete(id);
  }, 200);

  function goBack() {
    history.replace('/tabs/shopping/itemdetails');
  }
  function handleCheckout() {
    history.replace('/tabs/posPayment');
  }
  return (
    <>
      <IonAlert
        isOpen={deleteStatus}
        subHeader={'Are you sure ?'}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'light',
            handler: () => {},
          },
          {
            text: 'Ok',
            handler: () => {
              deleteCartItem(cartItemIdToDelete);
            },
          },
        ]}
      />
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable={'common.header'}
            showMenu={false}
            showNotification={false}
            showCart={true}
            showBackButton={true}
            handler={goBack}
          />

          <IonContent>
            <div className="cart-page-wrapper">
              <div className="page-header">
                <IonText>
                  <Translate message="cart.pageLabel" />
                </IonText>
              </div>

              {cardItemList.map((item: any) => {
                return (
                  <div>
                    {item.product_detail.map((element: any) => {
                      return (
                        <IonCard>
                          <IonCardContent>
                            <div
                              className="cart-inner-body"
                              style={{ display: 'flex' }}
                            >
                              <div className="item-image-wrapper">
                                <div
                                  style={{ padding: '5px', marginTop: '5px' }}
                                >
                                  <IonImg src={element.image_path} />
                                </div>
                              </div>
                              <div className="details-wrapper">
                                <div className="item-name">
                                  <IonText>{element.product_name}</IonText>
                                </div>
                                <div className="item-varient">
                                  <IonText>
                                    {element.ram
                                      ? element.ram +
                                        ' Ram ' +
                                        element.memory +
                                        ' Storage '
                                      : element.description}
                                  </IonText>
                                </div>
                                <div className="item-price">
                                  <IonText>RS {element.price}</IonText>
                                </div>
                              </div>
                              <div className="button-wrapper">
                                <div className="plus-btn">
                                  <IonFabButton
                                    className="fab-btn"
                                    size="small"
                                    onClick={() => {
                                      item['quantity'] = item.quantity + 1;
                                      increaseCount(
                                        item.cart_item_id,
                                        item.quantity
                                      );
                                    }}
                                  >
                                    <IonIcon ios={addOutline} md={addOutline} />
                                  </IonFabButton>
                                </div>
                                <div
                                  className="count"
                                  style={{ marginLeft: '13px' }}
                                >
                                  {item.quantity}
                                </div>
                                <div className="minus-btn">
                                  <IonFabButton
                                    className="fab-btn"
                                    size="small"
                                    onClick={() => {
                                      item['quantity'] = item.quantity - 1;
                                      decreaseCount(
                                        item.cart_item_id,
                                        item.quantity
                                      );
                                    }}
                                  >
                                    <IonIcon
                                      ios={removeOutline}
                                      md={removeOutline}
                                    />
                                  </IonFabButton>
                                </div>
                              </div>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </IonContent>
          <IonFooter style={{ height: '50px' }}>
            <div className="footer-wrapper">
              <div className="price-section">
                <IonText className="price-label">
                  <Translate message="cart.total" />
                </IonText>
                <IonText className="price-text">Rs {cartTotal}</IonText>
              </div>
              <div className="checkout-btn-wrapper">
                <ButtonConmponent
                  buttonLabel="cart.checkout"
                  clickHandler={handleCheckout}
                />
              </div>
            </div>
          </IonFooter>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CartPage };
