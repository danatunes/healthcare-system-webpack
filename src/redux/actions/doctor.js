import { publicRequest } from "../../api/requestMethods";
import { toast } from "react-toastify";

export const setDoctorWithFeedback = (payload) => ({
  type: "SET_DOCTOR",
  payload,
});

export const setIsFetching = (payload) => ({
  type: "SET_IS_FETCHING",
  payload,
});

export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export const getDoctorWithFeedback = (id) => async (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    await publicRequest
      .get("/api/v1/patient/profile/doctor/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        console.log(data.data,"doctor data.data");
        dispatch(setDoctorWithFeedback(data.data));
      });
  } catch (e) {
    toast("Please check credentials", {
      type: "error",
      theme: "light",
    });
    dispatch(setError(true));
  }
};
