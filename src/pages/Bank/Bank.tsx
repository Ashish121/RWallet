import React from 'react';
import { IonPage, IonContent, IonText, IonApp,IonGrid, IonCol,IonRow} from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent} from '../../components';
import './Bank.scss';

const Bank: React.FC = () => {
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="header-text-area">
                <Translate  message="fund.fundpage"/>
              </IonText>
              <div className='page-wrapper'>
                <InputText inputType="text" labelText="bank.destination" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.holderName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.number" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.mobile" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.amount" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.remark" labelType="floating" color="light" labelColor="light"/>
                <div className="clear-button">
                  <IonGrid className="header-grid">
                    <IonRow>
                      <IonCol className="ion-button">
                        <div className="button-line" style={{marginTop: '10px'}}>
                          <ButtonConmponent buttonLabel='bank.clear' size='block' />
                
                        </div>
                        <div className="button-line" style={{marginTop: '10px'}}>
                          <ButtonConmponent buttonLabel='bank.proceed' size='block' />
                        </div>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { Bank };
