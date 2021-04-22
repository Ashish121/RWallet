import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { requestForAntivirusPayment } from '../../../../redux/actions';
import {
  ButtonConmponent,
  HeaderComponent,
  LoaderComponent,
  SelectMenu,
} from '../../../../components';
import './AntivirusPayment.scss';

const AntivirusPayment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [user_id, setUser_id] = useState('');
  const [brandName, setBrandName] = useState('');
  const [planName, setPlanName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountDetails, setAccountTypeDetails] = useState([{}]);

  useEffect(() => {
    const params: any = location.state;
    const user_id = params.data.user_id;
    setUser_id(user_id);
    const brandName = params.data.brandName;
    setBrandName(brandName);
    const planName = params.data.planName;
    setPlanName(planName);
  }, []);

  useEffect(() => {
    const array = [
      {
        value: 'saving',
        label: 'Saving Account',
      },
      {
        value: 'current',
        label: 'Current Account',
      },
      {
        value: 'fixed',
        label: 'Fixed Account',
      },
    ];

    setAccountTypeDetails(array);
  }, []);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      alert('payment successfully completed');
      return;
    }
  }

  function handleContinueButton(data: any) {
    console.log('new payment button value**', data);
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    console.log(
      'new payment button value**user_id:',
      user_id,
      'brandName:',
      brandName,
      'planName:',
      planName,
      'accountType:',
      accountType
    );

    dispatch(
      requestForAntivirusPayment(
        { user_id, brandName, planName, accountType },
        nextRoute
      )
    );
  }

  function goBack() {
    history.replace('/tabs/antivirus');
  }

  function updateAccountType(accountType: any) {
    setAccountType(accountType);
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
            <div className="antivirus-payment-container">
              <IonText className="antivirus-payment-text-area">
                <Translate message="AntivirusPaymentOption" />
              </IonText>
              <div className="antivirus-payment-wrapper">
                <SelectMenu
                  label="AntivirusSelectBank"
                  onSelect={updateAccountType}
                  array={accountDetails}
                />
                <div className="AntivirusPayment-OrderDetails">
                  <IonText className="antivirus-payment-spersky">
                    <Translate message="AntivirusOrderDetails" />
                  </IonText>
                </div>

                <div className="AntivirusPayment-spersky">
                  <IonText className="antivirus-payment-spersky">
                    {planName}
                  </IonText>
                </div>

                <div className="antivirus-confirm-button">
                  <ButtonConmponent
                    buttonLabel="AntivirusContiue"
                    size="block"
                    clickHandler={handleContinueButton}
                  />
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { AntivirusPayment };
