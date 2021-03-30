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
import { requestForAgentTransfer } from '../../redux/actions';
import LoaderComponent from '../../components/Spinner/Spinner';

const Agent: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //const user_id = localStorage.getItem("userId");
  const user_id = 2;
  const [country, setCountry] = useState('');
  const [countryDetails, setCountryDetails] = useState([{}]);
  const [agentCode, setAgentCode] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setLoaderMessage] = useState('');

  useEffect(() => {
    const array = [
      {
        value: 'nepal',
        label: 'Nepal',
      },
    ];
    setCountryDetails(array);
  }, []);

  function onCounrtySelect(country: any) {
    setCountry(country);
  }

  function updateAgentCode(agentCode: any) {
    setAgentCode(agentCode);
  }

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
          country,
          agentCode,
          accountHolderName,
          accountNo,
          mobileNo,
          amount,
          remarks,
        },
        nextRoute
      )
    );

    console.log('Handling registration:');
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
                <IonText className="agent-text-area">
                  <Translate message="agent.text" />
                </IonText>
                <div className="agent-page-wrapper">
                  <div>
                    <SelectMenu
                      label="agent.country"
                      onSelect={onCounrtySelect}
                      array={countryDetails}
                    />
                  </div>
                  <InputText
                    inputType="text"
                    labelText="agent.code"
                    labelType="floating"
                    color="light"
                    labelColor="light"
                    onChange={updateAgentCode}
                    clearInput={true}
                  />
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

                  <div className="agent-proceed-button">
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
                          country.trim() &&
                          agentCode.trim() &&
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
              </div>
            </IonContent>
          </>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Agent };
