import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TopUpRecharge.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { AccordionContainer, HeaderComponent } from '../../../components';
import { requestForTopUpRecharge } from '../../../redux/actions';
import LoaderComponent from '../../../components/Spinner/Spinner';
import { useDispatch } from 'react-redux';

const TopUpRecharge: React.FC = () => {
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
        title: 'NCell Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },
      {
        id: 2,
        title: 'NT landline Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 3,
        title: 'NT FTTH',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 4,
        title: 'NT WIMAX',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 5,
        title: 'NT PostPaid Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 6,
        title: 'NT Prepaid Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 7,
        title: 'NT CDMA Postpaid Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 8,
        title: 'NT CDMA Prepaid Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 9,
        title: 'Smartcell Topup',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 10,
        title: 'NT ADSL Topup-unlimited',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 11,
        title: 'NT ADSL Topup-volume based',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },

      {
        id: 12,
        title: 'NT recharge card',
        showDetails: false,
        inputfield1: 'Mobile number',
        inputfield2: 'Amount',
      },
    ];
    setAccordionDetails(data);
  }, []);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/topUpRecharge');
      return;
    }
  }
  function getReachargeDetails(data: any) {
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    const user_id = data.user_id;
    const amount = data.amount;
    const companyName = data.companyName;
    const mobileNumber = data.customerId;

    dispatch(
      requestForTopUpRecharge(
        { user_id, amount, companyName, mobileNumber },
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
            <div className="top-up-recharge-container">
              <IonText className="TopUpRecharge-text-area">
                <Translate message="TopUpRecharge" />
              </IonText>
              <div className="TopUpRecharge-wrapper">
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

export { TopUpRecharge };
