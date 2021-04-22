import React, { useState } from 'react';
import { IonButton, IonIcon, IonRow, IonCol } from '@ionic/react';
import { chevronUpOutline, chevronDownOutline } from 'ionicons/icons';
import './Accordion.scss';
import { useHistory } from 'react-router-dom';

interface accordionProps {
  accordionData: any;
}

const CustomAccordion: React.FC<accordionProps> = ({ accordionData }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const history = useHistory();

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

  function handleClickButton(loantype: any) {
    history.replace('/tabs/applyPage', { loantype: loantype });
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
              <span style={{ position: 'absolute', left: '10px' }}>
                {item.title}{' '}
              </span>
              <IonIcon
                slot="end"
                style={{ position: 'absolute', right: '10px' }}
                icon={item.showDetails ? chevronUpOutline : chevronDownOutline}
              />
            </IonButton>

            <div className={`${item.showDetails ? 'is-shown' : 'is-hidden'}`}>
              {item.showDetails && (
                <div>
                  <IonRow className="rowclass1">
                    <IonCol size="3">Minimum principal</IonCol>
                    <IonCol size="3">Interest rate</IonCol>
                    <IonCol size="3">Time period</IonCol>
                  </IonRow>
                  <IonRow className="rowclass2">
                    <IonCol size="3">{item.amount}</IonCol>
                    <IonCol size="3">{item.interest}</IonCol>
                    <IonCol size="3">{item.year}</IonCol>
                  </IonRow>
                  <IonButton
                    type="submit"
                    size="small"
                    style={{
                      marginLeft: '25%',
                      width: '45%',
                    }}
                    onClick={() => handleClickButton(item.title)}
                  >
                    Apply
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

export default CustomAccordion;
