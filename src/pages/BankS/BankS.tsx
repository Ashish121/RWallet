import React from 'react';
import { IonPage, IonContent, IonText, IonApp} from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent} from '../../components';
import './BankS.scss';

const BankS: React.FC = () => {
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="header-text-area">
                <Translate  message="fund.bankTrasfer"/>
              </IonText>
              <div className='page-wrapper'>
                <InputText inputType="text" labelText="bank.destination" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.holderName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.number" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.mobile" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.amount" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.remark" labelType="floating" color="light" labelColor="light"/>
                <div className="clear-button">
                  <div style={{marginTop: '13px'}}>
                    <ButtonConmponent buttonLabel='agent.conform' size='block'/>
                  </div>
                </div>
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { BankS };
