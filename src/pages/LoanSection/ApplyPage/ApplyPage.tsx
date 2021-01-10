import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonText,
  IonApp,

} from '@ionic/react';
import { Translate } from '../../../i18n/formatMessages';
import { ButtonConmponent,InputText, HeaderComponent } from '../../../components';
import './ApplyPage.scss';

const ApplyPage: React.FC = () => {
  const history = useHistory();

  function handleproceed() {
    console.log('Handling registration');
    history.push('/');
  }

  return (
    <>
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" />
          <IonContent>
            <div className="container">
              <IonText className="Loan-ApplyPage-text-area">
                <Translate message="LoanApplyPage" />
              </IonText>
              <div className="Loan-ApplyPage-wrapper">
                <InputText
                  inputType="text"
                  labelText="LoanFullName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="LoanFatherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="LoanMobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="PurposeLoan"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <InputText
                  inputType="text"
                  labelText="LoanMobileNumber"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                />
                <div className="loan-ApplyPage-Discard">
                  <ButtonConmponent
                    buttonLabel="ApplyPageDiscard"
                    size="block"

                  />
                </div>
                <div className="loan-ApplyPage-Apply">
                  <ButtonConmponent
                    buttonLabel="ApplyPageApply"
                    size="block"
                    clickHandler={handleproceed}
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

export { ApplyPage };