import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './TvPayment.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { AccordionContainer, HeaderComponent } from '../../../components';
import { requestForTvPayment } from '../../../redux/actions';
import LoaderComponent from '../../../components/Spinner/Spinner';

const TvPayment: React.FC = () => {
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

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert('Tv recharge successfully completed');
      history.replace('/tabs/home');
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
      requestForTvPayment(
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
            <div className="tv-payment-container">
              <IonText className="TvPayment-text-area">
                <Translate message="UtilityTvPayment" />
              </IonText>
              <div className="TvPayment-wrapper">
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

export { TvPayment };
