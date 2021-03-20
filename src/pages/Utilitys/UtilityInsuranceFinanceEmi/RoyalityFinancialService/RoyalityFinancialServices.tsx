import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
} from '../../../../components';
import './RoyalityFinancialServices.scss';

const RoyalityFinancialServices: React.FC = () => {
  const history = useHistory();
  //const [trsType, setTrsType] = useState("");
  const [transactionDetails, setTransactionDetails] = useState([{}]);

  useEffect(() => {
    const array = [
      {
        value: 'saving loan',
        label: 'Saving Loan',
      },
    ];
    setTransactionDetails(array);
  }, []);
  function handleproceed() {
    console.log('Handling registration');
    history.replace('/');
  }
  function goBack() {
    history.replace('/tabs/insuranceFinancePage');
  }
  function selectTransactionType(trsType: any) {
    console.log('Selected value: ', trsType);
    // setTrsType(trsType);
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
              <IonText className="royalityFinancial-text-area">
                <Translate message="RoyalitySaving" />
              </IonText>
              <div className="royalityFinancial-wrapper">
                <InputText
                  inputType="text"
                  labelText="membershipAccountnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="MemberName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="MobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <SelectMenu
                  label="SelectTransactionType"
                  onSelect={selectTransactionType}
                  array={transactionDetails}
                />
                <InputText
                  inputType="text"
                  labelText="SavingAmount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="Remarks"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="royalityFinancialButton">
                  <div className="royalityFinancialClearbutton">
                    <ButtonConmponent buttonLabel="ClearSaving" size="block" />
                  </div>
                  <div className="royalityFinancialSubmit">
                    <ButtonConmponent
                      buttonLabel="ConfirmSaving"
                      size="block"
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

export { RoyalityFinancialServices };
