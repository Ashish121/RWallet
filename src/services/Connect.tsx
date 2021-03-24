import axios from 'axios';

export const authenticate = async (
  contactNo: string,
  password: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      mobile_number: contactNo,
      password: password,
    }),
  });
  console.log('result: ', result);
  return result;
};

export const authenticationForRegister = async (
  name: string,
  gender: string,
  mobileNo: string,
  password: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/register',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      name: name,
      gender: gender,
      mobile_number: mobileNo,
      password: password,
    }),
  });
  const mobile = localStorage.setItem('mobile_number', mobileNo);
  console.log('mobile: ', mobile);
  console.log('result: ', result);

  return result;
};

//Authentication For CoOperative Bank Transfer

export const authenticationForCoOperativeBankTransfer = async (
  user_id: string,
  province: string,
  district: string,
  copName: string,
  holderName: string,
  accountNo: string,
  mobileNo: number,
  amount: string,
  remarks: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/cooperative_bank_transfer',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      cooperative_transfer: [
        {
          user_id: user_id,
          province: province,
          district: district,
          cooperative_name: copName,
          account_holder_name: holderName,
          account_number: accountNo,
          mobile_number: mobileNo,
          amount: amount,
          remarks: remarks,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication for current account
export const authenticationForCurrentAc = async (
  user_id: string,
  amount: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/current_account_create',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      current_account: [
        {
          user_id: user_id,
          amount: amount,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};
export const authenticationForAgentTransfer = async (
  user_id: string,
  country: string,
  agentCode: string,
  accountHolderName: string,
  accountNo: string,
  mobileNo: string,
  amount: string,
  remarks: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/agent_bank_transfer',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      agent_transfer: [
        {
          user_id: user_id,
          country: country,
          agent_code: agentCode,
          account_holder_name: accountHolderName,
          account_number: accountNo,
          mobile_number: mobileNo,
          amount: amount,
          remarks: remarks,
        },
      ],
    }),
  });
  console.log('result: ', result);

  return result;
};
//Authentication For Bank Transfer
export const authenticationForBankTransfer = async (
  user_id: string,
  destination: string,
  holderName: string,
  accountNumber: string,
  mobileNo: string,
  amount: string,
  remarks: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/bank_transfer',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      bank_transfer: [
        {
          user_id: user_id,
          destination_bank: destination,
          account_holder_name: holderName,
          account_number: accountNumber,
          mobile_number: mobileNo,
          amount: amount,
          remarks: remarks,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication for fixed account
export const authenticationForFixedAccount = async (
  investment_period: string,
  user_id: string,
  amount: number
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/fixed_account_create',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      fixed_account: [
        {
          investment_period: investment_period,
          user_id: user_id,
          amount: amount,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

/**
 * @param null
 * this api will load the list of country along
 * with states
 */

export const getProvinces = async (): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/province_fetch',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('result: ', result);
  return result;
};

export const getDistrictByProvince = async (id: any): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/district_fetch',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      province: id,
    }),
  });
  console.log('result: ', result);
  return result;
};

export const getLocalLevelName = async (id: any): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/local_level_name_fetch',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      district: id,
    }),
  });
  console.log('result: ', result);
  return result;
};

export const updateUserAccountDetails = async (payload: any): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/update_user',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(payload),
  });
  console.log('result: ', result);
  return result;
};

//authentication for Mpin
export const authenticationForMpin = async (
  user_id: string,
  mpin: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/update_mpin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      user_id: user_id,
      mpin: mpin,
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication for  reset forgot password
export const authenticationForResetPassword = async (
  mobileNo: string,
  newPass: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/forgot_password',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      mobile_number: mobileNo,
      password: newPass,
    }),
  });
  return result;
};

//authentication for saving account
export const authenticationForSavingAccount = async (
  investment_period: string,
  user_id: string,
  amount: number,
  depositType: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/saving_account_create',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      saving_account: [
        {
          investment_period: investment_period,
          user_id: user_id,
          amount: amount,
          deposit_type: depositType,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication for APPLY PAGE OR LOAN TYPE
export const authenticationForApplyPage = async (
  user_id: string,
  loanType: string,
  fullName: string,
  fatherName: string,
  mobileNo: string,
  purposeOfLoan: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/loan_type',

    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      loan_type: [
        {
          user_id: user_id,
          full_name: fullName,
          father_name: fatherName,
          mobile_number: mobileNo,
          purpose_of_loan: purposeOfLoan,
          loan_type: loanType,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication For Nepal ElectricityPage

export const authenticationForNepalElectricityPage = async (
  user_id: string,
  neaCounter: string,
  scNumber: string,
  customerID: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/electricity_bill',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      electricity_bill: [
        {
          user_id: user_id,
          nea_counter: neaCounter,
          sc_number: scNumber,
          customer_id: customerID,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication For Khanepani Page
export const authenticationForKhanepaniPage = async (
  user_id: string,
  placeName: number,
  customerID: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/water_bill',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      water_bill: [
        {
          user_id: user_id,
          place_name: placeName,
          customer_id: customerID,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};

//authentication For Khanepani Page
export const authenticationFlightOneWayPage = async (
  user_id: string,
  returnDate: string,
  roundTrip: string,
  travelType: string,
  sourceCity: string,
  destCity: string,
  departureDate: string,
  travelers: string,
  classForFlight: string
): Promise<any> => {
  const result = await axios({
    url:
      'http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/ticket_booking',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      ticket_booking: [
        {
          user_id: user_id,
          return_date: returnDate,
          round_trip: roundTrip,
          travel_type: travelType,
          source_city: sourceCity,
          destination_city: destCity,
          departure_date: departureDate,
          number_of_travelers: travelers,
          class: classForFlight,
        },
      ],
    }),
  });
  console.log('result: ', result);
  return result;
};
