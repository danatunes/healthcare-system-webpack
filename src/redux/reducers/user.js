const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "DESTROY_SESSION":
      return {
        ...initialState,
      };
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
