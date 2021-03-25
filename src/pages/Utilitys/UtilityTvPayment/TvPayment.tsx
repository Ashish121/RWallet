import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TvPayment.scss';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { AccordionContainer, HeaderComponent } from '../../../components';

const TvPayment: React.FC = () => {
  const history = useHistory();
  // const location = useLocation();
  const [accordionDetails, setAccordionDetails] = useState([{}]);
  // const [loanType, setLoanType] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Hide splash now');
      return () => {
        clearTimeout(timeout);
      };
    }, 7000);
  }, []);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: 'Clear TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },
      {
        id: 2,
        title: 'Dish home',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 3,
        title: 'Max TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 4,
        title: 'Metro TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },

      {
        id: 5,
        title: 'Prabhu TV',
        showDetails: false,
        inputfield1: 'CAS ID/CHIP ID/Customer ID',
        inputfield2: 'Amount',
      },
    ];
    setAccordionDetails(data);
  }, []);

  // useEffect(() => {
  //   const params: any = location.state;
  //   const loanType1 = params.loantype;
  //   console.log("loanType : ", loanType1);
  //   setLoanType(loanType);
  // }, []);

  function goBack() {
    history.replace('/tabs/home');
  }
  // function getReachargeDetails(data: any) {
  //   console.log("data", data);

  //   // const amount = data.amount.CustomEvent.detail.value;
  //   // console.log("new amount*****", amount);
  // }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent
            headerLable="common.header"
            showBackButton={true}
            handler={goBack}
          />
          <IonContent>
            <div className="container">
              <IonText className="TvPayment-text-area">
                <Translate message="UtilityTvPayment" />
              </IonText>
              <div className="TvPayment-wrapper">
                <AccordionContainer
                  accordionData={accordionDetails}
                  // handler={getReachargeDetails}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { TvPayment };
