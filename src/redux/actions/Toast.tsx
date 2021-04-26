import { UPDATE_TOAST } from '../Contants';

const updateToast = (data: any) => {
  return {
    type: UPDATE_TOAST,
    data,
  };
};

export { updateToast };
