import React, { useState } from 'react';
import { IonButton, IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import './AccordionForRecharge.scss';
import { useHistory } from 'react-router-dom';
interface accordionProps {
  accordionData: any;
}

const CustomAccordionForRecharge: React.FC<accordionProps> = ({
  accordionData,
}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const history = useHistory();
  const [number, setNumber] = useState('');
  const [amount, setAmount] = useState('');

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

  function handleClickButton() {
    history.replace('#');
  }
  function handleNumber() {
    setNumber(number);
  }
  function handleAmount() {
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
                    <IonLabel> Mobile number</IonLabel>
                    <IonInput
                      name="number"
                      type="number"
                      value={number}
                      onIonChange={handleNumber}
                    />
                  </IonItem>

                  <IonItem className="inputArea" color="white">
                    <IonLabel>Amount</IonLabel>
                    <IonInput
                      name="amount"
                      type="number"
                      value={amount}
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

export default CustomAccordionForRecharge;
