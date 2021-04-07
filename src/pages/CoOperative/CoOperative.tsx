import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent } from '../../components';
import './CoOperative.scss';
import { requestForCoOperativeBankTransfer } from '../../redux/actions';
import LoaderComponent from '../../components/Spinner/Spinner';

const CoOperative: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [copName, setCopName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');

  function updateProvince(province: any) {
    setProvince(province);
  }

  function updateDistrict(district: any) {
    setDistrict(district);
  }

  function updateCopName(copName: any) {
    setCopName(copName);
  }

  function updateHolderName(holderName: any) {
    setHolderName(holderName);
  }

  function updateAccountNo(accountNo: any) {
    setAccountNo(accountNo);
  }

  function updateMobileNo(mobileNo: any) {
    setMobileNo(mobileNo);
  }

  function updateAmount(amount: any) {
    setAmount(amount);
  }

  function updateRemarks(remarks: any) {
    setRemarks(remarks);
  }

  function nextRoute(status: any) {
    setIsLoading(false);
    setLoaderMessage('');
    if (status) {
      console.log('status: ', status);
      console.log('History: ', history);
      history.replace('/tabs/cops');
    }
  }

  function handleproceed() {
    setIsLoading(true);
    setLoaderMessage('Updating...');
    dispatch(
      requestForCoOperativeBankTransfer(
        {
          user_id,
          province,
          district,
          copName,
          holderName,
          accountNo,
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
  function handleClearButton() {
    alert('are you want to clear all field ?');
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
                <IonText className="coperative-text-area">
                  <Translate message="coOperative.text" />
                </IonText>
                <div className="coperative-wrapper">
                  <InputText
                    inputType="text"
                    labelText="coOperative.province"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateProvince}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
                    labelText="coOperative.district"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateDistrict}
                    clearInput={true}
                  />

                  <InputText
                    inputType="text"
                    labelText="coOperative.name"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateCopName}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
                    labelText="coOperative.holder"
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
                    onChange={updateAccountNo}
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
                    labelText="coOperative.amount"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAmount}
                    clearInput={true}
                  />
                  <InputText
                    inputType="text"
                    labelText="coOperative.remark"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateRemarks}
                    clearInput={true}
                  />

                  <div className="coperative-proceed-button">
                    <div className="clear-button">
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
                          province.trim() &&
                          district.trim() &&
                          copName.trim() &&
                          holderName.trim() &&
                          accountNo.trim() &&
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

export { CoOperative };
