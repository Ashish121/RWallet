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

const ShoppingSection: React.FC<shoppingProps> = ({ expanded }) => {
  const history = useHistory();
  const navigateToShopping = (name: any) => {
    history.replace({
      pathname: '/tabs/shopping',
      state: {
        categoryName: name,
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
            <button
              className="iconButtons"
              onClick={() => navigateToShopping('mobile')}
            >
              <SmartphoneIcon width="30" height="30" />
              <IonText>
                <Translate message="home.mobileIconText" />
              </IonText>
            </button>
          </div>
          <div>
            <button
              className="iconButtons"
              onClick={() => navigateToShopping('laptop')}
            >
              <LaptopIcon width="30" height="30" />
              <IonText>
                <Translate message="home.laptopIconText" />
              </IonText>
            </button>
          </div>
          <div>
            <button
              className="iconButtons"
              onClick={() => navigateToShopping('fashion')}
            >
              <FashionIcon width="30" height="30" />
              <IonText>
                <Translate message="home.fashionIconText" />
              </IonText>
            </button>
          </div>
          <div>
            <button
              className="iconButtons"
              onClick={() => navigateToShopping('home-appliances')}
            >
              <TelevisionIcon width="30" height="30" />
              <IonText>
                <Translate message="home.televisionText" />
              </IonText>
            </button>
          </div>

          {expanded && (
            <>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('electronics')}
                >
                  <StoreIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.storeText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('spares')}
                >
                  <SparepartIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.sparePartText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('automobiles')}
                >
                  <MotorBikeIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.motorbike" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('grocery')}
                >
                  <GroceryIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.grocery" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('wallet')}
                >
                  <WalletIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.walletText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('watches')}
                >
                  <WatchIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.watchText" />
                  </IonText>
                </button>
              </div>
              <div>
                <button
                  className="iconButtons"
                  onClick={() => navigateToShopping('shoes')}
                >
                  <SneakersIcon width="30" height="30" />
                  <IonText>
                    <Translate message="home.shoesText" />
                  </IonText>
                </button>
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
