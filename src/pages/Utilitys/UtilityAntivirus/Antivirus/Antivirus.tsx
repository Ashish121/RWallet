import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Antivirus.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  AccordionContainerForAntivirus,
  HeaderComponent,
  ButtonConmponent,
} from '../../../../components';

interface AntivirusProps {
  handler?: Function;
}
const Antivirus: React.FC<AntivirusProps> = ({ handler }) => {
  const history = useHistory();
  const [accordionDetails, setAccordionDetails] = useState([{}]);
  const [data, setData] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
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
        details: [
          { text: 'Kaspersky antivirus 1 PC/1 User' },
          { text: 'Kaspersky antivirus 3 PC/3 User' },
          { text: 'Kaspersky internet security 1 PC/1 User' },
          { text: 'Kaspersky internet security 3 PC/3 User' },
          { text: 'Kaspersky internet security for antivirus' },
          { text: 'Kaspersky total security 1 PC/1 Year' },
          { text: 'Kaspersky total security 3 PC/3 User' },
          { text: 'Kaspersky internet security for antivirus-1' },
        ],
      },

      {
        id: 2,
        title: 'Eset Antivirus',
        showDetails: false,
        details: [
          { text: 'Eset antivirus 1 PC/1 User' },
          { text: 'Eset antivirus 3 PC/3 User' },
          { text: 'Eset internet security 1 PC/1 User' },
          { text: 'Eset internet security 3 PC/3 User' },
          { text: 'Eset mobile security for antivirus' },
          { text: 'Eset total security 1 PC/1 Year' },
          { text: 'Eset total security 3 PC/3 User' },
          { text: 'Eset internet security for antivirus' },
        ],
      },

      {
        id: 3,
        title: 'eSCAN Antivirus',
        showDetails: false,
        details: [
          { text: 'ESCAN antivirus-1 User' },
          { text: 'ESCAN antivirus-3 User' },
          { text: 'ESCAN internet security side-1 User' },
          { text: 'ESCAN internet security side-3 User' },
          { text: 'ESCAN mobile security for android-1 user' },
          { text: 'ESCAN total security suit 1-user' },
          { text: 'ESCAN universal security suit 1-user' },
          { text: 'ESCAN universal security suit 2-user' },
        ],
      },

      {
        id: 4,
        title: 'K7 Antivirus',
        showDetails: false,
        details: [
          { text: 'K7 antivirus 1 PC/1 User' },
          { text: 'K7 antivirus 3 PC/3 User' },
          { text: 'K7 internet security 1 PC/1 User' },
          { text: 'K7 internet security 3 PC/3 User' },
          { text: 'K7 internet security for antivirus' },
          { text: 'K7 total security 1 PC/1 Year' },
          { text: 'K7 total security 3 PC/3 User' },
          { text: 'K7 internet security for android-1 user' },
        ],
      },

      {
        id: 5,
        title: 'WardWiz Antivirus',
        showDetails: false,
        details: [
          { text: 'WardWiz basic-3 PC/3 User' },
          { text: 'WardWiz essential-1 PC/1 User' },
          { text: 'WardWiz essential-2 PC/3 User' },
          { text: 'WardWiz essential-3 PC/3 User' },
          { text: 'WardWiz essential plus-1 PC/1 Year' },
          { text: 'WardWiz essential plus-3 PC/1 User' },
          { text: 'WardWiz essential-3 PC/1 User' },
        ],
      },

      {
        id: 6,
        title: 'BitDefender Antivirus',
        showDetails: false,
        details: [
          { text: 'BitDefender antivirus plus 1 PC/1 User' },
          { text: 'BitDefender antivirus 3 PC/3 User' },
          { text: 'BitDefender internet security 1 PC/1 User' },
          { text: 'BitDefender internet security 3 PC/3 User' },
          { text: 'BitDefender internet security for antivirus' },
          { text: 'BitDefender total security 1 PC/1 Year' },
          { text: 'BitDefender total security 3 PC/3 User' },
          { text: 'BitDefender internet security for android-1 user' },
        ],
      },

      {
        id: 7,
        title: 'Dr.Web Antivirus',
        showDetails: false,
        details: [
          {
            text:
              'Dr.Web security space 1 PC 1 Year + 1 Android mobile device security',
          },
          {
            text:
              'Dr.Web security space 3 PC 1 Year + 3 Android mobile device security',
          },
          { text: 'Dr.Web server security suite 1 server 1 year' },
        ],
      },

      {
        id: 8,
        title: 'McAfee Antivirus',
        showDetails: false,
        details: [
          { text: 'McAfee  antivirus 1 PC/1 User' },
          { text: 'McAfee  antivirus 3 PC/3 User' },
          { text: 'McAfee  internet security 1 PC/1 year' },
          { text: 'McAfee  internet security 3 PC/3 year' },
          { text: 'McAfee  internet security for antivirus' },
          { text: 'McAfee  total protection 1 device/1 Year' },
          { text: 'McAfee  total protection 3 device/1 User' },
          { text: 'McAfee  mobile security 1 device/1 Year' },
        ],
      },
    ];
    setAccordionDetails(data);
  }, []);

  function handleRearch(data: any) {
    handler?.({
      data,
    });
    history.replace('/tabs/antivirusPayment', { data: data });
  }

  function getReachargeDetails(data: any) {
    const user_id = data.user_id;
    const brandName = data.brandName;
    const planName = data.planName;
    const accountType = data.accountType;
    handler?.({
      user_id,
      brandName,
      planName,
      accountType,
    });
    setData(data);
  }
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
            <div className="antivirus-container">
              <IonText className="antivirus-text-area">
                <Translate message="UtilityAntivirus" />
              </IonText>
              <div className="antivirus-btn-wrapper">
                <AccordionContainerForAntivirus
                  accordionData={accordionDetails}
                  handler={getReachargeDetails}
                />
              </div>

              <div className="antivirus-proceed-btn">
                <ButtonConmponent
                  buttonLabel="PROCEED"
                  size="block"
                  clickHandler={() => handleRearch(data)}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Antivirus };
