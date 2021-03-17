import React, { useState } from 'react';
import { IonButton, IonIcon, IonRow, IonCol } from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import './Accordion.scss';

interface accordionProps {
  accordionData: any;
}

const CustomAccordion: React.FC<accordionProps> = ({ accordionData }) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

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
