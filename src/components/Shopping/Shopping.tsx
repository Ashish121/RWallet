import React from 'react';
import { IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const navigateToShopping = () => {
    history.replace({
      pathname: '/tabs/shopping',
      state: {
        shoppingType: 'mobile',
      },
    });
  };
  return (
    <>
      <div className="shopping-section">
        <div style={{ textAlign: 'center' }}>
          <IonText text-center style={{ fontWeight: '600' }}>
            <Translate message="home.shopping" />
          </IonText>
        </div>

        <div className="shopping-list-container">
          <div>
            <button className="iconButtons" onClick={navigateToShopping}>
              <SmartphoneIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.mobileIconText" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <LaptopIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.laptopIconText" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <FashionIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.fashionIconText" />
            </IonText>
          </div>
          <div>
            <button className="iconButtons">
              <TelevisionIcon width="30" height="30" />
            </button>
            <IonText>
              <Translate message="home.televisionText" />
            </IonText>
          </div>

          {expanded && (
            <>
              <div>
                <button className="iconButtons">
                  <StoreIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.storeText" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <SparepartIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.sparePartText" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <MotorBikeIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.motorbike" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <GroceryIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.grocery" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <WalletIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.walletText" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <WatchIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.watchText" />
                </IonText>
              </div>
              <div>
                <button className="iconButtons">
                  <SneakersIcon width="30" height="30" />
                </button>
                <IonText>
                  <Translate message="home.shoesText" />
                </IonText>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
    </>
  );
};

export default ShoppingSection;
