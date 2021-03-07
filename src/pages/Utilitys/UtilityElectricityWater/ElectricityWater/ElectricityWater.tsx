import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../../../i18n/formatMessages';
import { ButtonConmponent, HeaderComponent } from '../../../../components';
import './ElectricityWater.scss';

const ElectricityWater: React.FC = () => {
  const history = useHistory();

  function handleNepalElectricity() {
    console.log('Handling registration');
    history.replace('/nepalElectricity');
  }

  function handleKhanepani() {
    console.log('Handling registration');
    history.replace('/khanepani');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="electricity-water-text-area">
                <Translate message="UtilityElectricityWater" />
              </IonText>
              <div className="Utility-Electricity-Water-Wrapper">
                <div style={{ marginTop: '13px' }}>
                  <ButtonConmponent
                    buttonLabel="UtilityNepalElectricityAuthority"
                    size="block"
                    clickHandler={handleNepalElectricity}
                  />
                </div>
                <div style={{ marginTop: '13px' }}>
                  <ButtonConmponent
                    buttonLabel="UtilityKhanepani"
                    size="block"
                    clickHandler={handleKhanepani}
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

export { ElectricityWater };
