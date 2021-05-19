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
import { loadProductDetailsList, loadCartDetails } from '../../redux/actions/';

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const user_id = localStorage.getItem('userId');
  const [shoppingLimitBalance, setshoppingLimitBalance] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const [productList, setProductList] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const [productID, setProductID] = useState(Number);
  const [qty, setQty] = useState(Number);
  const [productName, setProductName] = useState('');
  const [count, setCount] = useState(Number);
  const [description, setDescription] = useState('');

  let id = 0;
  let category = 'mobile';

  const [price, setPrice] = useState(Number);

  useEffect(() => {
    const param: any = location.state;
    id = 1;
    category = param.categoryName;

    dispatch(loadProductDetailsList(ShowProductList));
  }, []);

  useEffect(() => {
    dispatch(loadCartDetails({ user_id }, ShowCartBadgeValue));
  }, []);

  useEffect(() => {
    setshoppingLimitBalance('128445.00');
  }, []);
  function ShowCartBadgeValue(res: any) {
    const count = res.data.data.count;
    setCount(count);
  }

  function ShowProductList(res: any) {
    res.data.message.forEach((element: any, index: any) => {
      if (category === element.category_name) {
        id = index;

        const productList = res.data.message[id].config_product;
        setProductList(productList);

        const singleProduct = res.data.message[id];

        setImagePath(singleProduct.image_path);
        setCategoryName(singleProduct.category_name);
        setPrice(singleProduct.price);
        setProductID(singleProduct.product_id);
        setQty(singleProduct.quantity);
        setProductName(singleProduct.product_name);
        setDescription(singleProduct.description);
      }
    });
  }

  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }
  function search() {}

  function showItemDetails(
    productId: any,
    configId: any,
    price: any,
    quantity: any,
    productName: any,
    ram: any,
    memory: any
  ) {
    history.replace('/tabs/shopping/itemdetails', {
      productId,
      configId,
      price,
      quantity,
      productName,
      ram,
      memory,
      imagePath,
      count,
      description,
      category,
    });
  }
  function goBack() {
    history.replace('/tabs');
  }

  function handleSliderIcons(val: any) {
    //id = 1;
    category = val;
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
            value={count}
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
                    <IonCardContent onClick={() => handleSliderIcons('mobile')}>
                      <SmartphoneIcon width="24" height="24" />
                      <IonText>
                        <Translate message="home.mobileIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent onClick={() => handleSliderIcons('laptop')}>
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
                      onClick={() => handleSliderIcons('fashion')}
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
                      onClick={() => handleSliderIcons('home-appliances')}
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
                      onClick={() => handleSliderIcons('electronics')}
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
                    <IonCardContent onClick={() => handleSliderIcons('spares')}>
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
                      onClick={() => handleSliderIcons('automobiles')}
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
                      onClick={() => handleSliderIcons('grocery')}
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
                    <IonCardContent onClick={() => handleSliderIcons('wallet')}>
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
                      onClick={() => handleSliderIcons('watches')}
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
                    <IonCardContent onClick={() => handleSliderIcons('shoes')}>
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
                                  productName,
                                  item.ram,
                                  item.memory
                                )
                              }
                            >
                              <IonCardHeader>
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
                              productName,
                              null,
                              null
                            )
                          }
                        >
                          <IonCardHeader>
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
