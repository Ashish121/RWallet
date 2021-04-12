import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
  LoaderComponent,
} from '../../../../components';
import './RoyalityFinancialServices.scss';
import { requestForRoyalitySavingCreditPage } from '../../../../redux/actions';
import { useDispatch } from 'react-redux';

const RoyalityFinancialServices: React.FC = () => {
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
    console.log(' accountNumber :', accountNumber);
    setAccountNumber(accountNumber);
  }

  function updateMemberName(memberName: any) {
    console.log(' memberName :', memberName);
    setMemberName(memberName);
  }

  function updateMobileNo(mobileNo: any) {
    console.log(' mobileNo :', mobileNo);
    setMobileNo(mobileNo);
  }

  function updateSavingAmount(savingAmount: any) {
    console.log(' savingAmount :', savingAmount);
    setSavingAmount(savingAmount);
  }
  function updateRemarks(remarks: any) {
    console.log(' remarks :', remarks);
    setRemarks(remarks);
  }

  function selectTransactionType(transType: any) {
    console.log('Selected value: ', transType);
    setTransType(transType);
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
    const user_id = localStorage.getItem('userId');
    const financeName = 'Royality financial services and investment Pvt.Ltd.';
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
    console.log('Handling registration');
  }
  function goBack() {
    history.replace('/tabs/insuranceFinancePage');
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
              <IonText className="royalityFinancial-text-area">
                <Translate message="RoyaliFinancialServices" />
              </IonText>
              <div className="royalityFinancial-wrapper">
                <InputText
                  inputType="text"
                  labelText="membershipAccountnumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountNumber}
                />
                <InputText
                  inputType="text"
                  labelText="MemberName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMemberName}
                />
                <InputText
                  inputType="text"
                  labelText="MobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMobileNo}
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
                  onChange={updateSavingAmount}
                />
                <InputText
                  inputType="text"
                  labelText="Remarks"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateRemarks}
                />
                <div className="royalityFinancialButton">
                  <div className="royalityFinancialClearbutton">
                    <ButtonConmponent buttonLabel="ClearSaving" size="block" />
                  </div>
                  <div className="royalityFinancialSubmit">
                    <ButtonConmponent
                      buttonLabel="ConfirmSaving"
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
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { RoyalityFinancialServices };
