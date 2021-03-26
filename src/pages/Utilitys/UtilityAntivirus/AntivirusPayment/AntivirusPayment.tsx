import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { requestForAntivirusPayment } from '../../../../redux/actions';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  LoaderComponent,
} from '../../../../components';
import './AntivirusPayment.scss';

const AntivirusPayment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [accountType, setAccountType] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [user_id, setUser_id] = useState('');
  const [brandName, setBrandName] = useState('');
  const [planName, setPlanName] = useState('');

  useEffect(() => {
    const params: any = location.state;
    const user_id = params.data.user_id;
    setUser_id(user_id);
    const brandName = params.data.brandName;
    setBrandName(brandName);
    const planName = params.data.planName;
    setPlanName(planName);
  }, []);

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/antivirusPayment');
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

  function updateAccountType(accountType: any) {
    console.log('accountType', accountType);
    setAccountType(accountType);
  }

  function goBack() {
    history.replace('/tabs/antivirus');
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
              <IonText className="antivirus-payment-text-area">
                <Translate message="AntivirusPaymentOption" />
              </IonText>
              <div className="antivirus-payment-wrapper">
                <InputText
                  inputType="text"
                  labelText="AntivirusSelectBank"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountType}
                />
                <div className="AntivirusPayment-OrderDetails">
                  <IonText className="antivirus-payment-spersky">
                    <Translate message="AntivirusOrderDetails" />
                  </IonText>
                </div>

                <div className="AntivirusPayment-spersky">
                  <IonText className="antivirus-payment-spersky">
                    <Translate message="Antiviruskaspersky" />
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
