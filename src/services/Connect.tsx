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
  fullName: string,
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
      name: fullName,
      gender: gender,
      mobile_number: mobileNo,
      password: password,
    }),
  });
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
  const userId = result.data.user.id;
  localStorage.setItem('userId', userId);
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