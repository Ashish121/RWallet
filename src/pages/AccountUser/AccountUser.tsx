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
  LoaderComponent,
} from '../../components';
import './AccountUser.scss';
import { loadInitialData, updateUserDetails } from '../../redux/actions';

const AccountUser: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [dobAD, setDobAD] = useState('');
  const [dobBS, setDobBS] = useState('');
  const [gender, setGender] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [country, setCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedMuniciplaty, setSelectedMuniciplaty] = useState('');
  const [province, setProvince] = useState('');

  const [genderDetails, setGenderDetails] = useState([{}]);
  const [isLoading, setLoadeStatus] = useState(false);
  const [loaderText, setLoaderText] = useState('');
  const [countryList, setCountryList] = useState([{}]);
  const [states, setStates] = useState([{}]);
  const [municipalties, setMunicipalties] = useState([{}]);
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

  useEffect(() => {
    setLoadeStatus(true);
    setLoaderText('Please wait...');
    dispatch(loadInitialData(setInitialData));
  }, []);

  function setInitialData(res: any) {
    console.log('setting data: ', res);
    const initialData = res.data;
    setLoadeStatus(false);
    setLoaderText('');
    loadCountries(initialData.country);
    loadStates(initialData.states);
    loadMunicipality(initialData.municipality);
  }
  function loadMunicipality(municipalties: any) {
    let finalArray: any = [];
    municipalties.forEach((municipality: any) => {
      let tempObj = {
        value: municipality,
        label: municipality,
      };
      finalArray.push(tempObj);
    });
    setMunicipalties(finalArray);
    console.log('municipalties: ', finalArray);
  }

  function loadStates(states: any) {
    let finalArray: any = [];
    states.forEach((state: any) => {
      let tempObj = {
        value: state,
        label: state,
      };
      finalArray.push(tempObj);
    });
    setStates(finalArray);
    console.log('States: ', finalArray);
  }

  function loadCountries(name: any) {
    const countries = [
      {
        value: name,
        label: name,
      },
    ];
    setCountryList(countries);
  }

  function nextRoute(status: boolean) {
    setLoadeStatus(false);
    setLoaderText('');
    if (status) {
      localStorage.setItem('userFilledAccountDetails', 'true');
      history.replace('/accountpage');
      return;
    }
  }

  function onGenderSelect(gender: any) {
    console.log('Selected value: ', gender);
    setGender(gender);
  }

  function updateFullName(fullName: string) {
    setFullName(fullName.trim());
    console.log('fullName: ', fullName);
  }

  function updateFatherName(fatherName: string) {
    setFatherName(fatherName.trim());
    console.log('fatherName: ', fatherName);
  }

  function updateMotherName(motherName: string) {
    setMotherName(motherName.trim());
    console.log('motherName: ', motherName);
  }

  function handleDobAD(date: any) {
    console.log('date: ', date);

    setDobAD(date);
  }
  function handleDobBS(date: any) {
    console.log('date: ', date);
    setDobBS(date);
  }

  function updateCurrentAddress(currentAddress: string) {
    setCurrentAddress(currentAddress);
    console.log('currentAddress: ', currentAddress);
  }

  function updatePermanentAddress(permanentAddress: string) {
    setPermanentAddress(permanentAddress);
    console.log('permanentAddress: ', permanentAddress);
  }
  function handleCountry(country: any) {
    console.log('country', country);

    setCountry(country);
  }
  function handleState(state: any) {
    console.log('state: ', state);

    setSelectedState(state);
  }
  function handleMunicipality(municipality: any) {
    console.log('municipality: ', municipality);
    setSelectedMuniciplaty(municipality);
  }

  function updateProvince(value: any) {
    setProvince(value);
    console.log('province: ', value);
  }

  function updateUser() {
    const userId = localStorage.getItem('registeredUserId');
    const payload = {
      user_id: userId,
      father_name: fatherName,
      mother_name: motherName,
      dob: dobAD,
      current_address: currentAddress,
      permanent_address: permanentAddress,
      country: country,
      municipality: selectedMuniciplaty,
      province: province,
    };
    setLoadeStatus(true);
    setLoaderText('Updating....');
    dispatch(updateUserDetails(payload, nextRoute));
  }
  return (
    <>
      <LoaderComponent showLoading={isLoading} loaderMessage={loaderText} />
      <IonApp>
        <IonPage>
          <HeaderComponent headerLable="common.header" showBackButton={false} />

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
                  <DatePickerComponent
                    placeholder="account.dateofBirth"
                    handler={handleDobAD}
                  />
                </div>
                <div className="date-picker-wrapper">
                  <DatePickerComponent
                    placeholder="account.dateofBirthBS"
                    handler={handleDobBS}
                  />
                </div>
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
                  <SelectMenu
                    label="account.country"
                    array={countryList}
                    onSelect={handleCountry}
                  />
                </div>
                <div>
                  <SelectMenu
                    label="account.state"
                    array={states}
                    onSelect={handleState}
                  />
                </div>
                <div>
                  <SelectMenu
                    label="account.municipality"
                    array={municipalties}
                    onSelect={handleMunicipality}
                  />
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
                      gender &&
                      currentAddress.trim() &&
                      permanentAddress.trim() &&
                      province.trim() &&
                      dobAD &&
                      dobBS &&
                      selectedState &&
                      country &&
                      municipalties
                        ? false
                        : true
                    }
                    clickHandler={updateUser}
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
