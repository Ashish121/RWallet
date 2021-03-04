import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { requestForRegistration } from '../../redux/actions/Registration';

const AccountUser: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [account, setAccount] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [province, setProvince] = useState('');
  const [gender, setGender] = useState('');
  const [genderDetails, setGenderDetails] = useState([{}]);

  useEffect(() => {
    const array = [
      {
        value: 'male',
        label: 'Male',
      },
      {
        value: 'female',
        label: 'Female',
      },
    ];
    setGenderDetails(array);
  }, []);

  function nextRoute() {
    history.push('/otp');
  }

  function handleRegistration() {
    dispatch(
      requestForRegistration(
        {
          fullName,
          fatherName,
          motherName,
          account,
          currentAddress,
          permanentAddress,
          province,
          gender,
          genderDetails,
        },
        nextRoute
      )
    );
    console.log('Handling registration');
    history.push('/accountpage');
  }

  function onGenderSelect(gender: any) {
    console.log('Selected value: ', gender);
    setGender(gender);
  }

  function updateFullName(fullName: string) {
    setFullName(fullName);
    console.log('fullName: ', fullName);
  }

  function updateFatherName(fatherName: string) {
    setFatherName(fatherName);
    console.log('fatherName: ', fatherName);
  }

  function updateMotherName(motherName: string) {
    setMotherName(motherName);
    console.log('motherName: ', motherName);
  }
  function updateAccount(account: string) {
    setAccount(account);
    console.log('account: ', account);
  }
  function updateCurrentAddress(currentAddress: string) {
    setCurrentAddress(currentAddress);
    console.log('currentAddress: ', currentAddress);
  }

  function updatePermanentAddress(permanentAddress: string) {
    setPermanentAddress(permanentAddress);
    console.log('permanentAddress: ', permanentAddress);
  }

  function updateProvince() {
    setProvince(province);
    console.log('province: ', province);
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
                  onChange={updateFullName}
                />
                <InputText
                  inputType="text"
                  labelText="account.fatherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateFatherName}
                />
                <InputText
                  inputType="text"
                  labelText="account.motherName"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateMotherName}
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
                  onChange={updateAccount}
                />
                <div>
                  <SelectMenu
                    label="signup.gender"
                    onSelect={onGenderSelect}
                    array={genderDetails}
                  />
                </div>
                <InputText
                  inputType="text"
                  labelText="account.currentAddress"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateCurrentAddress}
                />
                <InputText
                  inputType="text"
                  labelText="account.permanentAddress"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updatePermanentAddress}
                />
                <div>
                  <SelectMenu label="account.country" />
                </div>
                <div>
                  <SelectMenu label="account.state" />
                </div>
                <div>
                  <SelectMenu label="account.municipality" />
                </div>
                <div>
                  <SelectMenu label="account.district" />
                </div>

                <InputText
                  inputType="text"
                  labelText="account.province"
                  labelType="floating"
                  color="light"
                  labelColor="light"
                  onChange={updateProvince}
                />

                <div style={{ marginTop: '30px' }}>
                  <ButtonConmponent
                    buttonLabel="account.proceed"
                    size="block"
                    disabled={
                      fullName.trim() &&
                      fatherName.trim() &&
                      motherName.trim() &&
                      account.trim() &&
                      gender.length > 0 &&
                      currentAddress.trim() &&
                      permanentAddress.trim() &&
                      province.trim()
                        ? false
                        : true
                    }
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
