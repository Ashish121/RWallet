import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../../components';
import './RoyalitySavingCredit.scss';
import { requestForRoyalitySavingCreditPage } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';

const RoyalitySavingCredit: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState('');
  const [memberName, setMemberName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [transType, setTransType] = useState('');
  const [savingAmount, setSavingAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [transactionDetails, setTransactionDetails] = useState([{}]);
  const [showLoading, setShowLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState('');
  const [currentSelectedVal, setCurrentSelectedVal] = useState(false);

  useEffect(() => {
    const array = [
      {
        value: 'saving loan',
        label: 'Saving Loan',
      },
    ];
    setTransactionDetails(array);
  }, []);

  function updateAccountNumber(accountNumber: any) {
    setAccountNumber(accountNumber);
  }

  function updateMemberName(memberName: any) {
    setMemberName(memberName);
  }

  function updateMobileNo(mobileNo: any) {
    setMobileNo(mobileNo);
  }

  function updateSavingAmount(savingAmount: any) {
    setSavingAmount(savingAmount);
  }
  function updateRemarks(remarks: any) {
    setRemarks(remarks);
  }

  function nextRoute(status: any) {
    setShowLoading(false);
    setLoaderMessage('');
    if (status) {
      alert(
        'Your payment successfully completed for Royality saving and credit co-operative Ltd'
      );
      history.replace('/tabs/home');
      return;
    }
  }

  function handleproceed() {
    const user_id = localStorage.getItem('userId');
    const financeName = 'Royality saving and credit co-operative Ltd';

    setShowLoading(true);
    setLoaderMessage('Please Wait...');
    dispatch(
      requestForRoyalitySavingCreditPage(
        {
          user_id,
          accountNumber,
          memberName,
          mobileNo,
          transType,
          savingAmount,
          remarks,
          financeName,
        },
        nextRoute
      )
    );
  }
  function goBack() {
    history.replace('/tabs/insuranceFinancePage');
  }

  function selectTransactionType(transType: any) {
    setCurrentSelectedVal(false);
    setTransType(transType);
  }

  function handleClearButtonForSaving() {
    setCurrentSelectedVal(true);
    setAccountNumber('');
    setMemberName('');
    setMobileNo('');
    setSavingAmount('');
    setRemarks('');
    let savingInpuFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < savingInpuFields.length; ++i) {
      if (savingInpuFields[i].id === 'input-area')
        savingInpuFields[i].value = '';
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
            <div className="saving-credit-container">
              <IonText className="royalitySaving-text-area">
                <Translate message="RoyalitySaving" />
              </IonText>
              <div className="royalitySaving-wrapper">
                <InputText
                  inputType="tel"
                  labelText="membershipAccountnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountNumber}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="MemberName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMemberName}
                  clearInput={true}
                />
                <InputText
                  inputType="tel"
                  labelText="MobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMobileNo}
                  clearInput={true}
                />

                <SelectMenu
                  label="SelectTransactionType"
                  onSelect={selectTransactionType}
                  array={transactionDetails}
                  selectedVal={currentSelectedVal}
                />
                <InputText
                  inputType="tel"
                  labelText="SavingAmount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateSavingAmount}
                  clearInput={true}
                />
                <InputText
                  inputType="text"
                  labelText="Remarks"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateRemarks}
                  clearInput={true}
                />
                <div className="royalitySavingButton">
                  <ButtonConmponent
                    buttonLabel="UtilityCardClear"
                    size="block"
                    clickHandler={handleClearButtonForSaving}
                  />

                  <ButtonConmponent
                    buttonLabel="UtilityConfirm"
                    size="block"
                    disabled={
                      accountNumber.trim() &&
                      memberName.trim() &&
                      mobileNo.trim() &&
                      transType.trim() &&
                      savingAmount.trim() &&
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
        </IonPage>
      </IonApp>
    </>
  );
};

export { RoyalitySavingCredit };
