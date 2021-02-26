import { UPDATE_TOAST } from '../Contants';

const updateToast = (data: any) => {
  console.log('data&&&&&', data);

  return {
    type: UPDATE_TOAST,
    data,
  };
};

export { updateToast };
