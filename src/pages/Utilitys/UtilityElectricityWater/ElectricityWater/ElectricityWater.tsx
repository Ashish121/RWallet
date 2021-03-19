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
    history.replace('/tabs/nepalElectricity');
  }

  function handleKhanepani() {
    console.log('Handling registration');
    history.replace('/tabs/khanepani');
  }
  function goBack() {
    history.replace('/tabs/home');
  }
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
              <IonText className="electricity-water-text-area">
                <Translate message="UtilityElectricityWater" />
              </IonText>

              <div style={{ marginTop: '55%' }}>
                <ButtonConmponent
                  buttonLabel="UtilityNepalElectricityAuthority"
                  size="block"
                  clickHandler={handleNepalElectricity}
                />
              </div>
              <div style={{ marginTop: '10px' }}>
                <ButtonConmponent
                  buttonLabel="UtilityKhanepani"
                  size="block"
                  clickHandler={handleKhanepani}
                />
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { ElectricityWater };
