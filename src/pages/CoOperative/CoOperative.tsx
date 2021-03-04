import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent } from '../../components';
import './CoOperative.scss';
import { requestForCoOperativeBankTransfer } from '../../redux/actions';

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

  function nextRoute() {
    history.push('/cops');
  }

  function handleproceed() {
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

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
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
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.district"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateDistrict}
                />

                <InputText
                  inputType="text"
                  labelText="coOperative.name"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCopName}
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.holder"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateHolderName}
                />
                <InputText
                  inputType="text"
                  labelText="bank.number"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountNo}
                />
                <InputText
                  inputType="text"
                  labelText="bank.mobile"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMobileNo}
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.amount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAmount}
                />
                <InputText
                  inputType="text"
                  labelText="coOperative.remark"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateRemarks}
                />
                <div className="coperative-clear-button">
                  <ButtonConmponent buttonLabel="bank.clear" size="block" />
                </div>
                <div className="coperative-proceed-button">
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
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { CoOperative };
