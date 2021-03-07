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
  FavButtonDisabled,
  FavButtonEnabled,
  SearchIcon,
} from '../../assets/Icons';

const ShoppingPage: React.FC = () => {
  const history = useHistory();
  const [shoppingLimitBalance, setshoppingLimitBalance] = useState('');
  const [favSelected, setFavSelected] = useState(false);
  useEffect(() => {
    setshoppingLimitBalance('12844');
  }, []);
  function navigateToCart() {}
  function search() {}
  function toggleFav() {
    const selectedStatus = !favSelected;
    setFavSelected(selectedStatus);
  }
  function showItemDetails() {
    history.replace('/tabs/shopping/itemdetails');
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
                    style={{ color: '#000000' }}
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
                  <IonText
                    className="balance-wrapper-text"
                    style={{ color: '#ffffff' }}
                  >
                    {shoppingLimitBalance}
                  </IonText>
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
