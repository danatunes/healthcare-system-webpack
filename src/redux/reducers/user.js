const initialState = {
  currentUser: null,
  me: null,
  isFetching: false,
  error: false,
  appointments: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "DESTROY_SESSION":
      return {
        ...initialState,
      };
    case "SET_ME": {
      return {
        ...state,
        me: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "SET_MY_APPOINMENTS": {
      return {
        ...state,
        appointments: action.payload,
        isFetching: false,
        error: false,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        currentUser: action.payload,
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

export default user;
