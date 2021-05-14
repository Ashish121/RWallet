import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
} from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './ShoppingPage.scss';
import { HeaderComponent } from '../../components';
import {
  FashionIcon,
  FavButtonDisabled,
  FavButtonEnabled,
  GroceryIcon,
  LaptopIcon,
  MotorBikeIcon,
  SearchIcon,
  SmartphoneIcon,
  SneakersIcon,
  SparepartIcon,
  StoreIcon,
  TelevisionIcon,
  WalletIcon,
  WatchIcon,
} from '../../assets/Icons';
import { loadProductDetailsList } from '../../redux/actions/';
// import { FatalException } from "@ionic/cli/lib/errors";

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [shoppingLimitBalance, setshoppingLimitBalance] = useState('');
  const [favSelected, setFavSelected] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const [productList, setProductList] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [productID, setProductID] = useState(Number);
  const [qty, setQty] = useState(Number);
  const [productName, setProductName] = useState('');
  let id = 0;

  const [price, setPrice] = useState(Number);

  useEffect(() => {
    const param: any = location.state;
    id = param.id;
    dispatch(loadProductDetailsList(ShowProductList));
  }, []);

  useEffect(() => {
    setshoppingLimitBalance('128445.00');
  }, []);

  function ShowProductList(res: any) {
    const productList = res.data.message[id].config_product;
    setProductList(productList);

    const singleProduct = res.data.message[id];
    setImagePath(singleProduct.image_path);
    setCategoryName(singleProduct.category_name);
    setPrice(singleProduct.price);
    setProductID(singleProduct.product_id);
    setQty(singleProduct.quantity);
    setProductName(singleProduct.product_name);
  }

  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }
  function search() {}
  function toggleFav() {
    const selectedStatus = !favSelected;
    setFavSelected(selectedStatus);
  }
  function showItemDetails(
    productId: any,
    configId: any,
    price: any,
    quantity: any,
    productName: any
  ) {
    history.replace('/tabs/shopping/itemdetails', {
      productId,
      configId,
      price,
      quantity,
      productName,
      imagePath,
    });
  }
  function goBack() {
    history.replace('/tabs');
  }

  function handleSliderIcons(val: any, newId: any) {
    id = newId;
    //console.log("categoryName : ", categoryName, "ID :", newId);
    dispatch(loadProductDetailsList(ShowProductList));
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
            <div className="shopping-page-wrapper">
              <div className="balance-check-section">
                <div
                  className="common-ion-text"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '7px 0px 0px 7px',
                  }}
                >
                  <IonText
                    className="balance-wrapper-text"
                    style={{
                      color: '#000000',
                      fontWeight: '500',
                      fontSize: '12px',
                    }}
                  >
                    <Translate message="shoppingPage.shoppoingLevelText" />
                  </IonText>
                </div>
                <div className="arrow_box"></div>

                <div
                  className="common-ion-text"
                  style={{
                    backgroundColor: '#004777',
                    borderRadius: '0px 7px 7px 0px',
                  }}
                >
                  <IonImg
                    style={{ width: '15px', marginRight: '10px' }}
                    src={require('../../assets/Icons/Rupay.svg')}
                  />
                  <IonText
                    className="balance-wrapper-text"
                    style={{
                      color: '#ffffff',
                      fontWeight: '500',
                      fontSize: '12px',
                    }}
                  >
                    {shoppingLimitBalance}
                  </IonText>
                </div>
              </div>

              <IonText className="shopping-heading-text-area">
                <Translate message="shopping.categories" />
              </IonText>

              <div className="scroll-items-wrapper">
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('mobile', 1)}
                    >
                      <SmartphoneIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.mobileIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('laptop', 0)}
                    >
                      <LaptopIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.laptopIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('fashion', 3)}
                    >
                      <FashionIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.fashionIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('television', 4)}
                    >
                      <TelevisionIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.televisionText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('store', 5)}
                    >
                      <StoreIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.storeText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('sparePart', 6)}
                    >
                      <SparepartIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.sparePartText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('motorbike', 7)}
                    >
                      <MotorBikeIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.motorbike" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('grocery', 8)}
                    >
                      <GroceryIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.grocery" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('wallet', 9)}
                    >
                      <WalletIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.walletText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('watch', 10)}
                    >
                      <WatchIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.watchText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent
                      onClick={() => handleSliderIcons('shoes', 11)}
                    >
                      <SneakersIcon width="24" height="24" />

                      <IonText>
                        <Translate message="home.shoesText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
              </div>
              <div className="search-area-wrapper">
                <IonInput placeholder="Search">
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={search}
                    slot="end"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      position: 'absolute',
                      right: '10px',
                    }}
                  >
                    <SearchIcon width="16" height="16" />
                  </button>
                </IonInput>
              </div>

              {productList.length > 0 ? (
                <div className="mobile-items-wrapper">
                  <IonGrid>
                    <IonRow>
                      {productList.map((item: any) => {
                        return (
                          <IonCol key={item.product_id} size="6">
                            <IonCard
                              onClick={() =>
                                showItemDetails(
                                  item.product_id,
                                  item.config_product_id,
                                  item.price,
                                  qty,
                                  productName
                                )
                              }
                            >
                              <IonCardHeader>
                                {favSelected && (
                                  <button onClick={toggleFav}>
                                    <FavButtonEnabled width="16" height="16" />
                                  </button>
                                )}
                                {!favSelected && (
                                  <button onClick={toggleFav}>
                                    <FavButtonDisabled width="16" height="16" />
                                  </button>
                                )}

                                <div className="image-wrapper">
                                  <IonImg src={imagePath} />
                                </div>
                              </IonCardHeader>

                              <IonCardContent>
                                <div className="device-name-label">
                                  <IonText>{categoryName}</IonText>
                                </div>

                                <div className="device-price-label">
                                  <IonText>{item.price}</IonText>
                                </div>
                              </IonCardContent>
                            </IonCard>
                          </IonCol>
                        );
                      })}
                    </IonRow>
                  </IonGrid>
                </div>
              ) : (
                <div className="mobile-items-wrapper">
                  <IonGrid>
                    <IonRow>
                      <IonCol size="6">
                        <IonCard
                          onClick={() =>
                            showItemDetails(
                              productID,
                              0,
                              price,
                              qty,
                              productName
                            )
                          }
                        >
                          <IonCardHeader>
                            {favSelected && (
                              <button onClick={toggleFav}>
                                <FavButtonEnabled width="16" height="16" />
                              </button>
                            )}
                            {!favSelected && (
                              <button onClick={toggleFav}>
                                <FavButtonDisabled width="16" height="16" />
                              </button>
                            )}

                            <div className="image-wrapper">
                              <IonImg src={imagePath} />
                            </div>
                          </IonCardHeader>

                          <IonCardContent>
                            <div className="device-name-label">
                              <IonText>{categoryName}</IonText>
                            </div>

                            <div className="device-price-label">
                              <IonText>{price}</IonText>
                            </div>
                          </IonCardContent>
                        </IonCard>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              )}
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </React.Fragment>
  );
};

export { ShoppingPage };
