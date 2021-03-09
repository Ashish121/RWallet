import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { useDispatch } from 'react-redux';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent } from '../../components';
import './Bank.scss';
import { requestForBankTransfer } from '../../redux/actions/';
import LoaderComponent from '../../components/Spinner/Spinner';

const Bank: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //const user_id = localStorage.getItem("userId");
  const user_id = 2;
  const [destination, setDestination] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');

  function updateDestination(destination: any) {
    console.log('destination :', destination);
    setDestination(destination);
  }
  function updateHolderName(holderName: any) {
    console.log('holderName :', holderName);
    setHolderName(holderName);
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
          destination,
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

  function goBack() {
    history.replace('/tabs/transfer');
  }

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
              <div className="container">
                <IonText className="bank-text-area">
                  <Translate message="fund.bankTrasfer" />
                </IonText>
                <div className="bank-wrapper">
                  <InputText
                    inputType="text"
                    labelText="bank.destination"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateDestination}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
                    labelText="bank.holderName"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateHolderName}
                    clearInput={true}
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
                    inputType="text"
                    labelText="bank.mobile"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateMobileNo}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
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
                    <ButtonConmponent
                      buttonLabel="bank.proceed"
                      size="block"
                      disabled={
                        destination.trim() &&
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
            </IonContent>
          </>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Bank };
