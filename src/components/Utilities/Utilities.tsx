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
  function navigateToUtility(event: any) {
    console.log('Tab name', event.target.value);

    let tabName = event.target.value;
    // let tabName = "bus";
    switch (tabName) {
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
      console.log('inside bus tabe', event.target.name);
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

      // history.replace({
      //   pathname: "/tabs/busOneWay",
      //   state: {
      //     utilityType: "wifiPayment",
      //   },
      // });

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
                onClick={navigateToUtility}
                value="flight"
              />
              <AirPlaneIcon width="30" height="30" />

              <IonText>
                <Translate message="home.flightText" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="bus"
              >
                <BusIcon width="30" height="30" onClick={navigateToUtility} />
              </button>
              <IonText>
                <Translate message="home.busText" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="topup"
              />
              <PowerbankIcon width="50" height="30" />

              <IonText>
                <Translate message="home.topupText" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="electricityAndWaterText"
              />
              <LightBulbIcon width="30" height="30" />

              <IonText>
                <Translate message="home.electricityAndWaterText" />
              </IonText>
            </div>

            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="televisionPayment"
              />
              <TelevisionIcon width="50" height="30" />

              <IonText>
                <Translate message="home.televisionPayment" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="wifiPayment"
              />
              <WifiIcon width="30" height="30" />

              <IonText>
                <Translate message="home.wifiPayment" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="creditcard"
              />{' '}
              <CreditCardIcon width="30" height="30" />
              <IonText>
                <Translate message="home.creditcard" />
              </IonText>
            </div>

            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="antivirus"
              />
              <AntivirusIcon width="30" height="30" />

              <IonText>
                <Translate message="home.antivirus" />
              </IonText>
            </div>
            <div>
              <button
                className="iconButtons"
                onClick={navigateToUtility}
                value="insurance"
              />
              <InsuranceIcon width="30" height="30" />

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
