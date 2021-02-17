import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonApp,
  IonCard,
  IonCardContent,
  IonText,
  IonList,
  IonItem,
  IonLabel,
  IonSelectOption,
  IonSelect,
  IonButton,
} from '@ionic/react';

import { HeaderComponent, SlidesComponent } from '../../components';
import {
  FavButtonDisabled,
  FavButtonEnabled,
  CloseBarIcon,
} from '../../assets/Icons';

import './ItemDetailsPage.scss';
import { Translate } from '../../i18n/formatMessages';

const ItemDetailsPage: React.FC = () => {
  const [expandOptions, setExpandOptions] = useState(false);
  const [favSelected, setFavSelected] = useState(false);
  const [color, setDeviceColor] = useState<string>();

  const toggleExpandOptions = () => {
    setExpandOptions(!expandOptions);
  };

  function toggleFav() {
    const selectedStatus = !favSelected;
    setFavSelected(selectedStatus);
  }

  function setColor(value: any) {
    setDeviceColor(value);
  }

  return (
    <IonApp className="item-details-wrapper">
      <IonPage>
        <HeaderComponent
          headerLable={'common.header'}
          showMenu={false}
          showNotification={false}
          showCart={true}
        />
        <IonContent>
          <SlidesComponent />

          <div
            className={
              expandOptions
                ? 'services-options-wrapper fullHeight'
                : 'services-options-wrapper'
            }
          >
            <IonCard
              className="service-card-wrapper"
              style={
                expandOptions ? { overflow: 'scroll' } : { overflow: 'hidden' }
              }
            >
              <IonCardContent
                style={{ paddingBottom: '0px', paddingTop: '0px' }}
              >
                <div className="close-bar-icon">
                  <button onClick={toggleExpandOptions}>
                    <CloseBarIcon />
                  </button>
                </div>
                <div className="details-header-wrapper">
                  <IonText className="item-name-label">Redmi Note 9</IonText>
                  {favSelected && (
                    <button
                      onClick={toggleFav}
                      style={{
                        backgroundColor: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        float: 'right',
                      }}
                    >
                      <FavButtonEnabled width="18" height="18" />
                    </button>
                  )}
                  {!favSelected && (
                    <button
                      style={{
                        backgroundColor: '#ffffff',
                        border: 'none',
                        outline: 'none',
                        float: 'right',
                      }}
                      onClick={toggleFav}
                    >
                      <FavButtonDisabled width="18" height="18" />
                    </button>
                  )}
                </div>
                <div className="storage-details-wrapper">
                  <button className="btn-64gb">4GB RAM + 64GB Storage</button>
                  <button className="btn-128gb">4GB RAM + 128GB Storage</button>
                </div>
                <div className="item-color-wrapper">
                  <IonList>
                    <IonItem>
                      <IonLabel style={{ color: '#000000' }}>Color</IonLabel>
                      <IonSelect
                        value={color}
                        onIonChange={(e) => setColor(e.detail.value)}
                      >
                        <IonSelectOption value="female">
                          Product red
                        </IonSelectOption>
                        <IonSelectOption value="male">
                          Pacific blue
                        </IonSelectOption>
                      </IonSelect>
                    </IonItem>
                  </IonList>
                </div>
                <div className="price-details-wrapper">
                  <IonText
                    style={{
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#000000',
                    }}
                  >
                    <Translate message="itemDetails.dealPrice" />
                  </IonText>

                  <IonText
                    style={{
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#000000',
                    }}
                  >
                    Rs 2,400
                  </IonText>
                </div>
                {expandOptions && (
                  <div className="features-wapper">
                    <IonText className="features-label">
                      <Translate message="itemDetails.feature" />
                    </IonText>
                    <div className="features-text-wrapper">
                      <IonText className="features-text">
                        Country Of Origin - India, China 48MP rear camera with
                        ultra-wide, super macro, portrait, night mode, 960fps
                        slowmotion, AI scene recognition, pro color, HDR, pro
                        mode | 16MP facing camera. 16.9418 centimeters
                        (6.67-inch) FHD+ full screen dot display LCD multi-touch
                        capacitive touchscreen with 2400 x 1080 pixels
                        resolution, 400 ppi pixel density and 20:9 aspect ratio
                        | 2.5D curved glass The all-new Interstellar Black
                        colour combines different hues of grey and blue together
                        to deliver a shade that mesmerizes you.
                      </IonText>
                    </div>
                  </div>
                )}
                <div className="add-to-cart-button-wrapper">
                  <IonButton className="add-cart-button" expand="block">
                    <Translate message="itemDetails.addToCart" />
                  </IonButton>
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export { ItemDetailsPage };
