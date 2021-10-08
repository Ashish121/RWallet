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
  const [imageURL, setImageURL] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [productList,setProductList]=useState([]);

  let id = 0;
  let category = 'mobile';

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs');
  }, []);

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
    let finalArray: any = [];

    res.data.data.forEach((element: any, index: any) => {
      if (category === element.category_name) {
        id = index;
        const productList = res.data.data[id];
        setImageURL(productList.image_path);
        setCategoryName(element.category_name);
        let tempObj = {
          value: element,
        };
        finalArray.push(tempObj);
      }
    });

    setProductList(finalArray);
  }

  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }

  const handleSearchItem = debounce((e: any) => {
    setShowSearchData(true);
    setSearchString(e.detail.value);
    const searchItem = e.detail.value;
    const val = searchItem.trim();

    if ((val.length > 0 && val !== null) || val.length === 0) {
      dispatch(requestForSearchItem({ searchString: val }, ShowSearchItemList));
    }
  }, 500);

  function showItemDetails(
    productId: any,
    imageUrl: any,
    price: any,
    quantity: any,
    productName: any,
    configProduct: any,
    description:any,
    ratings:any,
  ) {

    if(configProduct==undefined){
      configProduct=0;
    }

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
                        {productList.map((element:any)=>{
                          return(
                            <IonCol size="6" key={element.product_id}>
                              <IonCard
                                onClick={() =>
                                  showItemDetails(
                                    element.value.product_id,
                                    element.value.image_path,
                                    element.value.price,
                                    element.value.quantity,
                                    element.value.product_name,
                                    element.value.config_product,
                                    element.value.description,
                                    element.value.review_rating,
                                  )
                                }
                              >
                                <IonCardHeader>
                                  <div className="image-wrapper">
                                    <IonImg src={element.value.image_path} />
                                  </div>
                                </IonCardHeader>

                                <IonCardContent>
                                  <div className="device-name-label-for-product ">
                                    <IonText>{element.value.category_name}</IonText>
                                  </div>
                                  <div className="device-name-label-for-product " >
                                    <IonText style={{fontSize:'13px'}}>{element.value.product_name}</IonText>
                                  </div>
                                  <div className="device-price-label">
                                    <IonText>{element.value.price}</IonText>
                                  </div>
                                </IonCardContent>
                              </IonCard>
                            </IonCol>
                          ); })

                        }
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
                                    listVal.config_product,
                                    listVal.description,
                                    listVal.review_rating,
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
