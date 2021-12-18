import React, { useState, useEffect } from 'react';
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
import './Agent.scss';
import { requestForAgentTransfer, loadCountryList,loadAgentCodeList } from '../../redux/actions';
import LoaderComponent from '../../components/Spinner/Spinner';
import debounce from 'lodash.debounce';

const Agent: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');
  // const [agentCode, setAgentCode] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');
  const [currentSelectedVal, setCurrentSelectedVal] = useState(false);
  const [currentSelectedValueForAgent,setCurrentSelectedValueForAgent]=useState(false);

  const [country, setCountry] = useState([{}]);
  const [agentCode, setAgentCode] = useState([{}]);
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const [selectedAgentCode, setSelectedAgentCode] = useState('');

  useEffect(() => {
    localStorage.setItem('previousRoute', '/tabs/transfer');
  }, []);

  useEffect(() => {
    dispatch(loadCountryList(setCountryNameList));
    dispatch(loadAgentCodeList(setAgentCodeList));
  }, []);

  // function updateAgentCode(agentCode: any) {
  //   setAgentCode(agentCode);
  // }

  function updateAccountHolderName(accountHolderName: any) {
    setAccountHolderName(accountHolderName);
  }

  function updateAccountNumber(accountNo: any) {
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
      history.replace('/tabs/agents');
    }
  }
  function handleproceed() {
    setIsLoading(true);
    setLoaderMessage('Updating...');
    dispatch(
      requestForAgentTransfer(
        {
          user_id,
          country: selectedCountryName,
          agentCode:selectedAgentCode,
          accountHolderName,
          accountNo,
          mobileNo,
          amount,
          remarks,
        },
        nextRoute
      )
    );
  }

  function goBack() {
    history.replace('/tabs/transfer');
  }
  function handleClearButton() {
    setCurrentSelectedVal(true);
    setCurrentSelectedValueForAgent(true);

    // setAgentCode('');
    setAccountHolderName('');
    setAccountNo('');
    setMobileNo('');
    setAmount('');
    setRemarks('');
    setIsLoading(false);
    setLoaderMessage('');
    let agentInputFields: any = document.getElementsByTagName('ion-input');
    for (var i = 0; i < agentInputFields.length; ++i) {
      if (agentInputFields[i].id === 'input-area')
        agentInputFields[i].value = '';
    }
  }

  //country list api
  function setCountryNameList(res: any) {
    const bankNames = res.data.data;
    configureCounrtyList(bankNames);
  }
  function configureCounrtyList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateCountry(finalArray);
  }

  function updateCountry(array: any) {
    setCountry(array);
  }

  const handleCounrty = debounce((val: any) => {
    setCurrentSelectedVal(false);
    setSelectedCountryName(val);
  }, 300);

  //setAgentCode

  //country list api
  function setAgentCodeList(res: any) {
    const bankNames = res.data.data;
    configureAgentList(bankNames);
  }
  function configureAgentList(array: any) {
    let finalArray: any = [];
    array.forEach((element: any) => {
      let tempObj = {
        value: element,
        label: element,
      };
      finalArray.push(tempObj);
    });
    updateAgentCode(finalArray);
  }


  function updateAgentCode(array: any) {
    setAgentCode(array);
  }
  const handleAgentCode = debounce((val: any) => {
    // setCurrentSelectedVal(false);
    // setSelectedCountryName(val);

    setCurrentSelectedValueForAgent(false);
    setSelectedAgentCode(val);

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
              <div className="agent-fund-transfer-container">
                <IonText className="agent-text-area">
                  <Translate message="agent.text" />
                </IonText>
                <div className="agent-page-wrapper">
                  <div>
                    <SelectMenu
                      label="agent.country"
                      array={country}
                      onSelect={handleCounrty}
                      selectedVal={currentSelectedVal}
                    />
                  </div>
                  <div>
                    <SelectMenu
                      label="agent.code"
                      array={agentCode}
                      onSelect={handleAgentCode}
                      selectedVal={currentSelectedValueForAgent}
                    />
                  </div>
                  {/* <InputText
                    inputType="tel"
                    labelText="agent.code"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAgentCode}
                    clearInput={true}
                  /> */}
                  <InputText
                    inputType="text"
                    labelText="bank.holderName"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAccountHolderName}
                    clearInput={true}
                  />
                  <InputText
                    inputType="tel"
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

                  <div className="agent-proceed-button">
                    <ButtonConmponent
                      buttonLabel="UtilityCardClear"
                      size="block"
                      clickHandler={handleClearButton}
                    />

                    <ButtonConmponent
                      buttonLabel="bank.proceed"
                      size="block"
                      disabled={
                        selectedCountryName.trim() &&
                        selectedAgentCode.trim() &&
                        accountHolderName.trim() &&
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
          </>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Agent };
