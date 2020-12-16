import React from 'react';
import { ButtonConmponent, HeaderComponent} from '../../components';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent,IonPage, IonContent, IonApp  } from '@ionic/react';
import './ConfirmPage.scss';

const ConfirmPage: React.FC = () => {

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonCard>
              
              </IonCard>
              <div className='confirm-wrapper'>
                <IonCardHeader>
                  
                  <IonCardTitle>sucess</IonCardTitle>
                </IonCardHeader>
             
                <IonCardContent>

                </IonCardContent>
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

export { ConfirmPage };
