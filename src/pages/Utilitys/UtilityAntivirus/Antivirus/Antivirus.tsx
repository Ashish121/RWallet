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
        inputfield1: 'Kaspersky antivirus 1 PC/1 User',
        inputfield2: 'Kaspersky antivirus 3 PC/3 User',
        inputfield3: 'Kaspersky internet security 1 PC/1 User',
        inputfield4: 'Kaspersky internet security 3 PC/3 User',
        inputfield5: 'Kaspersky internet security for antivirus',
        inputfield6: 'Kaspersky total security 1 PC/1 Year',
        inputfield7: 'Kaspersky total security 3 PC/3 User',
        inputfield8: 'Kaspersky internet security for antivirus',
      },
      {
        id: 2,
        title: 'Eset Antivirus',
        showDetails: false,
        inputfield1: 'Eset antivirus 1 PC/1 User',
        inputfield2: 'Eset antivirus 3 PC/3 User',
        inputfield3: 'Eset internet security 1 PC/1 User',
        inputfield4: 'Eset internet security 3 PC/3 User',
        inputfield5: 'Eset mobile security for antivirus',
        inputfield6: 'Eset total security 1 PC/1 Year',
        inputfield7: 'Eset total security 3 PC/3 User',
        inputfield8: 'Eset internet security for antivirus',
      },

      {
        id: 3,
        title: 'eSCAN Antivirus',
        showDetails: false,
        inputfield1: 'eSCAN antivirus-1 User',
        inputfield2: 'eSCAN antivirus-3 User',
        inputfield3: 'eSCAN internet security side-1 User',
        inputfield4: 'eSCAN internet security side-3 User',
        inputfield5: 'eSCAN mobile security for android-1 user',
        inputfield6: 'eSCAN total security suit 1-user',
        inputfield7: 'eSCAN universal security suit 1-user',
        inputfield8: 'eSCAN universal security suit 2-user',
      },

      {
        id: 4,
        title: 'K7 Antivirus',
        showDetails: false,
        inputfield1: 'K7 antivirus 1 PC/1 User',
        inputfield2: 'K7 antivirus 3 PC/3 User',
        inputfield3: 'K7 internet security 1 PC/1 User',
        inputfield4: 'K7 internet security 3 PC/3 User',
        inputfield5: 'K7 internet security for antivirus',
        inputfield6: 'K7 total security 1 PC/1 Year',
        inputfield7: 'K7 total security 3 PC/3 User',
        inputfield8: 'K7 internet security for android-1 user',
      },

      {
        id: 5,
        title: 'WardWiz Antivirus',
        showDetails: false,
        inputfield1: 'WardWiz basic-1 PC/1 User',
        inputfield2: 'WardWiz basic-3 PC/3 User',
        inputfield3: 'WardWiz essential-1 PC/1 User',
        inputfield4: 'WardWiz essential-3 PC/3 User',
        inputfield5: 'WardWiz essential-3 PC/3 User',
        inputfield6: 'WardWiz essential plus-1 PC/1 Year',
        inputfield7: 'WardWiz essential plus-3 PC/1 User',
        inputfield8: 'WardWiz essential-3 PC/3 User',
      },

      {
        id: 6,
        title: 'BitDefender Antivirus',
        showDetails: false,
        inputfield1: 'BitDefender antivirus plus 1 PC/1 User',
        inputfield2: 'BitDefender antivirus 3 PC/3 User',
        inputfield3: 'BitDefender internet security 1 PC/1 User',
        inputfield4: 'BitDefender internet security 3 PC/3 User',
        inputfield5: 'BitDefender internet security for antivirus',
        inputfield6: 'BitDefender total security 1 PC/1 Year',
        inputfield7: 'BitDefender total security 3 PC/3 User',
        inputfield8: 'BitDefender internet security for android-1 user',
      },

      {
        id: 7,
        title: 'Dr.Web Antivirus',
        showDetails: false,
        inputfield1:
          'Dr.Web security space 1 PC 1 Year + 1 Android mobile device security',
        inputfield2:
          'Dr.Web security space 3 PC 1 Year + 3 Android mobile device security',
        inputfield3: 'Dr.Web server security suite 1 server 1 year',
      },

      {
        id: 8,
        title: 'McAfee Antivirus',
        showDetails: false,
        inputfield1: 'McAfee  antivirus 1 PC/1 User',
        inputfield2: 'McAfee  antivirus 3 PC/3 User',
        inputfield3: 'McAfee  internet security 1 PC/1 year',
        inputfield4: 'McAfee  internet security 3 PC/3 year',
        inputfield5: 'McAfee  internet security for antivirus',
        inputfield6: 'McAfee  total protection 1 device/1 Year',
        inputfield7: 'McAfee  total protection 3 device/1 User',
        inputfield8: 'McAfee  mobile security 1 device/1 Year',
      },
    ];
    setAccordionDetails(data);
  }, []);

  function handleRearch(data: any) {
    console.log('new data...........', data);
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
    history.replace('/tabs/antivirus');
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
              <IonText className="antivirus-text-area">
                <Translate message="UtilityAntivirus" />
              </IonText>
              <div className="antivirus-wrapper">
                <AccordionContainerForAntivirus
                  accordionData={accordionDetails}
                  handler={getReachargeDetails}
                />
              </div>

              <div className="antivirus-btn">
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
