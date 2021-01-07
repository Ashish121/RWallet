import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonText, IonApp } from '@ionic/react';
import { Translate } from '../../i18n/formatMessages';
import {
  InputText,
  ButtonConmponent,
  SelectMenu,
  HeaderComponent,
  DatePickerComponent,
} from '../../components';
import './AccountUser.scss';

const AccountUser: React.FC<any> = () => {
  const history = useHistory();

  function handleRegistration() {
    console.log('Handling registration');
    history.push('/accountpage');
  }
  function onGenderSelect(gender: string) {
    console.log('Selected: ', gender);
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="user-details-container">
              <IonText className="page-header-text">
                <Translate message="account.LableText" />
              </IonText>

              <div className="user-details-field-wrapper">
                <InputText
                  inputType="text"
                  labelText="account.fullName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="account.fatherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="account.motherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="date-picker-wrapper">
                  <DatePickerComponent />
                </div>
                <div className="date-picker-wrapper">
                  <DatePickerComponent />
                </div>
                <InputText
                  inputType="text"
                  labelText="account.bsad"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div>
                  <SelectMenu label="signup.gender" onSelect={onGenderSelect} />
                </div>
                <InputText
                  inputType="text"
                  labelText="account.currentAddress"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="account.permanentAddress"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div>
                  <SelectMenu
                    label="account.country"
                    onSelect={onGenderSelect}
                  />
                </div>
                <div>
                  <SelectMenu label="account.state" onSelect={onGenderSelect} />
                </div>
                <div>
                  <SelectMenu
                    label="account.municipality"
                    onSelect={onGenderSelect}
                  />
                </div>
                <div>
                  <SelectMenu
                    label="account.district"
                    onSelect={onGenderSelect}
                  />
                </div>

                <InputText
                  inputType="text"
                  labelText="account.province"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />

                <div style={{ marginTop: '30px' }}>
                  <ButtonConmponent
                    buttonLabel="account.proceed"
                    size="block"
                    clickHandler={handleRegistration}
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

export { AccountUser };
