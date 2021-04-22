import React, { useState } from 'react';
import { IonButton, IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './AccordionForRecharge.scss';

interface accordionContainerProps {
  accordionData: any;
  handler?: Function;
}

const AccordionContainer: React.FC<accordionContainerProps> = ({
  accordionData,
  handler,
}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
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

  function handleRearch(title: any) {
    const user_id = localStorage.getItem('userId');
    const companyName = title;
    handler?.({
      customerId,
      amount,
      user_id,
      companyName,
    });
  }

  function handleCustomerId(event: any) {
    console.log('customerId :', event.target.value);
    const customerId = event.target.value;
    setCustomerId(customerId);
  }
  function handleAmount(event: any) {
    console.log('amount :', event.target.value);
    const amount = event.target.value;
    setAmount(amount);
  }
  return (
    <React.Fragment>
      {accordionData?.map((item: any, index: any) => {
        return (
          <div className="accordion-for-recharge-wrapper">
            <IonButton
              expand="block"
              onClick={() => toggle(item, index)}
              className="ion-button"
            >
              <span style={{ position: 'absolute', left: '10px' }}>
                {item.title}{' '}
              </span>
              <IonIcon
                slot="end"
                style={{ position: 'absolute', right: '10px' }}
                icon={item.showDetails ? chevronUpOutline : chevronDownOutline}
              />
            </IonButton>

            <div
              className={`${
                item.showDetails ? 'is-shown-recharge' : 'is-hidden-recharge'
              }`}
            >
              {item.showDetails && (
                <div>
                  <IonItem className="recharge-input-area" color="white">
                    <IonLabel>{item.inputfield1}</IonLabel>
                    <IonInput
                      name="customerId"
                      type="text"
                      onIonChange={handleCustomerId}
                    />
                  </IonItem>

                  <IonItem className="recharge-input-area" color="white">
                    <IonLabel>{item.inputfield2}</IonLabel>
                    <IonInput
                      name="amount"
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
                    onClick={() => handleRearch(item.title)}
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
