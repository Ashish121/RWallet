import React from 'react';
import { IonText } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  function navigateToUtility(type: string) {
    switch (type) {
    case 'flight':
      history.replace({
        pathname: '/tabs/flightOneWay',
        state: {
          utilityType: 'flight',
        },
      });
      break;

    case 'bus':
      history.replace({
        pathname: '/tabs/busOneWay',
        state: {
          utilityType: 'bus',
        },
      });
      break;

    case 'topup':
      history.replace({
        pathname: '/tabs/topUpRecharge',
        state: {
          utilityType: 'topup',
        },
      });
      break;

    case 'electricityAndWater':
      history.replace({
        pathname: '/tabs/electricityWater',
        state: {
          utilityType: 'electricityAndWater',
        },
      });
      break;

    case 'televisionPayment':
      history.replace({
        pathname: '/tabs/tvPayment',
        state: {
          utilityType: 'televisionPayment',
        },
      });
      break;

    case 'wifiPayment':
      history.replace({
        pathname: '/tabs/internetPayment',
        state: {
          utilityType: 'wifiPayment',
        },
      });
      break;

    case 'creditcard':
      history.replace({
        pathname: '/tabs/cardPayment',
        state: {
          utilityType: 'creditcard',
        },
      });
      break;

    case 'antivirus':
      history.replace({
        pathname: '/tabs/antivirus',
        state: {
          utilityType: 'antivirus',
        },
      });
      break;

    case 'insurance':
      history.replace({
        pathname: '/tabs/insuranceFinancePage',
        state: {
          utilityType: 'insurance',
        },
      });
      break;

    default:
      break;
    }
  }

  return (
    <>
      {expanded && (
        <div className="utility-section">
          <div style={{ textAlign: 'center' }}>
            <IonText text-center style={{ fontWeight: '600' }}>
              <Translate message="home.utility" />
            </IonText>
          </div>

          <div className="utility-section-wrapper">
            <div>
              <button
                className="iconButtons"
                value="flight"
                onClick={() => navigateToUtility('flight')}
              >
                <AirPlaneIcon width="30" height="30" />
                <IonText>
                  <Translate message="home.flightText" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('bus')}
                value="bus"
              >
                <BusIcon width="30" height="30" onClick={navigateToUtility} />
                <IonText>
                  <Translate message="home.busText" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('topup')}
                value="topup"
              >
                <PowerbankIcon width="50" height="30" />

                <IonText>
                  <Translate message="home.topupText" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('electricityAndWater')}
                value="electricityAndWater"
              >
                <LightBulbIcon width="30" height="30" />

                <IonText>
                  <Translate message="home.electricityAndWaterText" />
                </IonText>
              </button>
            </div>

            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('televisionPayment')}
                value="televisionPayment"
              >
                <TelevisionIcon width="50" height="30" />

                <IonText>
                  <Translate message="home.televisionPayment" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('wifiPayment')}
                value="wifiPayment"
              >
                <WifiIcon width="30" height="30" />

                <IonText>
                  <Translate message="home.wifiPayment" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('creditcard')}
                value="creditcard"
              >
                <CreditCardIcon width="30" height="30" />
                <IonText>
                  <Translate message="home.creditcard" />
                </IonText>
              </button>
            </div>

            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('antivirus')}
                value="antivirus"
              >
                <AntivirusIcon width="30" height="30" />

                <IonText>
                  <Translate message="home.antivirus" />
                </IonText>
              </button>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={() => navigateToUtility('insurance')}
                value="insurance"
              >
                <InsuranceIcon width="30" height="30" />

                <IonText>
                  <Translate message="home.insurance" />
                </IonText>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UtilitiesSection;
