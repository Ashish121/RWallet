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

  useEffect(() => {
    dispatch(loadBankList(setBankNameList));
  }, []);

  function updateAmount(amount: any) {
    setAmount(amount);
  }

  function updateCardNumber(cardNumber: any) {
    setCardNumber(cardNumber);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert('card payment successfully completed');
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
    setSelectedBankName(val);
  }, 300);
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
                />

                <InputText
                  inputType="tel"
                  labelText="UtilityCardNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCardNumber}
                />
                <InputText
                  inputType="tel"
                  labelText="UtilityAmountPayment"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAmount}
                />
                <div className="card-payment-button-property">
                  <div className="clear-button-for-card-payment">
                    <ButtonConmponent
                      buttonLabel="UtilityCardClear"
                      size="block"
                    />
                  </div>
                  <div className="procced-button-for-card-payment">
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
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CardPayment };
