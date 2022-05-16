const initialState = {
  isFetching: false,
  error: false,
  doctor: {},
};

const doctor = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DOCTOR":
      return {
        ...state,
        doctor: action.payload,
        isFetching: false,
        error: false,
      };
    case "SET_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};
export default doctor;
