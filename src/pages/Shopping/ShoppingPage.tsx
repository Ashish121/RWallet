import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
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
import {
  loadProductDetailsList,
  loadCartDetails,
  requestForSearchItem,
} from '../../redux/actions/';

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const user_id = localStorage.getItem('userId');
  const [shoppingLimitBalance, setshoppingLimitBalance] = useState('');
  const [count, setCount] = useState(Number);
  const [searchString, setSearchString] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [showSearchData, setShowSearchData] = useState(false);

  const [productId, setProductId] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [productName, setProductName] = useState('');
  const [configProduct, setConfigProduct] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [description, setDiscription] = useState('');
  const [ratings, setRatings] = useState(0);

  let id = 0;
  let category = 'mobile';

  useEffect(() => {
    const param: any = location.state;
    id = 1;
    category = param.categoryName;
    dispatch(loadProductDetailsList({ user_id }, ShowProductList));
  }, []);

  useEffect(() => {
    dispatch(loadCartDetails({ user_id }, ShowCartBadgeValue));
  }, []);

  function ShowCartBadgeValue(res: any) {
    const count = res.data.data.count;
    setCount(count);
  }

  function ShowSearchItemList(res: any) {
    const searchList = res.data.data;
    setSearchList(searchList);
  }

  function ShowProductList(res: any) {
    const limit = res.data.shopping_limit;
    setshoppingLimitBalance(limit);
    res.data.data.forEach((element: any, index: any) => {
      if (category === element.category_name) {
        id = index;
        const productList = res.data.data[id];
        setProductId(productList.product_id);
        setImageURL(productList.image_path);
        setPrice(productList.price);
        setQty(productList.quantity);
        setProductName(productList.product_name);
        setConfigProduct(productList.config_product);
        setCategoryName(element.category_name);
        setDiscription(productList.description);
        setRatings(productList.review_rating);
      }
    });
  }

  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }

  const handleSearchItem = debounce((e: any) => {
    setShowSearchData(true);
    setSearchString(e.detail.value);
    const searchItem = e.detail.value;
    const val = searchItem.trim();

    if (val.length > 0 && val !== null) {
      dispatch(requestForSearchItem({ searchString: val }, ShowSearchItemList));
    }
  }, 500);

  function showItemDetails(
    productId: any,
    imageUrl: any,
    price: any,
    quantity: any,
    productName: any,
    configProduct: any
  ) {
    history.replace('/tabs/shopping/itemdetails', {
      productId,
      imageUrl,
      price,
      quantity,
      productName,
      configProduct,
      description,
      categoryName,
      ratings,
    });
  }
  function goBack() {
    history.replace('/tabs');
  }

  function handleSliderIcons(val: any) {
    setShowSearchData(false);
    category = val;
    dispatch(loadProductDetailsList({ user_id }, ShowProductList));
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
                <IonInput
                  style={{ marginLeft: '5px' }}
                  placeholder="Search"
                  value={searchString}
                  clearInput={true}
                  onIonChange={(e) => handleSearchItem(e)}
                >
                  <button
                    type="button"
                    className="eye-btn"
                    slot="end"
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      position: 'absolute',
                      right: '10px',
                    }}
                  >
                    {searchString.length > 0 ? (
                      ''
                    ) : (
                      <SearchIcon width="16" height="16" />
                    )}
                  </button>
                </IonInput>
              </div>
              {!showSearchData && imageURL.length > 0 ? (
                <div>
                  <div className="mobile-items-wrapper">
                    <IonGrid>
                      <IonRow>
                        <IonCol size="6">
                          <IonCard
                            onClick={() =>
                              showItemDetails(
                                productId,
                                imageURL,
                                price,
                                qty,
                                productName,
                                configProduct
                              )
                            }
                          >
                            <IonCardHeader>
                              <div className="image-wrapper">
                                <IonImg src={imageURL} />
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
                </div>
              ) : (
                <div>
                  <div className="mobile-items-wrapper">
                    <IonGrid>
                      <IonRow>
                        {searchList.map((listVal: any) => {
                          return (
                            <IonCol key={listVal.product_id} size="6">
                              <IonCard
                                onClick={() =>
                                  showItemDetails(
                                    listVal.product_id,
                                    listVal.image_path,
                                    listVal.price,
                                    listVal.quantity,
                                    listVal.product_name,
                                    listVal.config_product
                                  )
                                }
                              >
                                <IonCardHeader>
                                  <div className="image-wrapper">
                                    <IonImg src={listVal.image_path} />
                                  </div>
                                </IonCardHeader>

                                <IonCardContent>
                                  <div className="device-name-label">
                                    <IonText>{listVal.category_name}</IonText>
                                  </div>

                                  <div className="device-price-label">
                                    <IonText>{listVal.price}</IonText>
                                  </div>
                                </IonCardContent>
                              </IonCard>
                            </IonCol>
                          );
                        })}
                      </IonRow>
                    </IonGrid>
                  </div>
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
