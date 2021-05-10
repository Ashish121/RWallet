import axios from "axios";

/**
 * Adding token to all request if token is
 *  available for the user
 */
axios.interceptors.request.use(function (config) {
  let userToken;
  const userData: any = localStorage.getItem("loginDetails");
  if (userData) {
    userToken = JSON.parse(userData).data.token;
  }
  if (userToken) config.headers.Authorization = `Bearer ${userToken}`;
  return config;
});
export const authenticate = async (
  contactNo: string,
  password: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/login",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      mobile_number: contactNo,
      password: password,
    }),
  });

  return result;
};

export const authenticationForRegister = async (
  name: string,
  gender: string,
  mobileNo: string,
  password: string,
  countryCode: any
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/register",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      name: name,
      gender: gender,
      mobile_number: mobileNo,
      password: password,
      countryCode,
    }),
  });
  localStorage.setItem("mobile_number", mobileNo);
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/cooperative_bank_transfer",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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

  return result;
};

//authentication for current account
export const authenticationForCurrentAc = async (
  user_id: string,
  amount: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/current_account_create",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/agent_bank_transfer",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/bank_transfer",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/fixed_account_create",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/province_fetch",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

export const getDistrictByProvince = async (id: any): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/district_fetch",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      province: id,
    }),
  });

  return result;
};

export const getLocalLevelName = async (id: any): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/local_level_name_fetch",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      district: id,
    }),
  });

  return result;
};

export const updateUserAccountDetails = async (payload: any): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/update_user",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(payload),
  });

  return result;
};

//authentication for Mpin
export const authenticationForMpin = async (
  user_id: any,
  mpin: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/create_mpin",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id: user_id,
      mpin: mpin,
    }),
  });

  return result;
};

/**
 *
 * @param user_id
 * @param current_mpin
 * @param new_mpin
 * @returns {changeMpin}
 */
export const changeMpin = async (
  user_id: any,
  current_mpin: any,
  new_mpin: any
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/change_mpin",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id,
      new_mpin,
      current_mpin,
    }),
  });

  return result;
};

//authentication for  reset forgot password
export const authenticationForResetPassword = async (
  mobileNo: string,
  newPass: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/forgot_password",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/saving_account_create",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/loan_type",

    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/electricity_bill",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/water_bill",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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

  return result;
};

//common authentication For ticket booking
//(flightOneWay,flightTwoWay,BusOneWay and BusTwoWay Booking )
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
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/ticket_booking",
    method: "post",
    headers: {
      "Content-Type": "application/json",
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

  return result;
};

//authentication For EMI calculation page
export const authenticationForEmiCalculation = async (
  loanAmount: number,
  interestRate: number,
  loanTenure: number
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/emi_calculate",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      emi_calculate: [
        {
          loan_amount: loanAmount,
          interest_rate: interestRate,
          loan_tenure: loanTenure,
        },
      ],
    }),
  });

  return result;
};

//authentication For tv payment page
export const authenticationForTvPayment = async (
  user_id: string,
  amount: string,
  companyName: string,
  customerId: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/television_payment",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      television_payment: [
        {
          user_id: user_id,
          amount: amount,
          company_name: companyName,
          customer_id: customerId,
        },
      ],
    }),
  });

  return result;
};

//common authentication For finance payment
export const authenticationForFinancePaymentCalculation = async (
  user_id: any,
  accountNumber: string,
  memberName: string,
  mobileNo: string,
  transType: string,
  savingAmount: string,
  remarks: string,
  financeName: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/finance_payment",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      finance_payment: [
        {
          user_id: user_id,
          account_number: accountNumber,
          member_name: memberName,
          mobile_number: mobileNo,
          transaction_type: transType,
          savings_amount: savingAmount,
          remarks: remarks,
          finance_name: financeName,
        },
      ],
    }),
  });

  return result;
};

// authentication For Card Payment
export const authenticationForCardPaymentCalculation = async (
  user_id: any,
  amount: string,
  bankName: string,
  cardNumber: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/card_payment",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      card_payment: [
        {
          user_id: user_id,
          amount: amount,
          bank_name: bankName,
          card_number: cardNumber,
        },
      ],
    }),
  });

  return result;
};

//authentication For Internet payment page
export const authenticationForInternetPayment = async (
  user_id: string,
  amount: string,
  companyName: string,
  customerId: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/internet_payment",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      internet_payment: [
        {
          user_id: user_id,
          amount: amount,
          company_name: companyName,
          customer_id: customerId,
        },
      ],
    }),
  });

  return result;
};

//authentication For Top-Up and Recharge payment
export const authenticationForTopUpRecharge = async (
  user_id: string,
  amount: string,
  companyName: string,
  mobileNumber: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/mobile_recharge",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      mobile_recharge: [
        {
          user_id: user_id,
          amount: amount,
          company_name: companyName,
          mobile_number: mobileNumber,
        },
      ],
    }),
  });

  return result;
};

//authentication For antivirus payment
export const authenticationForAntivirusPayment = async (
  user_id: string,
  brandName: string,
  planName: string,
  accountType: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/antivirus_payment",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      antivirus_payment: [
        {
          user_id: user_id,
          brand_name: brandName,
          plan_name: planName,
          bank_account_type: accountType,
        },
      ],
    }),
  });

  return result;
};
export const fetchPOSDetails = async (): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/pos_data",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

//loadProfile

export const loadProfile = async (user_id: string): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/profile_fetch",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id: user_id,
    }),
  });

  return result;
};

/**
 *
 * @returns logout
 */

export const logout = async (): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/logout",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

//Destination bank name list
export const getBankAllNameList = async (): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/bank_detail",

    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

//Destination and source place city name list for flight
export const getFlightPlaceDetails = async (): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/flight_details",

    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

//Destination and source place city name list for Bus
export const getBusPlacesDetails = async (): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/bus_details",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return result;
};

//Authentication For load transaction history details
export const loadTransactionHistory = async (user_id: string): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/transaction_details",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id: user_id,
    }),
  });

  return result;
};

//Authentication For change password
export const authenticationForChangePassword = async (
  user_id: string,
  currentPassword: string,
  newPass: string
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/change_password",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id: user_id,
      current_password: currentPassword,
      new_password: newPass,
    }),
  });
  return result;
};

/**
 *
 * @param user_id Id of the user.
 * @param currentPassword Users's current password.
 * @param newPass User's new password .
 * @returns
 */
export const uploadImage = async (
  user_id: string,
  image_string: string,
  updateProgressCallback: Function
): Promise<any> => {
  const result = await axios({
    url:
      "http://ec2-65-1-95-227.ap-south-1.compute.amazonaws.com:8000/api/v1/profile_pic",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      user_id: user_id,
      image_data: image_string,
    }),
    onUploadProgress: (progressEvent) => updateProgressCallback(progressEvent),
  });
  return result;
};
