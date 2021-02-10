import React, { useEffect, useState } from 'react';
import './InternetPayment.scss';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { CustomAccordion, HeaderComponent  } from '../../../components';

const InternetPayment: React.FC = () => {
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
        title: 'World link',
        showDetails: false,
      },
      {
        id: 2,
        title: 'Via net',
        showDetails: false,
      },

      {
        id: 3,
        title: 'Subisu Internet',
        showDetails: false,
      },
      
      {
        id: 4,
        title: 'Classic Tech',
        showDetails: false,
      },
      
      {
        id: 5,
        title: 'Nepal Telecom FTTH',
        showDetails: false,
      },
      {
        id: 5,
        title: 'Nepal Telecom WIMAX',
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
              <IonText className="InternetPayment-text-area">
                <Translate message="UtlityInternetPayment" />
              </IonText>
              <div className="Internetpayment-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export {InternetPayment };
