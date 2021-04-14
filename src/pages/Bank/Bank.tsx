import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { Translate } from '../../i18n/formatMessages';
import debounce from 'lodash.debounce';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
} from '../../components';
import './Bank.scss';
import { requestForBankTransfer, loadBankList } from '../../redux/actions/';
import LoaderComponent from '../../components/Spinner/Spinner';

const Bank: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');

  // const [destination, setDestination] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');
  const [bankName, setBankName] = useState([{}]);
  const [selectedBankName, setSelectedBankName] = useState('');
  const [currentSelectedVal, setCurrentSelectedVal] = useState(false);

  // function updateDestination(destination: any) {
  //   console.log('destination :', destination);
  //   setDestination(destination);
  // }
  useEffect(() => {
    dispatch(loadBankList(setBankNameList));
  }, []);

  function updateHolderName(holderName: any) {
    console.log('holderName :', holderName);
    if (holderName) setHolderName(holderName);
  }

  function updateAccountNumber(accountNumber: any) {
    console.log('accountNumber :', accountNumber);
    setAccountNumber(accountNumber);
  }

  function updateMobileNo(mobileNo: any) {
    console.log('mobileNo :', mobileNo);
    setMobileNo(mobileNo);
  }

  function updateAmount(amount: any) {
    console.log('amount :', amount);
    setAmount(amount);
  }

  function updateRemarks(remarks: any) {
    console.log('remarks :', remarks);
    setRemarks(remarks);
  }

  function nextRoute(status: any) {
    setIsLoading(false);
    setLoaderMessage('');
    if (status) {
      console.log('status: ', status);
      console.log('History: ', history);
      history.replace('/tabs/banks');
    }
  }
  function handleproceed() {
    setIsLoading(true);
    setLoaderMessage('Updating...');
    dispatch(
      requestForBankTransfer(
        {
          user_id,
          destination: selectedBankName,
          holderName,
          accountNumber,
          mobileNo,
          amount,
          remarks,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
  }

  function handleClearButton() {
    setCurrentSelectedVal(true);
    console.log('*****Clearing fields');
    setHolderName('');
    setAccountNumber('');
    setMobileNo('');
    setAmount('');
    setRemarks('');
    // setCurrentSelectedVal(false);
    // alert("are you want to clear all field ?");
  }

  function goBack() {
    history.replace('/tabs/transfer');
  }

  function setBankNameList(res: any) {
    console.log('setting data: ', res);
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
    console.log('Selected bankName: ', val);
    setCurrentSelectedVal(false);
    setSelectedBankName(val);
  }, 300);

  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={message} />
      <IonApp>
        <IonPage>
          <>
            <HeaderComponent
              headerLable="common.header"
              showBackButton={true}
              handler={goBack}
            />
            <IonContent>
              <div className="bank-container">
                <IonText className="bank-text-area">
                  <Translate message="fund.bankTrasfer" />
                </IonText>
                <div className="bank-wrapper">
                  <SelectMenu
                    label="bank.destination"
                    array={bankName}
                    onSelect={handleBank}
                    selectedVal={currentSelectedVal}
                  />
                  <InputText
                    inputType="text"
                    labelText="bank.holderName"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateHolderName}
                    clearInput={true}
                    value={holderName}
                  />
                  <InputText
                    inputType="text"
                    labelText="bank.number"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAccountNumber}
                    clearInput={true}
                  />
                  <InputText
                    inputType="tel"
                    labelText="bank.mobile"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateMobileNo}
                    clearInput={true}
                  />
                  <InputText
                    inputType="tel"
                    labelText="bank.amount"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAmount}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
                    labelText="bank.remark"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateRemarks}
                    clearInput={true}
                  />

                  <div className="bank-proceed-button">
                    <div className="clear-button-for-bank">
                      <ButtonConmponent
                        buttonLabel="UtilityCardClear"
                        size="block"
                        clickHandler={handleClearButton}
                      />
                    </div>
                    <div className="procced-button">
                      <ButtonConmponent
                        buttonLabel="bank.proceed"
                        size="block"
                        disabled={
                          selectedBankName.trim() &&
                          holderName.trim() &&
                          accountNumber.trim() &&
                          mobileNo.trim() &&
                          amount.trim() &&
                          remarks.trim()
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
          </>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Bank };
