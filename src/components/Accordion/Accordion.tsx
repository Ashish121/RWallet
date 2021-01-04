import React, { useState } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
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
            <IonButton expand="full" onClick={() => toggle(item, index)}>
              {item.title}
              <IonIcon
                slot="end"
                icon={item.showDetails ? caretUpOutline : caretDownOutline}
              />
            </IonButton>

            <div className={`${item.showDetails ? 'is-shown' : 'is-hidden'}`}>
              {item.showDetails && (
                <h1 style={{ color: '#000000' }}>{item.title}</h1>
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CustomAccordion;