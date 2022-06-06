import { publicRequest } from "../../api/requestMethods";
import { toast } from "react-toastify";

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

export const setPatients = (payload) => ({
  type: "GET_PATIENTS",
  payload,
});

export const getMyPatients = () => async (dispatch) => {
  try {
    await publicRequest
      .get("/api/v1/doctor/patients/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        dispatch(setPatients(res.data));
      });
  } catch (e) {
    toast("Error fetching patients", {
      type: "error",
      position: "top-right",
    });
  }
};
