const initialState = {
  isFetching: false,
  error: false,
  patients: [],
  patient: {},
};

const patients = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATIENT": {
      return {
        ...state,
        patient: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "GET_PATIENTS": {
      return {
        ...state,
        patients: action.payload,
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

export default patients;
