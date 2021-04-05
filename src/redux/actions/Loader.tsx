const toggleLoader = (status: boolean, message = '') => {
  console.log('status: ', status, 'message:  ', message);

  return async (dispatch: any) => {
    dispatch({ type: 'TOGGLE_LOADER', message, loading: status });
  };
};

export { toggleLoader };
