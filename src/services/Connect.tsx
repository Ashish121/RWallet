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
