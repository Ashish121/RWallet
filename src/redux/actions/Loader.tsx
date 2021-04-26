const toggleLoader = (status: boolean, message = '') => {
  return async (dispatch: any) => {
    dispatch({ type: 'TOGGLE_LOADER', message, loading: status });
  };
};

export { toggleLoader };
