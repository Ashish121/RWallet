import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../components';
import './CardPayment.scss';
import { useDispatch } from 'react-redux';
import { requestForCreditCardPayment } from '../../../redux/actions';

const CardPayment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [bankDetails, setBankDetails] = useState([{}]);
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');

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
    setBankDetails(array);
  }, []);

  function updateAmount(amount: any) {
    console.log('amount : ', amount);
    setAmount(amount);
  }
  function OnSelectBankName(bankName: any) {
    console.log('Selected bank value: ', bankName);
    setBankName(bankName);
  }
  function updateCardNumber(cardNumber: any) {
    console.log('cardNumber : ', cardNumber);
    setCardNumber(cardNumber);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      history.replace('/tabs/home');
      return;
    }
  }

  function handleproceed() {
    const user_id = 2;
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForCreditCardPayment(
        { user_id, amount, bankName, cardNumber },
        nextRoute
      )
    );
    console.log('Handling registration');
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
            <div className="container">
              <IonText className="credit-card-text-area">
                <Translate message="UtilityInternetPayment" />
              </IonText>
              <div className="credit-card-wrapper">
                <SelectMenu
                  label="UtilityBankName"
                  onSelect={OnSelectBankName}
                  array={bankDetails}
                />

                <InputText
                  inputType="text"
                  labelText="UtilityCardNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCardNumber}
                />
                <InputText
                  inputType="text"
                  labelText="UtilityAmountPayment"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAmount}
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
                      disabled={
                        amount.trim() && bankName.trim() && cardNumber.trim()
                          ? false
                          : true
                      }
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
