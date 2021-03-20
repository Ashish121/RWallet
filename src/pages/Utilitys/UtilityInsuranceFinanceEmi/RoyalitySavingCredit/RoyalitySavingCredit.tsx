import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
} from '../../../../components';
import './RoyalitySavingCredit.scss';

const RoyalitySavingCredit: React.FC = () => {
  const history = useHistory();
  // const [trsType, setTrsType] = useState("");
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
    //setTrsType(trsType);
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
              <IonText className="royalitySaving-text-area">
                <Translate message="RoyaliFinancialServices" />
              </IonText>
              <div className="royalitySaving-wrapper">
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
                <div className="royalitySavingButton">
                  <div className="royalitySavingClear-button">
                    <ButtonConmponent
                      buttonLabel="UtilityCardClear"
                      size="block"
                    />
                  </div>
                  <div className="royalitySaving-submit">
                    <ButtonConmponent
                      buttonLabel="UtilityConfirm"
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

export { RoyalitySavingCredit };
