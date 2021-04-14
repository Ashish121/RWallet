import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import {
  ButtonConmponent,
  InputText,
  HeaderComponent,
  SelectMenu,
} from '../../components';
import './CoOperative.scss';
import {
  requestForCoOperativeBankTransfer,
  loadProvince,
  fetchdistrictByProvince,
} from '../../redux/actions';
import LoaderComponent from '../../components/Spinner/Spinner';

const CoOperative: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  const [copName, setCopName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');

  const [province, setProvince] = useState([{}]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [district, setDistricts] = useState([{}]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [clearValueDistrict, setClearValueDistrict] = useState(false);

  useEffect(() => {
    dispatch(loadProvince(setProvinceList));
  }, []);

  function setProvinceList(res: any) {
    console.log('setting data: ', res);
    const Newprovince = res.data.data;
    configureProvinceList(Newprovince);
  }
  function configureProvinceList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateProvince(finalArray);
  }

  function updateProvince(array: any) {
    setProvince(array);
  }
  const handleProvince = debounce((val: any) => {
    console.log('Selected province: ', val);
    setSelectedProvince(val);
    setDistricts([{}]);
    setClearValueDistrict(true);
    dispatch(fetchdistrictByProvince(loadDistrict, val));
  }, 300);

  function loadDistrict(res: any) {
    const districts = res.data.data;
    let finalArray: any = [];
    districts.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });

    setClearValueDistrict(false);
    setDistricts(finalArray);
    console.log('States: ', finalArray);
  }

  const handleDistrict = debounce((val: any) => {
    console.log('district: ', val);
    setSelectedDistrict(val);
  }, 300);

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
          province: selectedProvince,
          district: selectedDistrict,
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
              <div className="coOperative-container">
                <IonText className="coperative-text-area">
                  <Translate message="coOperative.text" />
                </IonText>
                <div className="coperative-wrapper">
                  <SelectMenu
                    label="account.province"
                    array={province}
                    onSelect={handleProvince}
                  />

                  <div>
                    <SelectMenu
                      label="coOperative.district"
                      array={district}
                      selectedVal={clearValueDistrict}
                      onSelect={handleDistrict}
                    />
                  </div>

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

                  <div className="coperative-button-property">
                    <div className="coperative-clear-button">
                      <ButtonConmponent
                        buttonLabel="UtilityCardClear"
                        size="block"
                        clickHandler={handleClearButton}
                      />
                    </div>
                    <div className="coperative-procced-button">
                      <ButtonConmponent
                        buttonLabel="bank.proceed"
                        size="block"
                        disabled={
                          selectedProvince.trim() &&
                          selectedDistrict.trim() &&
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
