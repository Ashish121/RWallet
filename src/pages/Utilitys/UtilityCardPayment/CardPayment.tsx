import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
} from '../../../components';
import './CardPayment.scss';

const CardPayment: React.FC = () => {
  const history = useHistory();
  // const [gender, setGender] = useState("");
  const [genderDetails, setGenderDetails] = useState([{}]);

  useEffect(() => {
    const array = [
      {
        value: 'bank-A',
        label: 'Bank-A',
      },
      {
        value: 'bank-B',
        label: 'Bank-B',
      },
      {
        value: 'bank-C',
        label: 'Bank-C',
      },
    ];
    setGenderDetails(array);
  }, []);
  function handleproceed() {
    console.log('Handling registration');
    history.replace('/tabs/home');
  }
  function goBack() {
    history.replace('/tabs/home');
  }
  function onGenderSelect(gender: any) {
    console.log('Selected value: ', gender);
    // setGender(gender);
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
              <IonText className="credit-card-text-area">
                <Translate message="UtilityInternetPayment" />
              </IonText>
              <div className="credit-card-wrapper">
                <SelectMenu
                  label="UtilityBankName"
                  onSelect={onGenderSelect}
                  array={genderDetails}
                />

                <InputText
                  inputType="text"
                  labelText="UtilityCardNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="UtilityAmountPayment"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />

                <div className="buttonElement">
                  <div className="cardClearButton">
                    <ButtonConmponent
                      buttonLabel="UtilityCardClear"
                      size="block"
                    />
                  </div>
                  <div className="cardSubmitButton">
                    <ButtonConmponent
                      buttonLabel="UtilityConfirm"
                      size="block"
                      clickHandler={handleproceed}
                    />
                  </div>{' '}
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CardPayment };
