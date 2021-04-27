import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { useDispatch } from 'react-redux';
import { requestForKhanepaniPage } from '../../../../redux/actions';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  LoaderComponent,
} from '../../../../components';
import './Khanepani.scss';

const Khanepani: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [placeName, setPlaceName] = useState('');
  const [customerID, setCustomerID] = useState('');

  function updatePlaceName(placeName: any) {
    setPlaceName(placeName);
  }
  function updateCustomerID(customerID: any) {
    setCustomerID(customerID);
  }
  function handleproceed() {
    const user_id = localStorage.getItem('userId');
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForKhanepaniPage({ user_id, placeName, customerID }, nextRoute)
    );
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      return;
    }
  }
  function goBack() {
    history.replace('/tabs/electricityWater');
  }

  function handleDiscardButtonForKhanepani() {
    setPlaceName('');
    setCustomerID('');

    let KhInpuFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < KhInpuFields.length; ++i) {
      if (KhInpuFields[i].id === 'input-area') KhInpuFields[i].value = '';
    }
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
            <div className="container-for-Khanepani">
              <IonText className="khanepani-text-area">
                <Translate message="UtilityKhanepani" />
              </IonText>
              <div className="khanepani-wrapper">
                <InputText
                  inputType="text"
                  labelText="UtilityKhanepaniName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updatePlaceName}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCustomerIdKhanepani"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCustomerID}
                  clearInput={true}
                />

                <div className="Khanepani-button-property">
                  <div className="clear-button-for-Khanepani">
                    <ButtonConmponent
                      buttonLabel="UtilityDiscard"
                      size="block"
                      clickHandler={handleDiscardButtonForKhanepani}
                    />
                  </div>
                  <div className="procced-button-for-Khanepani">
                    <ButtonConmponent
                      buttonLabel="UtilitySubmit"
                      size="block"
                      disabled={
                        customerID.trim() && placeName.trim() ? false : true
                      }
                      clickHandler={handleproceed}
                    />
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Khanepani };
