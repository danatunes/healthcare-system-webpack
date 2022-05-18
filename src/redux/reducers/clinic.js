const initialState = {
  clinics: null,
  feedbacks: [],
  stateClinic: null,
  isFetching: false,
  error: false,
};

const clinic = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEEDBACKS": {
      return {
        ...state,
        feedbacks: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "SET_CLINICS": {
      return {
        ...state,
        clinics: action.payload,
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

export default clinic;
