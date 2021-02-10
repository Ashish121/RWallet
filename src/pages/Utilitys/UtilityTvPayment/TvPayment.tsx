import React, { useEffect, useState } from 'react';
import './TvPayment.scss';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { CustomAccordion, HeaderComponent  } from '../../../components';

const TvPayment: React.FC = () => {
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
      },
      {
        id: 2,
        title: 'Dish home',
        showDetails: false,
      },

      {
        id: 3,
        title: 'Max TV',
        showDetails: false,
      },
      
      {
        id: 4,
        title: 'Metro TV',
        showDetails: false,
      },
      
      {
        id: 5,
        title: 'Prabhu TV',
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
              <IonText className="TvPayment-text-area">
                <Translate message="UtilityTvPayment" />
              </IonText>
              <div className="TvPayment-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export {TvPayment };
