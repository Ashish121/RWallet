import React, { useState } from 'react';
import { IonButton, IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import './AccordionForRecharge.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { requestForTvPayment } from '../../redux/actions';
interface accordionContainerProps {
  accordionData: any;
  // handler?: Function;
}

const AccordionContainer: React.FC<accordionContainerProps> = ({
  accordionData,
  // handler,
}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState();

  const toggle = (item: any, index: any) => {
    const status = !toggleAccordion;
    accordionData.map((item: any, i: any) => {
      if (i === index) {
        item.showDetails = item.showDetails ? false : true;
      } else {
        item.showDetails = false;
      }
    });
    setToggleAccordion(status);
  };

  function nextRoute(status: any) {
    if (status) {
      history.replace('/tabs/tvPayment');
      return;
    }
  }

  // function handleRearch() {
  //   const user_id = 2;
  //   const companyName = "clear TV";
  //   handler?.({
  //     customerId,
  //     amount,
  //     user_id,
  //     companyName,
  //   });
  // }

  function handleClickButton() {
    const user_id = 2;
    const companyName = 'clear TV';
    // const amount = currentTarget.detail.value;
    // const customerId = "3123";

    dispatch(
      requestForTvPayment(
        { user_id, amount, companyName, customerId },
        nextRoute
      )
    );
    console.log('Handling registration');
  }
  function handleCustomerId(customerId: any) {
    console.log('customerId', customerId);
    setCustomerId(customerId);
  }
  function handleAmount(amount: any) {
    console.log('amount ****', amount);
    setAmount(amount);
  }
  return (
    <React.Fragment>
      {accordionData?.map((item: any, index: any) => {
        return (
          <div className="accordion-wrapper">
            <IonButton
              expand="block"
              onClick={() => toggle(item, index)}
              className="ion-button"
            >
              <span style={{ justifyItems: 'right' }}>{item.title} </span>
              <IonIcon
                slot="end"
                icon={item.showDetails ? caretUpOutline : caretDownOutline}
              />
            </IonButton>

            <div className={`${item.showDetails ? 'is-shown' : 'is-hidden'}`}>
              {item.showDetails && (
                <div>
                  <IonItem className="inputArea" color="white">
                    <IonLabel>{item.inputfield1}</IonLabel>
                    <IonInput
                      name="customerId"
                      type="number"
                      onIonChange={handleCustomerId}
                    />
                  </IonItem>

                  <IonItem className="inputArea" color="white">
                    <IonLabel>{item.inputfield2}</IonLabel>
                    <IonInput
                      name={amount}
                      type="number"
                      onIonChange={handleAmount}
                    />
                  </IonItem>

                  <IonButton
                    type="submit"
                    size="small"
                    style={{
                      marginLeft: '25%',
                      width: '45%',
                      marginTop: '5%',
                    }}
                    // onClick={() => handleClickButton(item.title)}
                    // onClick={handleRearch}
                    onClick={handleClickButton}
                  >
                    recharge
                  </IonButton>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default AccordionContainer;
