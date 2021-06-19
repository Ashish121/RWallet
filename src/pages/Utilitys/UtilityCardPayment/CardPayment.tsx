import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import debounce from 'lodash.debounce';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../components';
import './CardPayment.scss';
import { useDispatch } from 'react-redux';
import {
  requestForCreditCardPayment,
  loadBankList,
} from '../../../redux/actions';

const CardPayment: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');

  const [cardNumber, setCardNumber] = useState('');

  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [bankName, setBankName] = useState([{}]);
  const [selectedBankName, setSelectedBankName] = useState('');
  const [currentSelectedVal, setCurrentSelectedVal] = useState(false);

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/home');
  }, []);

  useEffect(() => {
    dispatch(loadBankList(setBankNameList));
  }, []);

  function updateAmount(amount: any) {
    setAmount(amount);
  }

  function updateCardNumber(cardNumber: any) {
    setCardNumber(cardNumber);
  }

  function nextRoute(status: any, data: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert(
        'Your card payment is successfully completed for ' +
          data.data.bank_name +
          '.'
      );
      history.replace('/tabs/home');
      return;
    }
  }

  function handleproceed() {
    const user_id = localStorage.getItem('userId');
    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForCreditCardPayment(
        { user_id, amount, bankName: selectedBankName, cardNumber },
        nextRoute
      )
    );
  }
  function goBack() {
    history.replace('/tabs/home');
  }

  function setBankNameList(res: any) {
    const bankNames = res.data.data;
    configureBankList(bankNames);
  }
  function configureBankList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateBank(finalArray);
  }

  function updateBank(array: any) {
    setBankName(array);
  }
  const handleBank = debounce((val: any) => {
    setCurrentSelectedVal(false);
    setSelectedBankName(val);
  }, 300);

  function handleClearButtonForCard() {
    setCurrentSelectedVal(true);
    setAmount('');
    setCardNumber('');
    setSelectedBankName('');

    let cardInpuFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < cardInpuFields.length; ++i) {
      if (cardInpuFields[i].id === 'input-area') cardInpuFields[i].value = '';
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
            <div className="container-for-card-payment">
              <IonText className="credit-card-text-area">
                <Translate message="UtilityInternetPayment" />
              </IonText>
              <div className="credit-card-wrapper">
                <SelectMenu
                  label="UtilityBankName"
                  array={bankName}
                  onSelect={handleBank}
                  selectedVal={currentSelectedVal}
                />

                <InputText
                  inputType="tel"
                  labelText="UtilityCardNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCardNumber}
                  clearInput={true}
                />
                <InputText
                  inputType="tel"
                  labelText="UtilityAmountPayment"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAmount}
                  clearInput={true}
                />
                <div className="card-payment-button-property">
                  <ButtonConmponent
                    buttonLabel="UtilityCardClear"
                    size="block"
                    clickHandler={handleClearButtonForCard}
                  />

                  <ButtonConmponent
                    buttonLabel="UtilityConfirm"
                    size="block"
                    disabled={
                      amount.trim() &&
                      selectedBankName.trim() &&
                      cardNumber.trim()
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

export { CardPayment };
