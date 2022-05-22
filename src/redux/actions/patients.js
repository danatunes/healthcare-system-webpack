import { publicRequest } from "../../api/requestMethods";

export const setPatient = (payload) => ({
  type: "SET_PATIENT",
  payload,
});

export const setFetching = (payload) => ({
  type: "SET_IS_FETCHING",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const getPatient = (id) => async (dispatch) => {
  dispatch(setFetching(true));
  console.log(id, "here");
  try {
    const response = await publicRequest.get(
      "/api/v1/doctor/profile/patient/" + id,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("try", response);
    dispatch(setPatient(response.data));
  } catch (e) {
    console.log(e);
    dispatch(setError(true));
  }
  dispatch(setFetching(false));
};
