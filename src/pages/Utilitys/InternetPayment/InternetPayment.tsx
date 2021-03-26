import React, { useEffect, useState } from 'react';
import './InternetPayment.scss';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { AccordionContainer, HeaderComponent } from '../../../components';
import { requestForInternetPayment } from '../../../redux/actions';
import LoaderComponent from '../../../components/Spinner/Spinner';
import { useDispatch } from 'react-redux';

const InternetPayment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
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
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },
      {
        id: 2,
        title: 'Via net',
        showDetails: false,
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },

      {
        id: 3,
        title: 'Subisu Internet',
        showDetails: false,
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },

      {
        id: 4,
        title: 'Classic Tech',
        showDetails: false,
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },

      {
        id: 5,
        title: 'Nepal Telecom FTTH',
        showDetails: false,
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },
      {
        id: 5,
        title: 'Nepal Telecom WIMAX',
        showDetails: false,
        inputfield1: 'Customer ID/Username',
        inputfield2: 'Amount',
      },
    ];
    setAccordionDetails(data);
  }, []);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/internetPayment');
      return;
    }
  }
  function getReachargeDetails(data: any) {
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    const user_id = data.user_id;
    const amount = data.amount;
    const companyName = data.companyName;
    const customerId = data.customerId;

    dispatch(
      requestForInternetPayment(
        { user_id, amount, companyName, customerId },
        nextRoute
      )
    );
  }
  function goBack() {
    history.replace('/tabs/home');
  }
  return (
    <>
      <LoaderComponent
        showLoading={showLoading}
        loaderMessage={loaderMessage}
      />
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="InternetPayment-text-area">
                <Translate message="Internet Payment" />
              </IonText>
              <div className="InternetPaymentWrapper ">
                <AccordionContainer
                  accordionData={accordionDetails}
                  handler={getReachargeDetails}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { InternetPayment };
