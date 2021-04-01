import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  const [shoppingLimitBalance, setshoppingLimitBalance] = useState('');
  const [favSelected, setFavSelected] = useState(false);
  useEffect(() => {
    setshoppingLimitBalance('128445.00');
  }, []);
  function navigateToCart() {
    history.replace('/tabs/shopping/cart');
  }
  function search() {}
  function toggleFav() {
    const selectedStatus = !favSelected;
    setFavSelected(selectedStatus);
  }
  function showItemDetails() {
    history.replace('/tabs/shopping/itemdetails');
  }
  function goBack() {
    history.replace('/tabs');
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
                    <IonCardContent>
                      <SmartphoneIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.mobileIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <LaptopIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.laptopIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <FashionIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.fashionIconText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <TelevisionIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.televisionText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <StoreIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.storeText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <SparepartIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.sparePartText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <MotorBikeIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.motorbike" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <GroceryIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.grocery" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <WalletIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.walletText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <WatchIcon width="15" height="15" />
                      <IonText>
                        <Translate message="home.watchText" />
                      </IonText>
                    </IonCardContent>
                  </IonCard>
                </div>
                <div>
                  <IonCard>
                    <IonCardContent>
                      <SneakersIcon width="15" height="15" />
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
              <div className="mobile-items-wrapper">
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonCard onClick={showItemDetails}>
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

                          <div className="image-wrapper"></div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                    <IonCol>
                      <IonCard>
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
                            <IonImg
                              src={require('../../assets/Icons/phone2.png')}
                            />
                          </div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {' '}
                      <IonCard>
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
                            <IonImg
                              src={require('../../assets/Icons/phone3.png')}
                            />
                          </div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                    <IonCol>
                      {' '}
                      <IonCard>
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
                            <IonImg
                              src={require('../../assets/Icons/phone4.png')}
                            />
                          </div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {' '}
                      <IonCard>
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
                            <IonImg
                              src={require('../../assets/Icons/phone1.png')}
                            />
                          </div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                    <IonCol>
                      {' '}
                      <IonCard>
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
                            <IonImg
                              src={require('../../assets/Icons/phone3.png')}
                            />
                          </div>
                        </IonCardHeader>

                        <IonCardContent>
                          <div className="device-name-label">
                            <IonText>Redmi Note 9</IonText>
                          </div>
                          <div className="device-price-label">
                            <IonText>Rs 8599</IonText>
                          </div>
                        </IonCardContent>
                      </IonCard>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </React.Fragment>
  );
};

export { ShoppingPage };
