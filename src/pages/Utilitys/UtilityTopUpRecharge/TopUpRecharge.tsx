import React, { useEffect, useState } from 'react';

import './TopUpRecharge.scss';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { CustomAccordion, HeaderComponent } from '../../../components';

const TopUpRecharge: React.FC = () => {
  const [accordionDetails, setAccordionDetails] = useState([{}]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Hide splash now');
      return () => {
        clearTimeout(timeout);
      };
    }, 7000);
  }, []);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: 'NCell Topup',
        showDetails: false,
      },
      {
        id: 2,
        title: 'NT landline Topup',
        showDetails: false,
      },

      {
        id: 3,
        title: 'NT FTTH',
        showDetails: false,
      },

      {
        id: 4,
        title: 'NT WIMAX',
        showDetails: false,
      },

      {
        id: 5,
        title: 'NT PostPaid Topup',
        showDetails: false,
      },

      {
        id: 6,
        title: 'NT Prepaid Topup',
        showDetails: false,
      },

      {
        id: 7,
        title: 'NT CDMA Postpaid Topup',
        showDetails: false,
      },

      {
        id: 8,
        title: 'NT CDMA Prepaid Topup',
        showDetails: false,
      },

      {
        id: 9,
        title: 'Smartcell Topup',
        showDetails: false,
      },

      {
        id: 10,
        title: 'NT ADSL Topup-unlimited',
        showDetails: false,
      },

      {
        id: 11,
        title: 'NT ADSL Topup-volume based',
        showDetails: false,
      },

      {
        id: 12,
        title: 'NT recharge card',
        showDetails: false,
      },


    ];
    setAccordionDetails(data);
  }, []);

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="TopUpRecharge-text-area">
                <Translate message="UtilityTopUpRecharge" />
              </IonText>
              <div className="TopUpRecharge-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TopUpRecharge };
