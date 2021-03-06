const initialState = {
  isFetching: false,
  error: false,
  doctors: [],
};

const doctors = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DOCTORS": {
      return {
        ...state,
        doctors: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "SET_IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default doctors;
