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


//authentication for registration

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
      name: fullName,
      gender: gender,
      mobile_number: mobileNo,
      password: password
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
