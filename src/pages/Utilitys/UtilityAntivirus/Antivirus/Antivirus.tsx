import React, { useEffect, useState } from 'react';
import './Antivirus.scss';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,
} from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { CustomAccordion, HeaderComponent,ButtonConmponent  } from '../../../../components';

const Antivirus: React.FC = () => {
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
        title: 'Kaspersky Antivirus',
        showDetails: false,
      },
      {
        id: 2,
        title: 'Eset Antivirus',
        showDetails: false,
      },

      {
        id: 3,
        title: 'eSCAN Antivirus',
        showDetails: false,
      },
      
      {
        id: 4,
        title: 'K7 Antivirus',
        showDetails: false,
      },
      
      {
        id: 5,
        title: 'WardWiz Antivirus',
        showDetails: false,
      },

      {
        id: 6,
        title: 'BitDefender Antivirus',
        showDetails: false,
      },
      
      
      {
        id: 7,
        title: 'Dr.Web Antivirus',
        showDetails: false,
      },
      
            
      {
        id: 8,
        title: 'McAffee Antivirus',
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
              <IonText className="antivirus-text-area">
                <Translate message="UtilityAntivirus" />
              </IonText>
              <div className="antivirus-wrapper">
                <CustomAccordion accordionData={accordionDetails} />
              </div>
              <div className="antivirus-btn">
                <ButtonConmponent
                  buttonLabel="AnitvirusProced"
                  size="block"
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export {Antivirus };
