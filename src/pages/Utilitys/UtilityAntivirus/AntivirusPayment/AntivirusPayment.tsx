import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { requestForAntivirusPayment } from '../../../../redux/actions';
import {
  ButtonConmponent,
  HeaderComponent,
  LoaderComponent,
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

  const profileFields = useSelector(
    (state: any) => state.profile.profileDetails
  );

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/antivirus');
  }, []);

  useEffect(() => {
    const params: any = location.state;
    const user_id = params.data.user_id;
    setUser_id(user_id);
    const brandName = params.data.brandName;
    setBrandName(brandName);
    const planName = params.data.planName;
    setPlanName(planName);
  }, []);

  function nextRoute(status: any, data: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert(
        'Congratulations! Your Antivirus plan is successfully completed for ' +
          data.data.brand_name +
          ' brand.'
      );

      history.replace('/tabs/home');
      // alert("Antivirus payment successfully completed ");

      return;
    }
  }

  function handleContinueButton() {
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForAntivirusPayment(
        {
          user_id,
          brandName,
          planName,
          accountType: profileFields.account_type,
        },
        nextRoute
      )
    );
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
            <div className="antivirus-payment-container">
              <IonText className="antivirus-payment-text-area">
                <Translate message="AntivirusPaymentOption" />
              </IonText>
              <div className="antivirus-payment-wrapper">
                <div className="AntivirusPayment-account">
                  <IonText className="antivirus-payment-spersky">
                    {profileFields.account_type}
                    <Translate message=" Account" />
                  </IonText>
                </div>

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
