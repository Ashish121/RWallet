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
    const user_id = 2;

    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForNepalElectricityPage(
        { user_id, neaCounter, scNumber, customerID },
        nextRoute
      )
    );
    console.log('Handling registration');
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
                />
                <InputText
                  inputType="text"
                  labelText="UtilitySCnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateScNumber}
                />
                <InputText
                  inputType="text"
                  labelText="UtilityCustomerId"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCustomerID}
                />

                <div className="buttonElement">
                  <div className="firstButton">
                    <ButtonConmponent
                      buttonLabel="UtilityDiscard"
                      size="block"
                    />
                  </div>

                  <div className="secondButton">
                    <ButtonConmponent
                      buttonLabel="UtilitySubmit"
                      size="block"
                      disabled={
                        neaCounter.trim() &&
                        scNumber.trim() &&
                        customerID.trim()
                          ? false
                          : true
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

export { NepalElectricity };
