import React from 'react';
import { IonText, IonRow, IonCol } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import './Shopping.scss';
import {
  StoreIcon,
  SparepartIcon,
  MotorBikeIcon,
  GroceryIcon,
  WalletIcon,
  WatchIcon,
  SneakersIcon,
  FashionIcon,
  LaptopIcon,
  SmartphoneIcon,
  TelevisionIcon,
} from '../../assets/Icons';

interface shoppingProps {
  expanded?: boolean;
}

/**
 *
 * <InputText labelText="Type your mail" onChange="callbackFn" ...otherProps/>
 */

const ShoppingSection: React.FC<shoppingProps> = ({ expanded }) => {
  return (
    <>
      <div className="shopping-section">
        <div style={{ textAlign: 'center' }}>
          <IonText text-center>
            <Translate message="home.shopping" />
          </IonText>
        </div>
        <IonRow>
          <IonCol>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '10px',
              }}
            >
              <div>
                <button className="iconButtons">
                  <SmartphoneIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.mobileIconText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <LaptopIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.laptopIconText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <FashionIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.fashionIconText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button className="iconButtons">
                  <TelevisionIcon width="20" height="20" />
                  <IonText>
                    <Translate message="home.televisionText" />
                  </IonText>
                </button>
              </div>
            </div>
          </IonCol>
        </IonRow>
        {expanded && (
          <>
            <IonRow>
              <IonCol>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <div>
                    <button className="iconButtons">
                      <StoreIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.storeText" />
                      </IonText>
                    </button>
                  </div>
                  <div>
                    <button className="iconButtons">
                      <SparepartIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.sparePartText" />
                      </IonText>
                    </button>
                  </div>
                  <div>
                    <button className="iconButtons">
                      <MotorBikeIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.motorbike" />
                      </IonText>
                    </button>
                  </div>
                  <div>
                    <button className="iconButtons">
                      <GroceryIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.grocery" />
                      </IonText>
                    </button>
                  </div>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <div>
                    <button className="iconButtons">
                      <WalletIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.walletText" />
                      </IonText>
                    </button>
                  </div>
                </div>
              </IonCol>
              <IonCol>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <div>
                    <button
                      className="iconButtons"
                      style={{ marginLeft: '-15px' }}
                    >
                      <WatchIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.watchText" />
                      </IonText>
                    </button>
                  </div>
                </div>
              </IonCol>
              <IonCol>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '20px',
                  }}
                >
                  <div>
                    <button
                      className="iconButtons"
                      style={{ position: 'relative', marginLeft: '-27px' }}
                    >
                      <SneakersIcon width="20" height="20" />
                      <IonText>
                        <Translate message="home.shoesText" />
                      </IonText>
                    </button>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingSection;
