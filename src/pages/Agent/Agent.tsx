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

const Agent: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user_id = localStorage.getItem('userId');

  const [country, setCountry] = useState('');
  const [countryDetails, setCountryDetails] = useState([{}]);
  const [agentCode, setAgentCode] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');

  useEffect(() => {
    const array = [
      {
        value: 'nepal',
        label: 'Nepal',
      },
      {
        value: 'india',
        label: 'India',
      },
      {
        value: 'japan',
        label: 'Japan',
      },
      {
        value: 'china',
        label: 'China',
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

  function nextRoute() {
    history.push('/agentS');
  }
  function handleproceed() {
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

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
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
                  labelText="bank.code"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAgentCode}
                />
                <InputText
                  inputType="text"
                  labelText="bank.holderName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountHolderName}
                />
                <InputText
                  inputType="text"
                  labelText="bank.number"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAccountNumber}
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
                  labelText="bank.amount"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateAmount}
                />
                <InputText
                  inputType="text"
                  labelText="bank.remark"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateRemarks}
                />
                <div className="agent-clear-button">
                  <ButtonConmponent buttonLabel="bank.clear" size="block" />
                </div>
                <div className="agent-proceed-button">
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
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Agent };
