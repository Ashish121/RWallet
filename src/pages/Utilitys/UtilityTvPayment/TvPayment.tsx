import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TvPayment.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  CustomAccordionForRecharge,
  HeaderComponent,
} from '../../../components';

const TvPayment: React.FC = () => {
  const history = useHistory();
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
        title: 'Clear TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },
      {
        id: 2,
        title: 'Dish home',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 3,
        title: 'Max TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 4,
        title: 'Metro TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 5,
        title: 'Prabhu TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },
    ];
    setAccordionDetails(data);
  }, []);

  function goBack() {
    history.replace('/tabs/home');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="TvPayment-text-area">
                <Translate message="UtilityTvPayment" />
              </IonText>
              <div className="TvPayment-wrapper">
                <CustomAccordionForRecharge accordionData={accordionDetails} />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TvPayment };
