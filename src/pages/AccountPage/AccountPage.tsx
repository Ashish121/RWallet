import React from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp, } from '@ionic/react';
//import { eyeOffOutline } from 'ionicons/icons';
import   { Translate   } from '../../i18n/formatMessages';
// import LoaderComponent from '../../components/Spinner/Spinner';
import { ButtonConmponent,  HeaderComponent} from '../../components';
import './AccountPage.scss';

const AccountPage: React.FC = () => {
  const history = useHistory();
 

  function handleSaving() {
    console.log('Handling registration');
    history.push('/account/saving');
  }
  
  function handleFixed() {
    console.log('Handling registration');
    history.push('/account/fixed');
  }

  
  function handleCurrent() {
    console.log('Handling registration');
    history.push('/account/current');
  }
  

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="header-text-area">
                <Translate  message="account.lableTexttop"/>
              </IonText>
              <div className='page-wrapper'>
                <div style={{marginTop: '13px'}}>
                  <ButtonConmponent buttonLabel='account.saving' size='block' clickHandler={handleSaving}/>
                </div>
                <div style={{marginTop: '13px'}}>
                  <ButtonConmponent buttonLabel='account.fixed' size='block' clickHandler={handleFixed}/>
                </div>
                <div style={{marginTop: '13px'}}>
                  <ButtonConmponent buttonLabel='account.current' size='block' clickHandler={handleCurrent}/>
                </div>
                <IonText className="header-text-bottom">
                  <Translate  message="account.labelmore"/>
                </IonText>
              </div>
              
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { AccountPage };
