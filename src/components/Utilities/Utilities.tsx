import React from 'react';
import { IonText, IonRow, IonCol } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import {
  TelevisionIcon,
  AirPlaneIcon,
  BusIcon,
  PowerbankIcon,
  LightBulbIcon,
  WifiIcon,
  CreditCardIcon,
  InsuranceIcon,
  AntivirusIcon,
} from '../../assets/Icons';
import './Utilities.scss';

interface utilitiesProps {
  expanded?: boolean;
}

/**
 *
 * <InputText labelText="Type your mail" onChange="callbackFn" ...otherProps/>
 */

const UtilitiesSection: React.FC<utilitiesProps> = ({ expanded }) => {
  
  return (
    <>
      {expanded && (
        <div className="utility-section">
          <div style={{ textAlign: 'center' }}>
            <IonText text-center>
              <Translate message="home.utility" />
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
                    <AirPlaneIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.flightText" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <BusIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.busText" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <PowerbankIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.topupText" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <LightBulbIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.electricityAndWaterText" />
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
                    <TelevisionIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.televisionPayment" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <WifiIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.wifiPayment" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <CreditCardIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.creditcard" />
                    </IonText>
                  </button>
                </div>
                <div>
                  <button className="iconButtons">
                    <InsuranceIcon width="20" height="20" />
                    <IonText text-wrap>
                      <Translate message="home.insurance" />
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
                    <AntivirusIcon width="20" height="20" />
                    <IonText>
                      <Translate message="home.antivirus" />
                    </IonText>
                  </button>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </div>
      )}
    </>
  );
};

export default UtilitiesSection;
