import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  LoaderComponent,
} from '../../../../components';
import './NepalElectricity.scss';
import { useDispatch } from 'react-redux';
import { requestForNepalElectricityPage } from '../../../../redux/actions';

const NepalElectricity: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [neaCounter, setNeaCounter] = useState('');
  const [scNumber, setscNumber] = useState('');
  const [customerID, setCustomerID] = useState('');

  function updateNeaCounter(neaCounter: any) {
    setNeaCounter(neaCounter);
  }
  function updateScNumber(scNumber: any) {
    setscNumber(scNumber);
  }
  function updateCustomerID(customerID: any) {
    setCustomerID(customerID);
  }
  function handleproceed() {
    const user_id = localStorage.getItem('userId');

    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForNepalElectricityPage(
        { user_id, neaCounter, scNumber, customerID },
        nextRoute
      )
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

  function handleDiscardButtonForElectricity() {
    setNeaCounter('');
    setscNumber('');
    setCustomerID('');

    let electricityInpuFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < electricityInpuFields.length; ++i) {
      if (electricityInpuFields[i].id === 'input-area')
        electricityInpuFields[i].value = '';
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
            <div className="nepal-electricity-container">
              <IonText className="nepal-electricity-text-area">
                <Translate message="UtilityNepalElectricityAuthority" />
              </IonText>
              <div className="nepal-electricity-authority-wrapper">
                <InputText
                  inputType="text"
                  labelText="UtilityNepalNEACounter"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateNeaCounter}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="UtilitySCnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateScNumber}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCustomerId"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCustomerID}
                  clearInput={true}
                />

                <div className="electricity-proceed-button">
                  <ButtonConmponent
                    buttonLabel="UtilityDiscard"
                    size="block"
                    clickHandler={handleDiscardButtonForElectricity}
                  />
                  <ButtonConmponent
                    buttonLabel="UtilitySubmit"
                    size="block"
                    disabled={
                      neaCounter.trim() && scNumber.trim() && customerID.trim()
                        ? false
                        : true
                    }
                    clickHandler={handleproceed}
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

export { NepalElectricity };
