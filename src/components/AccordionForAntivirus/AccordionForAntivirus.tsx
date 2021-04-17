import React, { useState } from 'react';
import { IonButton, IonIcon, IonRadioGroup } from '@ionic/react';
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import './AccordionForAntivirus.scss';
import { RadioComponent } from '..';

interface AccordionContainerForAntivirusProps {
  accordionData: any;
  handler?: Function;
}

const AccordionContainerForAntivirus: React.FC<AccordionContainerForAntivirusProps> = ({
  accordionData,
  handler,
}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const [planName, setPlanName] = useState('');

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
    const brandName = title;
    const accountType = 'Savings';
    console.log('user_id ...........', user_id);
    console.log('brandName..........', brandName);
    console.log('accountType........', accountType);
    console.log('planName.........', planName);
    handler?.({
      user_id,
      brandName,
      planName,
      accountType,
    });
  }

  function selectRadioButton(event: any) {
    console.log('RadioButton value***** :', event.detail.value);
    const planName = event.target.value;
    setPlanName(planName);
  }

  return (
    <React.Fragment>
      {accordionData?.map((item: any, index: any) => {
        return (
          <div className="antivirus-wrapper">
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
                <React.Fragment>
                  <div>
                    <IonRadioGroup
                      onIonChange={selectRadioButton}
                      onClick={() => handleRearch(item.title)}
                    >
                      {item.details.map((ele: any) => {
                        return (
                          <div
                            className="radioButton"
                            style={{ background: 'white' }}
                          >
                            <RadioComponent
                              showRadioButton={true}
                              val={ele.text}
                              label={ele.text}
                            />
                          </div>
                        );
                      })}
                    </IonRadioGroup>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default AccordionContainerForAntivirus;
