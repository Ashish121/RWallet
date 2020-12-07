import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp, } from '@ionic/react';
import   { Translate   } from '../../i18n/formatMessages';
import { InputText, ButtonConmponent, SelectMenu, HeaderComponent} from '../../components';
import './AccountUser.scss';

const AccountUser: React.FC = () => {
  const history = useHistory();

  function handleRegistration() {
    console.log('Handling registration');
    history.push('/accountpage');
  }
  function onGenderSelect(gender:string) {
    console.log('Selected: ',gender);
  }
  
  return (
    <>
      
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="header-text">
                <Translate  message="account.LableText"/>
              </IonText>

              <div className='page-wrapper'>
                <InputText inputType="text" labelText="account.fullName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.fatherName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.motherName" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.dateofBirth" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.bsad" labelType="floating" color="light" labelColor="light"/>
                <div className="ion-margin-top">
                  <SelectMenu label='signup.gender' onSelect={onGenderSelect}/>
                </div>
                <InputText inputType="text" labelText="account.currentAddress" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.permanentAddress" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.country" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.state" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.municipality" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.district" labelType="floating" color="light" labelColor="light"/>
                <InputText inputType="text" labelText="account.province" labelType="floating" color="light" labelColor="light"/>

                
                <div style={{marginTop: '10px'}}>
                  <ButtonConmponent buttonLabel='account.proceed' size='block' clickHandler={handleRegistration}/>
                </div>
                
              </div>
            </div>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export { AccountUser };
