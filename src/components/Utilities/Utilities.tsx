import React from 'react';
import { IonText } from '@ionic/react';
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

          <div className="utility-section-wrapper">
            <div>
              <button className="iconButtons">
                <AirPlaneIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.flightText" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <BusIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.busText" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <PowerbankIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.topupText" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <LightBulbIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.electricityAndWaterText" />
              </IonText>
            </div>

            <div>
              <button className="iconButtons">
                <TelevisionIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.televisionPayment" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <WifiIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.wifiPayment" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <CreditCardIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.creditcard" />
              </IonText>
            </div>

            <div>
              <button className="iconButtons">
                <AntivirusIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.antivirus" />
              </IonText>
            </div>
            <div>
              <button className="iconButtons">
                <InsuranceIcon width="30" height="30" />
              </button>
              <IonText>
                <Translate message="home.insurance" />
              </IonText>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UtilitiesSection;
