import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp,IonGrid, IonCol,IonRow} from '@ionic/react';
import   { Translate  } from '../../i18n/formatMessages';
import { ButtonConmponent, InputText, HeaderComponent} from '../../components';
import './BankTransferPage.scss';

const BankTransferPage: React.FC = () => {
  const history = useHistory();
  function handleproceed() {
    console.log('Handling registration');
    history.push('/bankDetails');
  }
  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="bankPage-container">
              <IonText className="bankPage-text-area">
                <Translate  message="fund.bankTrasfer"/>
              </IonText>
              <div className='bankPage-wrapper'>
                <InputText inputType="text" labelText="bank.destination" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.holderName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.number" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.mobile" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.amount" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="bank.remark" labelType="floating" color="light" labelColor="light"/>
                <div className="clear-button">
                  <IonGrid className="bankPage-header-grid">
                    <IonRow>
                      <IonCol className="bankPage-ion-button">
                        <div className="button-line" style={{marginTop: '10px'}}>
                          <ButtonConmponent buttonLabel='bank.clear' size='block' />
                
                        </div>
                        <div className="bankPage-button" style={{marginTop: '10px'}}>
                          <ButtonConmponent buttonLabel='bank.proceed' size='block' clickHandler={handleproceed} />
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

export { BankTransferPage };
