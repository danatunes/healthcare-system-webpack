import { publicRequest } from "../../api/requestMethods";
import { setError } from "./user";

export const getAllClinics = () => async (dispatch) => {
  dispatch(setFetching(true));
  try {
    await publicRequest.get("api/v1/hospital/get-all").then((data) => {
      dispatch(setClinics(data.data));
    });
  } catch (e) {
    console.log(e.message);
    dispatch(setError(true));
  }
};

export const getAllFeedbacks = (id) => async (dispatch) => {
  dispatch(setFetching(true));
  try {
    await publicRequest
      .get("/api/v1/hospital/doctor/hospital/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data, "data");
        dispatch(setFeedbacks(data.data));
      });
  } catch (e) {
    console.log(e.message);
    dispatch(setError(true));
  }
};

export const setClinics = (payload) => ({
  type: "SET_CLINICS",
  payload,
});

export const setFetching = (payload) => ({
  type: "SET_FETCHING",
  payload,
});

export const setFeedbacks = (payload) => ({
  type: "SET_FEEDBACKS",
  payload,
});
